const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
  foreignKey: 'post_id',
onDelete: 'CASCADE'
})

// User.hasMany(Post, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// User.belongsToMany(Comment, {
//   through: {
//     model: Post,
//     unique: false
//   },
// })

// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Post.belongsTo(Comment, {
//   foreignKey: 'comment_id',
//   onDelete: 'CASCADE'
// });

// Comment.hasOne(Post, {
//   foreignKey: 'comment_id',
//   onUpdate: 'CASCADE'
// });

// Comment.hasOne(User, {
//   through: {
//     model: Post,
//     unique: false
// },
// })

module.exports = { User, Post, Comment };