var Item = require('../models/item');

exports.postItem = function(req, res){
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
};

exports.getItems = function(req, res){
	Item.find(function(err, items){
		if(err){
			res.send(err);
		}else{
			res.json(items);
		}
	});
};

exports.getItem = function(req, res){
	Item.findById(req.params.itemid, function(err, item){
		if(err){
			res.send(err);
		}else{
			res.json(item);
		}
	});
};

exports.putItem = function(req, res){
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
};

exports.deleteItem = function(req, res){
	Item.findByIdAndRemove(req.params.itemid, function(err){
		if(err){
			res.send(err);
		}else{
			res.json({ message: 'Item deleted'});
		}
	});
};