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
db.posts.insertOne({"author": "tonyrobbinson", "postID": "tonyrobbinson_6", "description": "It's awesome post.", "likedBy": ["tonyrobbinson", "grayfox"], "comments": []})
db.posts.insertOne({"author": "tonyrobbinson", "postID": "tonyrobbinson_7", "description": "My seventh post. 7 is my favorite number!", "likedBy": ["alenstone", "grayfox"], comments: []})
db.posts.insertOne({"author": "tonyrobbinson", "postID": "tonyrobbinson_8", "description": "If u know what i mean...", "likedBy": ["tonyrobbinson", "alenstone"], "comments": []})
db.posts.update({"postID": "tonyrobbinson_9"}, {"author": "tonyrobbinson", "postID": "tonyrobbinson_9", "description": "Upserted.", "likedBy": ["tonyrobbinson"], comments: []}, {upsert: true})
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

const postLikesValidation = (currentUser, postID) => !(db.posts.find({"postID": postID})
  .likedBy.find(liker => liker === currentUser));

const likePost = (postID) => db.posts.update({"postID": postID}, {$push: {"likedBy": `${currentUser}`}});

const unlikePost = (postID) => db.posts.update({"postID": postID}, {$pull: {"likedBy": `${currentUser}`}});

const onDoubleClickOnPost = (currentUser, postID) => { 
  if (postLikesValidation(currentUser, postID)) {
    likePost(postID);
  } else {
    unlikePost(postID);
  }
}

// can be obtained from the session
let currentUser = "tonyrobbinson";

// event.currentTarget.postID
onDoubleClickOnPost(currentUser, "tonyrobbinson_6");
onDoubleClickOnPost(currentUser, "tonyrobbinson_6");
onDoubleClickOnPost(currentUser, "tonyrobbinson_9");

// IX - Increase & decrease amount of likes for comments.
db.createCollection("comments")
db.comments.insertOne({"commentID": "tonyrobbinson_6_0", "parentPost": "tonyrobbinson_6", "text": "I think so (;", "likedBy": ["grayfox"]})
db.comments.insertOne({"commentID": "tonyrobbinson_6_1", "parentPost": "tonyrobbinson_6", "text": "Yeah!", "likedBy": ["alenstone"]})

const commentLikesValidation = (currentUser, commentID) => !(db.comments.find({"commentID": commentID})
  .likedBy.find(liker => liker === currentUser));

const likeComment = (commentID) => db.comments.update({"commentID": commentID}, {$push: {"likedBy": `${currentUser}`}});

const unlikeComment = (commentID) => db.comments.update({"commentID": commentID}, {$pull: {"likedBy": `${currentUser}`}});

const onDoubleClickOnComment = (currentUser, commentID) => { 
  if (commentLikesValidation(currentUser, commentID)) {
    likeComment(commentID);
  } else {
    unlikeComment(commentID);
  }
}

// event.currentTarget.commentID
onDoubleClickOnComment(currentUser, "tonyrobbinson_6_0");
onDoubleClickOnComment(currentUser, "tonyrobbinson_6_0");
onDoubleClickOnComment(currentUser, "tonyrobbinson_6_1");

```