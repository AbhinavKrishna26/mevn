const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    completed: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)