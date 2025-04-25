// src/routes/book.routes.js

const express = require('express');
const bookController = require('../controllers/book.controller');

const router = express.Router();

// GET all books
router.get('/', bookController.getAllBooks);

// GET a single book by ID
router.get('/:id', bookController.getBookById);

// POST a new book
router.post('/', bookController.createBook);

// PUT/UPDATE an existing book
router.put('/:id', bookController.updateBook);

// DELETE a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;