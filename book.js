const mongoose = require('mongoose');

/**
 * Mongoose schema for books.
 */
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: ['Fiction', 'Non-Fiction'], required: true },
    publishedYear: { type: Number, required: true },
});

module.exports = mongoose.model('Book', bookSchema);

