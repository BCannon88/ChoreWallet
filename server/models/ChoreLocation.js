const mongoose = require('mongoose');

const { Schema } = mongoose;

const choreLocationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const ChoreLocation = mongoose.model('ChoreLocation', choreLocationSchema);

module.exports = ChoreLocation;
