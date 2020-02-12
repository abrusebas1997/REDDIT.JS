const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = function (app) {
    // CREATE Comment
    app.post("/posts/:postId/comments", function (req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body);
        console.log('///////')

        // SAVE INSTANCE OF Comment MODEL TO DB
        comment
            .save()
            .then(comment => {
                console.log(req.params.postId)
                return Post.findById(req.params.postId);
            })
            .then(post => {
                post.comments.unshift(comment);
                console.log(comment)
                return post.save();

            })
            .then(post => {
                res.redirect(`/`);
            })
            .catch(err => {
                console.log(err);
            });
    });
};
