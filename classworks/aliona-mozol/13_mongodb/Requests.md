```javascript
let user1;
let user2;
let post1;

db.createCollection('users');

db.users.insert(
    {
        firstName: 'Bob',
        lastName: 'Brown',
        userPhoto: 'user1.jpg'
    }
);

db.users.insert(
    {
        firstName: 'Sam',
        lastName: 'Moment',
        userPhoto: 'user2.jpg'
    }
);

user1 = db.users.findOne({ firstName: 'Bob' });

db.users.update(
    { _id: user1._id },
    { $set:
        {
            firstName: 'Tom',
            lastName: 'Waters'
        }
    }
);

db.createCollection('posts');

db.posts.update(
    { postNumber: 1 },
    {
        postNumber: 1,
        authorId: user1._id,
        description: 'The best post ever!',
        likes: [],
        comments: [],
        postPhoto: 'post.jpg'
    },
    { upsert: true }
);

db.posts.insert(
    {
        postNumber: 2,
        authorId: user1._id,
        description: 'The best post ever number 2!',
        likes: [],
        comments: [],
        postPhoto: 'post2.jpg'
    }
);

db.posts.insert(
     {
        postNumber: 3,
        authorId: user1._id,
        description: 'The best post ever number 3!',
        likes: [],
        comments: [],
        postPhoto: 'post3.jpg'
    }
);

post1 = db.posts.findOne({ postNumber: 1 });
user2 = db.users.findOne({ firstName: 'Sam' });

db.posts.update(
    { postNumber: post1.postNumber },
    { $push:
        { comments: { $each:
            [
                { commentId: ObjectId(), authorId: user1._id, likes: [], commentText: 'Awesome!' },
                { commentId: ObjectId(), authorId: user2._id, likes: [], commentText: 'Super!' }
            ]}}
    }
);

db.posts.update(
    { },
    { $pull: { comments: { authorId: user1._id }}},
    { multi: true }
);

try {
    db.posts.deleteOne({ postNumber: post1.postNumber } );
} catch (e) {
    print(e);
};

db.posts.update(
    { postNumber: 2 },
    { $push:
        { comments: { $each:
            [
                { commentId: ObjectId(), authorId: user1._id, likes: [], commentText: 'Brilliant!' },
                { commentId: ObjectId(), authorId: user2._id, likes: [], commentText: 'That\'s charming!' }
            ]}}
    }
);

db.posts.update(
    { postNumber: 3 },
    { $push:
        { comments: { $each:
            [
                { commentId: ObjectId(), authorId: user1._id, likes: [], commentText: 'Awesome!' },
                { commentId: ObjectId(), authorId: user2._id, likes: [], commentText: 'Super!' },
                { commentId: ObjectId(), authorId: user1._id, likes: [], commentText: 'Amazing!' },
                { commentId: ObjectId(), authorId: user2._id, likes: [], commentText: 'Incredible!' }
            ]}}
    }
);

db.posts.aggregate([
    { $match: { postNumber: 2} },
    { $project:
        { _id: "numberOfComments2", count:
            {  $size: "$comments" }
        }
    }
]);

db.posts.aggregate([
    { $match: { postNumber: 3} },
    { $project:
        { _id: "numberOfComments3", count:
            {  $size: "$comments" }
        }
    }
]);

// like post
post1 = db.posts.findOne({ description: 'The best post ever number 3!' });

db.posts.update(
    { postNumber: post1.postNumber },
    { $addToSet: { likes: { userId: user1._id }}}
);
db.posts.update(
    { postNumber: post1.postNumber },
    { $addToSet: { likes: { userId: user2._id }}}
);

// unlike post
db.posts.update(
    { postNumber: post1.postNumber },
    { $pull: { likes: { userId: user1._id }}}
);

// like comment
db.posts.update(
    { postNumber: post1.postNumber, 'comments.commentText': 'Awesome!' },
    { $addToSet: { 'comments.$.likes': { userId: user2._id }}}
);
db.posts.update(
    { postNumber: post1.postNumber, 'comments.commentText': 'Super!' },
    { $addToSet: { 'comments.$.likes': { userId: user2._id }}}
);

// unlike comment
db.posts.update(
    { postNumber: post1.postNumber, 'comments.commentText': 'Awesome!' },
    { $pull: { 'comments.$.likes': { userId: user2._id }}}
);
```
