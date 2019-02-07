const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
    details: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);