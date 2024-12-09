const express = require('express');
const { getBooks, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

/**
 * Route to fetch all books.
 */
router.get('/', getBooks);

/**
 * Route to create a new book.
 */
router.post('/', createBook);

/**
 * Route to update an existing book by ID.
 */
router.put('/:id', updateBook);

/**
 * Route to delete a book by ID.
 */
router.delete('/:id', deleteBook);

module.exports = router;
