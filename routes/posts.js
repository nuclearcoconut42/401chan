var express = require("express");
var router = express.Router();
var Post = require("../models/post")
var moment = require('moment-timezone');
var jwt = require('jsonwebtoken');
var requestIp = require('request-ip');

module.exports = router;

router.get('/:postId', function(req, res, next) {
    Post.findOne({
        _id: req.params.postId
    }, function(err, post) {
        if(err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(post) {
            res.status(200).json({
                message: 'Success',
                obj: {_id: post._id, content: post.content, parent: post.parent, children: post.children, timestamp: post.timestamp}
            });
        }
    });
});

function bump(post) {
    Post.findOne({
        _id: post.parent
    }, function(err, parent) {
        if(err) {
            return "Error";
        }
        if(parent) {
            if(parent.children.indexOf(post._id) !== -1) {
                parent.children.splice(parent.children.indexOf(post._id), 1);
            }
            parent.children.unshift(post._id);
            parent.save();
            bump(parent);
        }
    });
}

router.post('/', function(req, res, next){
    var content = req.body.content;
    var parent = req.body.parent || 0;
    var post = new Post({
        content: content,
        parent: parent,
        children: [],
        timestamp: moment().tz('America/New_York').format('YYYY/M/D k:mm:ss'),
        ip: requestIp.getClientIp(req)
    });
    post.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            post: 'Saved message',
            obj: result
        });
    }).then(function(){
        bump(post);
    });
});

router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'super secret', function(err, decoded){
        if(err){
            return res.status(404).json({
                title: 'Authentication failed',
                error: err
            });
        }
        next();
    });
});

function deletePost(postId){
    Post.findOne({_id: postId}, function(err, post){
        if(err){
            return {
                title: 'An error occurred', error: err
            };
        }
        if(post){
            console.log(post.children);
            for(var child in post.children){
                deletePost(post.children[child]);
            }
            post.remove(function(err, result){
                if(err){
                    return {
                        title: 'An error occurred', error: err
                    };
                }
            });
        }
        return {
            post: 'Saved message',
            obj: post
        };
    });
}

router.delete('/:postId', function(req, res, next){
    console.log(req.params.postId);
    Post.findOne({_id: req.params.postId}, function(err, post){
        if(err){
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(post){
            Post.findOne({_id: post.parent}, function(err, parent){
                if(err){
                    return res.status(404).json({
                        title: 'Error',
                        error: err
                    });
                }
                if(parent.children.indexOf(post._id) !== -1) {
                    parent.children.splice(parent.children.indexOf(post._id), 1);
                    parent.save();
                }
            });
        }
    });
    res.json(deletePost(req.params.postId));
});
