``` javascript
use taskDB

let currentUser;
let currentPost;

// 1. Создать коллекцию users и добавить туда одного пользователя
db.createCollection("users");
db.users.insertOne({name: "James", lastName: "Hetfield"});

// 2. Обновить first и last'name с помощью atomic update
currentUser = db.users.findOne({name: "James", lastName: "Hetfield"});

db.users.update(
    {_id: currentUser._id},
    {$set: {name: "Lars", lastName: "Ulrich"}}
);

// 3. Создать коллекцию posts и сделать upsert поста.
db.createCollection("posts");

db.posts.insertOne({authorId: currentUser._id, title: "Black Album", comments: []});

currentPost = db.posts.findOne({authorId: currentUser._id, title: "Black Album"});

db.posts.update(
    {_id: currentPost._id},
    {$set: {body: "Although the release was delayed until 1991..."}},
    {upsert: true}
);

// 4. Добавить комментарии в пост.
db.posts.update(
    {_id: currentPost._id},
    {$push: {comments: [{authorId: currentUser._id, body: "Last album is decent."}]}}
);

// 5. Удалить комментарии из поста (удалить пару комментов или очистить массив).
db.posts.update(
    {postId: currentPost._id},
    {$set: {comments: []}}
)

// 6. Удалить пост из коллекции.
db.posts.remove(
    {postId: currentPost._id}
);

db.posts.find();

// 7. Используя агрегацию определить сколько комментов имеет каждый пост.
db.posts.insertOne({authorId: currentUser._id, title: 'Kill Em All', comments: []});

currentPost = db.posts.findOne({authorId: currentUser._id, title: "Kill Em All"});

db.posts.update(
    {_id: currentPost._id},
    {$push: {comments: [{authorId: currentUser._id, body: "Best Album was a cover album."}]}}
);

db.posts.update(
    {_id: currentPost._id},
    {$push: {comments: [{authorId: currentUser._id, body: "Kill em all > everything else."}]}}
);

db.posts.aggregate([
    {
        $project: {
            commentsCount: {$size: "$comments"}
        }
    }
]);

```