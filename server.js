var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
var Item = require('./models/item');
mongoose.connect('mongodb://wpdba:lim1t<$Plz@ds045097.mongolab.com:45097/wpostdb');

var port = process.env.PORT || 3000;
var router = express.Router();
var itemRoute = router.route('/item/:itemid');
var itemsRoute = router.route('/items');

router.get('/', function(req, res){
	//res.json({ message: 'Something goes here!'});
	res.send('Here we go!');
});

itemsRoute.post(function(req, res){
	var item = new Item();

	item.title = req.body.title;
	item.desc = req.body.desc;
	item.price = req.body.price;
	item.viewed = 0;
	item.userid = 'mike';
	item.catid = 'stupid';


	item.save(function(err){
		if(err){
			res.send(err);
		}else{
			res.json({ item: item });
		}
	});
});
itemsRoute.get(function(req, res){
	Item.find(function(err, items){
		if(err){
			res.send(err);
		}else{
			res.json(items);
		}
	});
});
itemRoute.get(function(req, res){
	Item.findById(req.params.itemid, function(err, item){
		if(err){
			res.send(err);
		}else{
			res.json(item);
		}
	});
});
itemRoute.put(function(req, res){
	Item.findById(req.params.itemid, function(err, item){
		if(err){
			res.send(err);
		}else{
			item.price = req.body.price;
			item.save(function(err){
				if(err){
					res.send(err);
				}else{
					res.json(item);
				}
			});
		}
	});
});
itemRoute.delete(function(req, res){
	Item.findByIdAndRemove(req.params.itemid, function(err){
		if(err){
			res.send(err);
		}else{
			res.json({ message: 'Item deleted'});
		}
	});
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port 3000');
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);