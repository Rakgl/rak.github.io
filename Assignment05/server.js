const http = require('http');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write("Hello worlddddd");
    res.end();
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});
