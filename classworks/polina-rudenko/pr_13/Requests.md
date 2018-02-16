```javascript
let user1;
let user2;
let post;

db.createCollection("users")

db.getCollection("users").insert({firstname: "Polina", lastname: "Rudenko"})
db.getCollection("users").insert({firstname: "Misha", lastname: "Brown"})

user1 = db.users.findOne({firstname: 'Polina'})
user2 = db.users.findOne({firstname: 'Misha'})

db.users.update({_id:user1._id},{$set:{firstname:'Ivan',lastname:'Ololo'}})

db.createCollection("posts")

db.posts.update({postNumber:1},{postNumber:1, authorId:user1._id, comments:[], description:'My first post'},{upsert: true})
db.posts.update({postNumber:2},{postNumber:2, authorId:user2._id, comments:[], description:'Secondt post'},{upsert: true})

post= db.posts.findOne({postNumber:1})

db.posts.update({postNumber: post.postNumber},{$push: {comments:{ $each:[{authorId:user1._id, text: 'comment1'},
{authorId:user2._id, text: 'comment2'},{authorId:user1._id, text: 'comment3'}]}}})

db.posts.update({postNumber: 2},{$push: {comments:{ $each:[{authorId:user1._id, text: 'comment1'},
{authorId:user2._id, text: 'comment2'},{authorId:user1._id, text: 'comment3'}]}}})

db.posts.update(
    { postNumber: post.postNumber },
    { $pull: { comments: { authorId: user1._id }} },
    { multi: true  }
)

try {
   db.posts.deleteOne({postNumber: post.postNumber})
} catch (e) {
   print(e);
}

db.posts.aggregate([
    { $match: { postNumber: 2} },
    { $project:
        { _id: "сommentsNumber", count:
            {  $size: "$comments" }
        }
    }
]);

```
