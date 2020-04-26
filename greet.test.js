const mount = require('@vue/test-utils').mount;
const ditchWhitespace = require('./utils').ditchWhitespace;
const Greet = require('./greet');

const expect = require('unexpected').clone();
expect.installPlugin(require('unexpected-dom'));

describe('greet', () => {

    it('creates a message', () => { // regex on HTML
        const wrapper = mount(Greet);
        expect(wrapper.html(), 'to match', /<h1.*>Hey/);
    });

    it('creates a long message', () => { // props + unexpected-dom
        const wrapper = mount(Greet, {
            propsData: {
                long: true
            }
        });
        expect(wrapper.html(), 'when parsed as HTML', 'queried for first', 'h1', 'to match', 'h1.long');
        expect(wrapper.html(), 'when parsed as HTML', 'queried for first', 'p', 'to satisfy', `<p><a>Find out more</a></p>`);
        expect(wrapper.html(), 'when parsed as HTML', 'queried for first', 'div', 'to satisfy', { children: [
            /.*/, // whitespace - this sucks!
            { name: 'h1', textContent: /great to meet you/ },
            /.*/, // ditto
            { name: 'p' },
            /.*/, // ditto
        ]});
        // WAY better alternative for before line
        expect(ditchWhitespace(wrapper.html()), 'when parsed as HTML', 'queried for first', 'div', 'to satisfy', { children: [
            { name: 'h1', textContent: /great to meet you/ },
            { name: 'p' },
        ]});
    });
});