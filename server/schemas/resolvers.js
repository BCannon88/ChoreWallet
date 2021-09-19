const { AuthenticationError } = require('apollo-server-express');
const { User, Chore, ChoreLocation, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    chores: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Chore.find(params);
    },
    chore: async (parent, { _id }) => {
      return Chore.findOne({ _id });
    },
    choreLocations: async () => {
      return ChoreLocation.find();
    },
    choreLocation: async (parent, { _id }) => {
      return ChoreLocation.findOne({ _id });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('chores')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('chores');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
        .populate('chores')
    },
    checkout: async (parent, args, context) => {
      const order = new Order({ chores: args.chores });
      const { chores } = await order.populate('chores').execPopulate();
      const line_items = [];

      for (let i = 0; i < chores.length; i++) {
        // generate chore id
        const chore = await stripe.chores.create({
          name: chores[i].name,
          description: chores[i].description
        });

        // generate price id using the chore id
        const price = await stripe.prices.create({
          chore: chore.id,
          unit_amount: chores[i].price * 100,
          currency: 'usd',
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://example.com/cancel'
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;