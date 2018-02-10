``` javascript
let user1;
let user2;
let post;
let delPost;
let comment;

//create two users
db.createCollection('users');
db.users.insertOne(
    {
        firstName: 'Jack',
        lastName: 'White'
    }
);
db.users.insertOne(
    {
        firstName: 'Big',
        lastName: 'Dipper'
    }
);

//change first and last name of Jack White to Jackie Chan
user1 = db.users.findOne({ firstName: 'Jack', lastName: 'White' });
db.users.update(
    { _id: user1._id },
    { $set: {firstName: 'Jackie', lastName: 'Chan'} }
);

//upsert 5 posts and add 15 comments
db.createCollection('posts');
user2 = db.users.findOne({ firstName: 'Big', lastName: 'Dipper' });
for (let i = 1; i <= 5; i++) {
    post = db.posts.insertOne(
        {
            content: `Post ${i}`,
            comments: [],
            userID: user1._id
        }
    );
    for (let j = 1; j <= i; j++) {
        db.posts.update(
            { _id: post.insertedId },
            { $push:
                { comments:
                    {
                        text: `Comments text ${i} ${j}`,
                        likes: [{ userID: ObjectId() }],
                        userID: user2._id
                    }
                }
            }
        );
    }
    for (let j = 1; j <= 5; j++) {
        db.posts.update(
            { _id: post.insertedId },
            { $push:
                { likes:
                    {
                        userID: ObjectId()
                    }
                }
            }
        );
    }
}

//remove fifth post and his comments
delPost = db.posts.findOne({ _id: post.insertedId });
db.posts.update(
    { _id: delPost._id },
    { comments: [] }
);
db.posts.remove({ _id: delPost._id });

//finding coment's number for Jackie Chan posts
db.posts.aggregate([
    { $match: { userID: user1._id } },
    { $group:
        { _id: "commentsCount", count:
            { $push:
                {  $size: "$comments" }
            }
        }
    }
]);
    
//Big Dipper like first Jackie Chan's post
post = db.posts.findOne({ content: "Post 1" });
if (db.posts.findOne({ likes: { userID: user2._id } }) === null) {
    db.posts.update(
        { _id: post._id },
        { $push:
            { likes:
                {
                    userID: user2._id
                }
            }
        }
    );
}
    
//Big Dipper unlike first Jackie Chan's post
db.posts.update(
    { _id: post._id },
    { $pull:
        { likes:
            {
                userID: user2._id
            }
        }
    }
);
```