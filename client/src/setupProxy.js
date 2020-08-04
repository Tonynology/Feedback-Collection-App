//had problem following lecture 62 to create proxy, but this is solution.
//https://stackoverflow.com/questions/52605997/when-specified-proxy-in-package-json-must-be-a-string

const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google',
        { target: 'http://localhost:5000/' }
    ));

    app.use(proxy('/api/*',
        { target: 'http://localhost:5000/' }
    ));
}
