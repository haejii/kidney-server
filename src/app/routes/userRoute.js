module.exports = function(app){
    const user = require('../controllers/userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    app.route('/app/signUp').post(user.signUp);
    app.route('/app/signIn').post(user.signIn);
    app.route('/app/Emailcheck').post(user.Emailcheck);

    app.get('/check', jwtMiddleware, user.check);

    app.post('/user', user.signUp);
    app.post('/login', user.signIn);
    app.post('/emailCheck', user.Emailcheck);
    app.post('/nicknameCheck', user.Nicknamecheck);


    //app.patch('./user', jwtMiddleware, user.updateUserName);
};