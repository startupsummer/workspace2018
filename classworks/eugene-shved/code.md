db.createCollection("users")

db.users.insert({"firstname": "Eugene", "lastname": "Shved"})
db.users.update({"firstname": "Eugene"}, {$set: {"firstname": "Eugen"}})

db.createCollection("posts")
db.posts.insert({"title": "Sample"})
db.posts.update({"title": "Sample"}, {"title": "Samples"},{"upsert": "true"})

db.posts.insert({"title": "Sample", "comments": [{"text": "Sample text"}, {"text": "Some another Sample text"}]})

db.posts.deleteOne({ comments: { text: "Sample text" }})

db.posts.deleteOne({"title": "Sample"})

db.posts.aggregate([
{ $project: { count: { $size: "$comments" }}},
{ $group: {_id: null, total_commit: {$sum: "$count"}}}
])

db.posts.insert({"title": "Sample",
    "comments": [{"text": "Sample text", 
    likes: [{"user_id": user._id}],
    unlikes: [{"user_id": user._id}]}, 
    {"text": "Some another Sample text"}], likes: [{"user_id": user._id}]})
    

user._id = db.users.findOne({})._id
post_id = ObjectId("5a7c67fe642536ab82995586") // Sample post id from post
 
db.posts.find({"comments.likes": {$elemMatch: {"user_id": user._id}}, "_id": post_id}).forEach( function(doc) {
  array = doc.comments[0].likes;
  length = array.length;
  for (var i = 0; i < length; i++) {
    array[i]["user_id"].toString()  === user._id.toString() ? delete array[i] : array[i]
  };
  db.posts.save(doc);
});

db.posts.find({"comments.unlikes": {$elemMatch: {"user_id": user._id}}, "_id": post_id}).forEach( function(doc) {
  array = doc.comments[0].likes;
  length = array.length;
  for (var i = 0; i < length; i++) {
    array[i]["user_id"].toString()  === user._id.toString() ? delete array[i] : array[i]
  };
  db.posts.save(doc);
});


db.posts.find({})

db.posts.find({"likes": {$elemMatch: {"user_id": user._id}}, "_id": post_id}).forEach( function(doc) {
  array = doc.comments[0].likes;
  length = array.length;
  for (var i = 0; i < length; i++) {
    array[i]["user_id"].toString()  === user._id.toString() ? delete array[i] : array[i]
  };
  db.posts.save(doc);
});

db.posts.find({})
