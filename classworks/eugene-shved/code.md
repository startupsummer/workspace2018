db.createCollection("users")

db.users.insert({"firstname": "Eugene", "lastname": "Shved"})
db.users.update({"firstname": "Eugene"}, {$set: {"firstname": "Eugen"}})

db.createCollection("posts")
db.posts.insert({"title": "Sample"})
db.posts.update({"title": "Sample"}, {"title": "Samples"},{"upsert": "true"})

db.posts.insert({"title": "Sample", "comments": [{"text": "Sample text"}, {"text": "Some another Sample text"}]})

db.posts.deleteOne({ comments: { text: "Sample text" }})

db.posts.deleteOne({"title": "Sample"})

db.posts.aggregate([
{ $project: { count: { $size: "$comments" }}},
{ $group: {_id: null, total_commit: {$sum: "$count"}}}
])

