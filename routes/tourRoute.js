const express = require('express');
const tourRouter = express.Router();
const fs = require('fs');
const tour = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`));
const getAllTours=(req,res)=>{
    console.log("localhost");
    res.status(200).json({
        status:'success',
        result:tour.length,
        tour
    })
}
tourRouter.route('/').get(getAllTours);

module.exports = tourRouter;