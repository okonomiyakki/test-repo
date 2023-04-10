
// // 스키마 정의하기
// const { Schema } = require("mongoose");

// const Postschema = new Schema(
//     {
//         title: String,
//         content: String,
//     },
//     {
//         timestamps: true,
//     }
// );

// module.exports = Postschema

// //모델 만들기
// const mongoose = require('mongoose')

// const Postschema = require('./schemas/board')

// exports.Post = mongoose.model('Post', Postschema)


// // 데이터베이스에 연결하기
// const mongoose = require('mongoose')

// const { Post } = require('./models')

// mongoose.connect('mongodb://localhost:27017/myapp')



// // CRUD - CREATE
// const { Post } = require('./models')

// async function main() {
//     const create = await Post.create({
//         title: 'first title',
//         content: 'second titie',
//     })

//     const multokeCreated = await Post.create([item1, item2])
// }


// // CRUD - FIND ( READ )
// const { Post } = require('./models')

// async function main() {
//     const listPost = await Post.find(query)
//     const onePost = await Post.findOne(query)
//     const postById = await Post.findById(query)
// }

// //쿼리
// personalbar.find({
//     name: 'jiwon',
//     age: {
//         $lt: 20,
//         $gte: 10,
//     },
//     languages: {
//         $in: ['ko', 'en']
//     },
//     $or: [{ status: 'ACTIVE' }, { isFresh: true }]
// })

// // CRUD - UPDATE
// async function main() {
//     const updateResult = await Post.updateOne(query, { ...})
//     const updateResults = await Post.updateMany(query, { ...})
//     const postById = await Post.findByIdAndUpdate(id, { ...})
//     const onePost = await Post.findOneAndUpdate(query, { ...})
// }



// // CRUD - DELETE
// async function main() {
//     const deleteResult = await Post.deleteOne(query, { ...})
//     const deleteResults = await Post.deleteMany(query, { ...})
//     const postById = await Post.findByIdAndelete(id, { ...})
//     const onePost = await Post.findOneAndelete(query, { ...})
// }

// //Populate
// const Post = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     comments: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Comment',
//     }]
// })

// const post = await Post.find().populate(['user', 'comments'])
// //post.user.name, post.comments[0].content



// //mongoose 커넥션 이벤트
// mongoose.connect('----')
// mongoose.connection.on('connected', () => { })
// mongoose.connection.on('disconnected', () => { })
// mongoose.connection.on('reconnected', () => { })
// mongoose.connection.on('reconnectFailed', () => { })

