var app = require('./js/app.js');

var server = app.listen(process.env.PORT || 3000, function() {
    var address = server.address(),
        host = address.address,
        port = address.port;

    console.log('http-response-tester listening at http://%s:%s', host, port);
});
