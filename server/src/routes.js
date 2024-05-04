const controllers = require('./controllers'); 
const authPolicy = require('./policies/authPolicy');
const requireAuth = require('./policies/requiresAuth');

module.exports = (app) => {
    // Development Debugging Routes
    app.get('/heartbeat', controllers.devController.heartbeat);
    app.get('/stats', controllers.devController.stats);

    // Authentication Routes
    app.post('/register', requireAuth, authPolicy.register, controllers.authenticationController.register);
    app.post('/login', authPolicy.login, controllers.authenticationController.login);
    app.post('/user/validate', controllers.authenticationController.validateToken);

    // Blog Routes
    app.get('/blogs', controllers.blogController.blogs);
    app.get('/blog/:id', controllers.blogController.blog);
    app.post('/blog/create', requireAuth, controllers.blogController.blogCreate);
    app.delete('/blog/:id', requireAuth, controllers.blogController.blogDelete);
    app.put('/blog/:id', requireAuth, controllers.blogController.blogEdit);

}