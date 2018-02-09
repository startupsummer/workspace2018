```db.createCollection('users');
db.users.insert({ _id: NumberInt(1), firstname: 'evgeny', lastname: 'marushko' });
db.users.update({ _id: 1 }, { $set: {firstname: "Evgeny", lastname: "Marushko" } });

db.createCollection('posts');
db.posts.insert({ _id: NumberInt(1), authorId: NumberInt(1), content: "hello world!", rating: [], date: "12-12-12"});
db.posts.update({ _id: 1 }, { authorId: NumberInt(1), content: "hello world!!", date: NumberLong(1518171868469) }, { upsert: true });
db.posts.update(
  { _id: 1 },
  { $set:
    {
      comments:
        [
          { _id: NumberInt(1), authorId: NumberInt(1), content: "amazing!", rating: [ { type: 'like', userId: NumberInt(2) } ] }
        ]
    }
  }
);
db.posts.update(
  { _id: 1 },
  { $push:
    {
      comments: { _id: NumberInt(2), authorId: NumberInt(1), content: "amazing![2]", rating: [ { type: 'unlike', userId: NumberInt(2) } ] }
    }
  }
);
db.posts.update(
  { _id: 1 },
  { $pull:
    {
      comments: { _id: NumberInt(1) }
    }
  }
);
db.posts.remove({ _id: NumberInt(1) });
db.posts.aggregate(
   [
      {
         $project: {
            commentsCount: { $size: "$comments" }
         }
      }
   ]
)```
