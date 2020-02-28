
const mongoose = require("mongoose");
const Populate = require("../utils/autopopulate");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
content: { type: String, required: true },
author : { type: Schema.Types.ObjectId, ref: "User", required: true },
comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]

});

// Always populate the author field and comments
CommentSchema
  .pre('findOne', Populate('author'))
  .pre('find', Populate('author'))

module.exports = mongoose.model("Comment", CommentSchema);
