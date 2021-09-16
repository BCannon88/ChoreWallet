const { AuthenticationError } = require('apollo-server-express');
const { User, Chore, ChoreLocation } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    choreLocations: async () => {
      return await ChoreLocation.find();
    },
    chores: async (parent, { choreLocation, name }) => {
      const params = {};

      if (choreLocation) {
        params.choreLocation = choreLocation;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Chore.find(params).populate('choreLocation');
    },
    chore: async (parent, { _id }) => {
      return await Chore.findById(_id).populate('choreLocation');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.chores',
          populate: 'choreLocation'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.chores',
          populate: 'choreLocation'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ chores: args.chores });
    //   const { chores } = await order.populate('chores').execPopulate();
    //   const line_items = [];

    //   for (let i = 0; i < chores.length; i++) {
    //     // generate chore id
    //     const chore = await stripe.chores.create({
    //       name: chores[i].name,
    //       description: chores[i].description,
    //       images: [`${url}/images/${chores[i].image}`]
    //     });

    //     // generate price id using the chore id
    //     const price = await stripe.prices.create({
    //       chore: chore.id,
    //       unit_amount: chores[i].price * 100,
    //       currency: 'usd',
    //     });

    //     // add price id to the line items array
    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });
      
    //   return { session: session.id };
    // }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { chores }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ chores });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // updateChore: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Chore.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },
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
    }
  }
};

module.exports = resolvers;