```javascript
db.createCollection("users");

myId = ObjectId();

db.users.insert({
    _id: myId,
    "firstName": "pavel",
    "lastName": "kalugin"
});

db.users.update({
    _id: myId
}, {
    $set: {
        'firstName': 'notPavel',
        'lastName': 'notKalugin'
    }
});

db.createCollection("posts");

postId = ObjectId();

db.posts.update({
    _id: postId
}, {
    'description': 'My first post',
    'author': 'pavel kalugin'
}, {
    'upsert': true
});

db.posts.update({_id: postId}, { 
    $push: { 'comments' : { 
        $each: [
            'Cool!',
            'Nice',
            'You suck'
        ]}
    }
});

db.posts.update({_id: postId}, {
    $unset: { 'comments': '' }
});

db.posts.deleteOne({ _id: postId });

db.posts.update({
    _id: ObjectId()
}, {
    'description': 'very original thought',
    'author': 'pavel kalugin',
    'comments' : [1, 2, 3]
}, {
    'upsert': true
});

db.posts.update({
    _id: ObjectId()
}, {
    'description': 'another very original thought',
    'author': 'pavel kalugin',
    'comments' : [1, 2]
}, {
    'upsert': true
});

db.posts.update({
    _id: ObjectId()
}, {
    'description': 'one more very original thought',
    'author': 'pavel kalugin',
    'comments' : [1, 2, 3, 4]
}, {
    'upsert': true
});

db.posts.aggregate([{ 
    $project: { 
        _id: "$_id", 
        'commentsSize': { '$size' : '$comments' }
    } } ]
);

//extra

const post = {
    'body': "Let's get started",
    'author': '123', 
    'likes': ['123', '321'], //ID's of users who likes
    'likesAmount': 2,
    'likeFunc': function(user) {
        if (this.likes.indexOf(user._id) === -1) {
            this.likes = [...this.likes, user._id];
            this.likesAmount++;
        }
    },
    'unlikeFunc': function(user) {
        if (this.likes.indexOf(user._id) !== -1) {
            this.likes
                .splice(this.likes.indexOf(user._id), 1);
            this.likesAmount--;
        }
    }    
}
```
