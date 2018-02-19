db.createCollection("users");

db.users.insert({firstname: "Peter", lastname: "Parker"});

db.users.update({firstname: "Peter"}, {$set:{ firstname: "John", lastname : "Snow"}});

db.users.insert({firstname: "Peter", lastname: "Parker"});

db.createCollection("posts");

db.posts.insert({postId: 1});

db.posts.update({postId: 1},
	 {
	 	postId: 1,
		comments : [{text: "You look great"}], 
	  author: db.users.findOne({firstname: "Peter"})._id.str
	 },
	 { upsert: true }
);

db.posts.update({postId: 1},
	{ $push: {comments : {text: "You look great"}}}, 
	{author: db.users.findOne({firstname: "Peter"})._id.str}
);

db.posts.update({postId: 1},
	{ $push: {comments : {text: "Nice T-shirt"}}}, 
	{author: db.users.findOne({firstname: "Peter"})._id.str}
);

db.posts.update({postId: 1},
	{ $pull: {comments: {text: "Nice T-shirt"}} }
);

db.posts.remove({postId 1});

db.posts.aggregate([{
	$project:{
	total: { $size: "$comments"}
}
}]);