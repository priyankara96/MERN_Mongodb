const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    Address: { type: String, required: true },
    Age: { type: Number, required: true },
    birthday: { type: Date, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;