// src/controllers/book.controller.js

const bookService = require('../services/book.service');

class BookController {
  // Get all books
  async getAllBooks(req, res, next) {
    try {
      const filters = {
        title: req.query.title,
        author: req.query.author,
        genre: req.query.genre
      };
      
      const books = await bookService.getAllBooks(filters);
      return res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }
  
  // Get book by ID
  async getBookById(req, res, next) {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      return res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }
  
  // Create a new book
  async createBook(req, res, next) {
    try {
      const bookData = req.body;
      const book = await bookService.createBook(bookData);
      return res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }
  
  // Update an existing book
  async updateBook(req, res, next) {
    try {
      const { id } = req.params;
      const bookData = req.body;
      const book = await bookService.updateBook(id, bookData);
      return res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }
  
  // Delete a book
  async deleteBook(req, res, next) {
    try {
      const { id } = req.params;
      await bookService.deleteBook(id);
      return res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BookController();