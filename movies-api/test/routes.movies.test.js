const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies.js', {
        '../services/movies.js': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', function(done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock,
                    message: 'Movies listed'
                });

                done();
            });
        });
    });

    describe('GET /movie', function () {
        it('should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with a movie', function (done) {
            const movieIdMock = '5f240efcf373ccfcf8ec4750';
            request
                .get(`/api/movies/${movieIdMock}`)
                .end((err, res) => {
                    assert.deepStrictEqual(res.body, {
                        data: moviesMock[0],
                        message: 'Movie retrieved'
                    });

                    done();
                });
        });
    });

    describe('POST /movies', function () {
        it('should respond with status 201', function (done) {
            request.post('/api/movies').expect(201, done);
        });

        it('should respond with a movie id', function (done) {
            request
                .post('/api/movies')
                .send(moviesMock[0])
                .end((err, res) => {
                    assert.deepStrictEqual(res.body, {
                        data: moviesMock[0].id,
                        message: 'Movie created'
                    });

                    done();
                });
        });
    });

    describe('PUT /movies', function () {
        const movieIdMock = '5f240efcf373ccfcf8ec4750';
        it('should respond with status 200', function (done) {
            request.put(`/api/movies/${movieIdMock}`).expect(200, done);
        });

        it('should respond with a movie', function (done) {
            request
                .put(`/api/movies/${movieIdMock}`)
                .send(moviesMock[1])
                .end((err, res) => {
                    assert.deepStrictEqual(res.body, {
                        data: moviesMock[1],
                        message: 'Movie updated'
                    });

                done();
            });
        });
    });

    describe('DELETE /movies', function () {
        const movieIdMock = '5f240efcf373ccfcf8ec4750';
        it('should respond with status 200', function (done) {
            request.delete(`/api/movies/${movieIdMock}`).expect(200, done);
        });

        it('should respond with a movie', function (done) {
            request
                .delete(`/api/movies/${movieIdMock}`)
                .send(moviesMock[0])
                .end((err, res) => {
                    assert.deepStrictEqual(res.body, {
                        data: moviesMock[0],
                        message: 'Movie deleted'
                    });

                    done();
                });
        });
    });

});
