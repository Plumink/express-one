var express = require('express');

var router = express.Router();
var {users,chapterList} = require("../config/data.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/',function(req,res,next){
  var username = req.body.username;
  var password = req.body.pwd;
  for(var i=0;i < users.length;i++){
    if(username == users[i].username && password == users[i].password){
      res.render('chapterlist',{chapterList:chapterList});
    }
    else{
      res.end("Wrong username or password, please re-enter!");
    }
  }
})

module.exports = router;
