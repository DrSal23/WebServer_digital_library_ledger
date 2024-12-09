const request = require('supertest');
const app = require('../app');

describe('Books API', () => {
    it('should fetch all books', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new book', async () => {
        const book = { title: 'Test Book', author: 'John Doe', genre: 'Fiction', publishedYear: 2022 };
        const res = await request(app).post('/books').send(book);
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual('Test Book');
    });

    // Add additional tests for update and delete
});
