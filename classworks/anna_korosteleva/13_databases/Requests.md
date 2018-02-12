```javascript

db.getCollection('users').insert({firstname: 'Victor', secondname: 'Abc'})

db.getCollection('users').findAndModify({
    query: { firstname: 'Victor' },
    update: { firstname: "Sasha", secondname: "Asd"}
    })

db.getCollection('posts').insert({ 
    item: "111",
    discription: "a",
    likes: 1,
    comment: [1, 2, 3, 4]
    })

db.getCollection('posts').insert({ 
    item: "112",
    discription: "ab",
    likes: 2,
    comment: [1, 2, 3, 4, 5]
    })

db.getCollection('posts').insert({ 
    item: "116",
    discription: "abcdef",
    likes: 6
    })

db.getCollection('posts').findAndModify({
    query: { item: "116"},
    update: {$set: { comment: [2, 4, 6, 8, 0] }
}})

db.getCollection('posts').update(
    { item: "116" }, 
    { $unset: { comment: "" }}
)

db.getCollection('posts').remove({ item: "111"})

db.getCollection('posts').aggregate(
[{
    $project: {
    numberOfComments: { $size: "$comment" }
}}])
```
