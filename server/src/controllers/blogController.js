const { Blog } = require('../models');

exports.blogs = async (req, res) => {
    const posts = await Blog.findAll({ where: { published: true }, limit: 10, order: [['createdAt', 'DESC']]});
    if(!posts || posts.length === 0) return res.status(404).send({ error: 'No posts found' });
    res.status(200).send(posts);
}

exports.blog = async(req, res) => {
    const posts = await Blog.findOne({ where: { id: req.params.id }});
    if(!posts) return res.status(404).send({ error: 'No blog found' });
    res.status(200).send(posts);
}

exports.blogCreate = async(req, res) => {
    console.log(req.body);
    const { title, author, description, body, published } = req.body;
    if(!title || !author || !description || !body) return res.status(400).send({ error: 'Malformed Data' });
    const wordCount = body.split(' ').length;
    const post = await Blog.create({ title, author, description, body, published, wordCount });
    res.status(201).send(post);
}
