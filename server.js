var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var itemController = require('./controllers/item');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://wpdba:lim1t<$Plz@ds045097.mongolab.com:45097/wpostdb');

var port = process.env.PORT || 3000;
var router = express.Router();

router.route('/items')
	.post(itemController.postItem)
	.get(itemController.getItems);

router.route('/item/:itemid')
	.get(itemController.getItem)
	.put(itemController.putItem)
	.delete(itemController.deleteItem);

router.get('/', function(req, res){
	res.send('Here we go!');
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port 3000');
