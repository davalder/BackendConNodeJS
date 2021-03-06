const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe('utils - buildMessage', function() {
    describe('when receives an entity and an action', function() {
        it('should return the respective message', function() {
            const result = buildMessage('movie', 'create');
            const expect = 'movie created';
            assert.deepStrictEqual(result, expect);
        });
    });

    describe('When recives an entity and an antion is  list', function() {
        it('should return the respective message with the entity in plural', function() {
            const result = buildMessage('movie', 'list');
            const expect = 'movies listed';
            assert.deepStrictEqual(result, expect);
        })
    })
});