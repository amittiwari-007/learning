const express = require('express');
const routes = express.Router();


const postLogin=(req,res)=>{
    console.log(req.body);
    console.log("HI");
    res.status(201).json({
        message:'done'
    })
};
routes.route('/').get(postLogin);

module.exports = routes;