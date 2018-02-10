``` javascript

use StarlingDB

// I - Create and fill users collection (username is unique field)
db.createCollection("users")
db.users.insertOne({"username": "alenstone", "firstName": "Alen", "lastName": "Stone", "avatar": "imgs/alenstone.jpg"})
db.users.insertOne({"username": "grayfox", "firstName": "Gray", "lastName": "Fox", "avatar": "imgs/grayfox.jpg"})
db.users.insertOne({"username": "tonyrobbinson","firstName": "Tony","lastName": "Robbinson", "avatar": "imgs/tonyrobbinson.jpg"})

// II - Update first name & last name with atomic update
db.users.update({"username": "grayfox"}, {$set: {"firstName": "Tom", "lastName": "Riddle"}})

// III - Create and fill posts collection, then make upsert of one post.
db.createCollection("posts")
db.posts.insertOne({"author": "tonyrobbinson", "postID": "tonyrobbinson_6", "description": "It's awesome post.", "likes": 49, "comments": []})
db.posts.insertOne({"author": "tonyrobbinson", "postID": "tonyrobbinson_7", "description": "My seventh post. 7 is my favorite number!", "likes": 77, comments: []})
db.posts.insertOne({"author": "tonyrobbinson", "postID": "tonyrobbinson_8", "description": "If u know what i mean...", "likes": 16, "comments": []})
db.posts.update({"postID": "tonyrobbinson_9"}, {"author": "tonyrobbinson", "postID": "tonyrobbinson_9", "description": "Upserted.", "likes": 8, comments: []}, {upsert: true})
db.posts.find()

//	IV - Add a few comments to one post
db.posts.updateOne({"postID": "tonyrobbinson_6"}, {$push: {"comments": "I think so (;"}})
db.posts.updateOne({"postID": "tonyrobbinson_6"}, {$push: {"comments": "Yeah!"}})
db.posts.find()

// V  - Remove all comments of the same post
db.posts.update({"postID": "tonyrobbinson_6"}, {$set: {"comments": []}})
db.posts.find()

// VI - Delete unpopular post
db.posts.remove({"postID": "tonyrobbinson_8"})
db.posts.find()

// VII - Restore a few comments and count them
db.posts.updateOne({"postID":"tonyrobbinson_6"}, {$push: {"comments": "I think so (;"}})
db.posts.updateOne({"postID":"tonyrobbinson_6"}, {$push: {"comments": "Yeah!"}})
db.posts.aggregate([
  {
   $project: {
     commentsAmount: { $size: "$comments" }
   }
  }
])
db.posts.find() 
db.stats()

// VIII - Increase & decrease amount of likes for posts.
db.posts.update({"postID": "tonyrobbinson_6"}, {$inc: {"likes": 1}})
db.posts.update({"postID": "tonyrobbinson_9"}, {$inc: {"likes": -1}})

// IX - Increase & decrease amount of likes for comments.
db.createCollection("comments")
db.comments.insertOne({"commentID": "tonyrobbinson_6_0", "parentPost": "tonyrobbinson_6", "text": "I think so (;", "likes": 0})
db.comments.insertOne({"commentID": "tonyrobbinson_6_1", "parentPost": "tonyrobbinson_6", "text": "Yeah!", "likes": 1})
db.comments.update({"commentID": "tonyrobbinson_6_0"}, {$inc: {"likes": 1}})
db.comments.update({"commentID": "tonyrobbinson_6_1"}, {$inc: {"likes": -1}})

```