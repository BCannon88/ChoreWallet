const mongoose = require('mongoose');

const { Schema } = mongoose;

const choreSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    choreLocation: {
        type: Schema.Types.ObjectId,
        ref: 'ChoreLocation',
        required: true
    }
});

const Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;