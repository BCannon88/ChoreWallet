const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    choreCompletionDate: {
        type: Date,
        default: Date.now
    },
    chores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Chore'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;