
const account = require('./account/lib.js')
module.exports = function (app) {
    app.post('/login',account.login)
    app.post('/signup',account.signup)
    app.post('/upload',function(req, res){
        console.log(req.body)
        account.upload
      });
}