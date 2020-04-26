const GREET = {
    template: `<div><h1 :class='{long: long, short: (!long)}'>{{ long ? 'Hello, great to meet you' : 'Hey there' }}</h1><p><a href='#'>Find out more</a></p></div>`,
    props: {
        'long': {
            type: Boolean,
            required: false,
            default: false
        },
    },
};

if (typeof(module) !== 'undefined') {
    module.exports = GREET;
} else if (typeof(Vue) !== 'undefined') {
    Vue.component('greet', GREET);
} else {
    throw 'Neither module nor Vue';
}
