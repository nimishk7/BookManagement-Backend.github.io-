// src/services/book.service.js

const prisma = require('./prisma.service');

class BookService {
  // Get all books with optional filtering
  async getAllBooks(filters = {}) {
    const { title, author, genre } = filters;
    
    const where = {};
    if (title) where.title = { contains: title };
    if (author) where.author = { contains: author };
    if (genre) where.genre = { contains: genre };
    
    return prisma.book.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });
  }
  
  // Get a single book by ID
  async getBookById(id) {
    const book = await prisma.book.findUnique({
      where: { id: Number(id) }
    });
    
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    
    return book;
  }
  
  // Create a new book
  async createBook(bookData) {
    return prisma.book.create({
      data: bookData
    });
  }
  
  // Update an existing book
  async updateBook(id, bookData) {
    const book = await prisma.book.findUnique({
      where: { id: Number(id) }
    });
    
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    
    return prisma.book.update({
      where: { id: Number(id) },
      data: bookData
    });
  }
  
  // Delete a book
  async deleteBook(id) {
    const book = await prisma.book.findUnique({
      where: { id: Number(id) }
    });
    
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    
    return prisma.book.delete({
      where: { id: Number(id) }
    });
  }
}

module.exports = new BookService();