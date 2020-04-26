const ditchWhitespace = require('./utils').ditchWhitespace;

const expect = require('unexpected').clone();

describe('utils', () => {

    it('removes whitespace', () => {
        expect(ditchWhitespace('<div>\r\n   \t<p>'), 'to equal', '<div><p>');
        expect(ditchWhitespace('<div><p>'), 'to equal', '<div><p>');
        expect(ditchWhitespace('<div>sth<p>'), 'to equal', '<div>sth<p>');
    });
});