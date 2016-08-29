var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var Post = require('../models/post');
var Ban = require('../models/ban')
var moment = require('moment-timezone');
var cookieParser = require("cookie-parser");

function init(){
  Post.findOne({_id: 0}, function(err, doc){
    if(err){
      return 'error';
    }
    if(doc){
      return true;
    }
    else{
      var postZero = new Post({
        content: "Welcome to 401chan!",
        parent: -1,
        children: [],
        timestamp: moment().tz('America/New_York').format('YYYY/M/D k:mm:ss'),
        ip: "you'll never know"
      })
      postZero.save();
    }
  })
}

router.get('/', function(req, res, next){
  init();
  res.cookie('ancestorId', '0', {secure: false, httpOnly: false})
  res.render('index');
});

router.get('/:postId', function(req, res, next){
  init();
  res.cookie('ancestorId', req.params.postId, {secure: false, httpOnly: false});
  res.render('index');
})

router.post('/signin', function(req, res, next){
   if(req.body.pass === "password"){
     var token = jwt.sign({auth: true}, 'super secret', {expiresIn: 7200});
     console.log(token);
     res.status(200).json({
       message: 'Success',
       obj: token
     });
   }
});



module.exports = router;
