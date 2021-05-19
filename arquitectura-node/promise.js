const asyncCallback = function (cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return cb(null, 'hello world');
        } else {
            cb(new Error('hello error'))
        }
    }, 2000);
};
