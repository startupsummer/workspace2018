``` javascript
db.createCollection('users'); //создаём коллекцию пользователей

db.users.insert({name: "Ivanko", surname: "OkNavi", userpic: 'img1.jpg'}); //создаём пользователя Иванко

db.users.update({name: "Ivanko", surname: "OkNavi"}, { //меняем ползователю Иванко имя
    $set: {name: "Nikita", surname: "Drobysh"}
});

db.users.insert({name: "Masha", surname: "Zaranko", userpic: 'img2.jpg'}); //создаём нового пользователя Машу

db.users.insert({name: "Aliaksandr", surname: "Lukashenko"}); //...и Сашу
    
db.createCollection('posts');  //создаём новую коллекцию с постами

db.posts.update({postNumber: 1}, //апсертим пост (если уже есть - изменяем, если нет - создаём)
    {postNumber: 1, likes: [], comments: [], image: 'img3.jpg', author: db.users.findOne({name: 'Nikita'})._id.str}, 
    {upsert: true})

db.posts.update({postNumber: 2}, //апсертим пост
    {postNumber: 2, likes: [], comments: [], image: 'img4.jpg', author: db.users.findOne({name: 'Masha'})._id.str}, 
    {upsert: true}) 

db.posts.update({postNumber: 1}, //добавляем коммент к посту никиты
    {$push: {comments: {text:'wow, so cute', author: db.users.findOne({name: 'Nikita'})._id.str, likes: []}}});
    
db.posts.update({postNumber: 1}, //...и ещё один
{$push: {comments: {text:'i don\'t like your lips!', author: db.users.findOne({name: 'Masha'})._id.str, likes: []}}});

db.posts.update({postNumber: 1}, //...и ещё один
{$push: {comments: {text:'i don\'t like your sad mood, stay positive!', author: db.users.findOne({name: 'Aliaksandr'})._id.str, likes:[]}}});

db.posts.update({postNumber: 1}, //удаляем неприятный комментарий
    {$pull: {comments: {text:'i don\'t like your lips!'}}}); 
    
db.posts.remove({postNumber: 1}) //удаляем пост никиты

db.posts.update({postNumber: 2}, //добавляем коммент к посту маши
    {$push: {comments: {text:'1', author: db.users.findOne({name: 'Nikita'})._id.str, likes: []}}});
    
db.posts.update({postNumber: 2}, //...и ещё один
    $push: {comments: {text:'2', author: db.users.findOne({name: 'Nikita'})._id.str, likes: []}}});

db.posts.update({postNumber: 2}, //...и ещё один
    {$push: {comments: {text:'3', author: db.users.findOne({name: 'Nikita'})._id.str, likes: []}}});

db.posts.aggregate([{$project: {commentsCount: {$size: '$comments'}}}]); //агрегацией подсчитываем количество комментов
```