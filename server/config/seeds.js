const db = require('./connection');
const { User, Chore, ChoreLocation } = require('../models');

db.once('open', async () => {
    await ChoreLocation.deleteMany();

    const choreLocations = await ChoreLocation.insertMany([
        { name: 'Kitchen' },
        { name: 'Bathroom' },
        { name: 'Bedroom' },
        { name: 'Living Room' },
        { name: 'Outside' }
    ]);

    console.log('choreLocations seeded');

    await Chore.deleteMany();

    const Chores = await Chore.insertMany([
        {
            name: 'Dishes',
            description:
                'Rinse dirty dishes and place them in the dishwasher. If dishwasher is clean, put clean dishes away',
            ChoreLocation: choreLocations[0]._id,
            price: 5.00
        },
        {
            name: 'Mopping',
            description: 'Mop and Dry the kitchen floor',
            ChoreLocation: choreLocations[0]._id,
            price: 5.00
        },
        {
            name: 'Trash',
            description: 'Take the trash out to the garbage can',
            ChoreLocation: choreLocations[0]._id,
            price: 5.00
        },
        {
            name: 'Shower',
            description: 'Clean the shower and tub',
            ChoreLocation: choreLocations[1]._id,
            price: 10.00
        },
        {
            name: 'Mirrors',
            description: 'Clean all mirrors',
            ChoreLocation: choreLocations[1]._id,
            price: 5.00
        },
        {
            name: 'Toilet',
            description: 'Clean the toilet area',
            ChoreLocation: choreLocations[1]._id,
            price: 10.00
        },
        {
            name: 'Bed',
            description: 'Change the sheets and make the bed',
            ChoreLocation: choreLocations[2]._id,
            price: 5.00
        },
        {
            name: 'Sweep',
            description: 'Sweep floors and under bed',
            ChoreLocation: choreLocations[2]._id,
            price: 5.00
        },
        {
            name: 'Laundry',
            description: 'Gather all laundry, sort and place in the laundry room',
            ChoreLocation: choreLocations[2]._id,
            price: 10.00
        },
        {
            name: 'Vacuum',
            description: 'Vacuum the entire living room',
            ChoreLocation: choreLocations[3]._id,
            price: 10.00
        },
        {
            name: 'Windows',
            description: 'Clean all windows',
            ChoreLocation: choreLocations[3]._id,
            price: 10.00
        },
        {
            name: 'Dust',
            description: 'Dust the entire living room',
            ChoreLocation: choreLocations[3]._id,
            price: 15.00
        },
        {
            name: 'Grass',
            description: 'Cut the grass',
            ChoreLocation: choreLocations[4]._id,
            price: 20.00
        },
        {
            name: 'Garbage',
            description: 'Take all garbage to the curb',
            ChoreLocation: choreLocations[4]._id,
            price: 10.00
        },
        {
            name: 'Wash Cars',
            description: 'Wash and vacuum all vehicles',
            ChoreLocation: choreLocations[4]._id,
            price: 30.00
        }

    ]);

    console.log('Chores seeded');

    await User.deleteMany();

    // await User.create({
    //     firstName: 'Pamela',
    //     lastName: 'Washington',
    //     email: 'pamela@testmail.com',
    //     password: 'password12345',
    //     orders: [
    //         {
    //             Chores: [Chores[0]._id, Chores[0]._id, Chores[1]._id]
    //         }
    //     ]
    // });

    // await User.create({
    //     firstName: 'Elijah',
    //     lastName: 'Holt',
    //     email: 'eholt@testmail.com',
    //     password: 'password12345'
    // });

    // console.log('users seeded');

    process.exit();
});
