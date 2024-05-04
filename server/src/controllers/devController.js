const { Blog } = require('../models');

exports.heartbeat = (req, res) => {
    res.status(200).send({status: 200, message: 'Server is running!',});
}

exports.stats = async (req, res) => {
    const blogPosts = await Blog.count({ where: { published: true }});

    res.send({
        status: 200, 
        blogPosts: blogPosts
    });
}
