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

    console.log('ChoreLocations seeded');

    await Chore.deleteMany();

    const chores = await Chore.insertMany([
        {
            name: 'Dishes',
            description:
                'Rinse dirty dishes and place them in the dishwasher. If dishwasher is clean, put clean dishes away',
            choreLocation: choreLocations[0]._id,
            price: 5.00
        },
        {
            name: 'Mopping',
            description: 'Mop and Dry the kitchen floor',
            choreLocation: choreLocations[0]._id,
            price: 5.00
        },
        {
            name: 'Trash',
            description: 'Take the trash out to the garbage can',
            choreLocation: choreLocations[0]._id,
            price: 5.00
        },
        {
            name: 'Shower',
            description: 'Clean the shower and tub',
            choreLocation: choreLocations[1]._id,
            price: 10.00
        },
        {
            name: 'Mirrors',
            description: 'Clean all mirrors',
            choreLocation: choreLocations[1]._id,
            price: 5.00
        },
        {
            name: 'Toilet',
            description: 'Clean the toilet area',
            choreLocation: choreLocations[1]._id,
            price: 10.00
        },
        {
            name: 'Bed',
            description: 'Change the sheets and make the bed',
            choreLocation: choreLocations[2]._id,
            price: 5.00
        },
        {
            name: 'Sweep',
            description: 'Sweep floors and under bed',
            choreLocation: choreLocations[2]._id,
            price: 5.00
        },
        {
            name: 'Laundry',
            description: 'Gather all laundry, sort and place in the laundry room',
            choreLocation: choreLocations[2]._id,
            price: 10.00
        },
        {
            name: 'Vacuum',
            description: 'Vacuum the entire living room',
            choreLocation: choreLocations[3]._id,
            price: 10.00
        },
        {
            name: 'Windows',
            description: 'Clean all windows',
            choreLocation: choreLocations[3]._id,
            price: 10.00
        },
        {
            name: 'Dust',
            description: 'Dust the entire living room',
            choreLocation: choreLocations[3]._id,
            price: 15.00
        },
        {
            name: 'Grass',
            description: 'Cut the grass',
            choreLocation: choreLocations[4]._id,
            price: 20.00
        },
        {
            name: 'Garbage',
            description: 'Take all garbage to the curb',
            choreLocation: choreLocations[4]._id,
            price: 10.00
        },
        {
            name: 'Wash Cars',
            description: 'Wash and vacuum all vehicles',
            choreLocation: choreLocations[4]._id,
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
