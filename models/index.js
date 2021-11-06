const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.belongsToMany(Comment, {
  through: Post,
  foreignKey:'user_id'
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsTo(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

Comment.hasOne(Post, {
  foreignKey: 'comment_id'
});

Comment.hasOne(User, {
  through: Post,
  foreignKey: 'comment_id',
  unique: false
})

module.exports = { User, Post, Comment };
