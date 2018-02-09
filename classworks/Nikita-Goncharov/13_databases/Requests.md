ê``` javascript
db.createCollection('users', {})  // create an empty collection users

db.users.insertOne({
    firstname: '', 
    lastname: ''
}) // insert one user with empty firstname and lastname

var user = db.users.findOne({
    firstname: '', 
    lastname: ''
}) // create a varible to store id of user

db.users.update({
    _id: user._id
}, {
    $set: {
        firstname: 'John', 
        lastname: 'Smith'
    }
}) // atomic update of firstname and lastname

db.createCollection('posts', {}) // create an empty collection posts
db.posts.update({}, {}, { upsert: true }) // create an empty post
var post = db.posts.findOne({}) // create a varible to store id of post

db.posts.update({ 
    _id: post._id
}, { 
    $push: {
        comments: []
    }
}) // add comments(an empty array) to post by its id
db.posts.update({}, {
    comments: [{
        author: 'Somebody',
        text: 'kek',
        commentLikeUnlike: false,
    }, {
        author: 'Somebody2',
        text: 'lol',
        commentLikeUnlike: false,
    }] 
}, { upsert: true }) // upsert of post to add comments with content
db.posts.insertOne({
    comments: [{
        author: 'Mike',
        text: 'omg',
        commentLikeUnlike: false,
    }, {
        author: 'Helen',
        text: 'ooh',
        commentLikeUnlike: false,
    }]
}) // add new post with comments
db.posts.update({ 
    _id: post._id
}, {
    $unset: { 
        comments: [] 
    } 
}, false, true) // remove comments key from the post
db.posts.remove({_id: post._id}) // remove one post from collection

db.posts.aggregate([
    {
        $match: {
            comments: {"$exists": true}
        },
    }, { 
       $project: {
           count: {
                $size: '$comments'
           }
        }
    }, {
        $group: {
            _id: 'group',
            count: {
                $sum: '$count',
            }
        }
    }
])

var postsArr1 = db.posts.find({}, {_id:1}).map(function(item){return item._id;}) // create and store array with Id for each post

db.users.update({ 
    _id: user._id
}, { 
    $push: {
        posts: postsArr1
    }
})// add in the user key 'posts' with array of Id for each post 

db.posts.update({
}, {
    $set: {
        postLikeUnlike:false
    }
}, {
    upsert: true,
    multi: true
}) // add like/unlike to posts
```
