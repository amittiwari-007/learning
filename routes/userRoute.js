const express  = require('express');
const userRouter = express.Router();
const fs = require('fs');
const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`))
const getAllUsers=(req,res)=>{
    res.status(200).json({
        status:'success',
        result:users.length,
        users
    })
};
userRouter.route('/').get(getAllUsers);

module.exports = userRouter;