var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res){
	//res.json({ message: 'Something goes here!'});
	res.send('Hello there world');
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port 3000');
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);