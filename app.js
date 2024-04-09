// npm import 
const express = require('express');
const morgan = require('morgan');

// project import
const tourRouter = require(`./routes/tourRoute.js`);
const userRouter = require(`./routes/userRoute.js`);
const AppError = require('./utils/appError.js');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use((req,res,next)=>{
    console.log("Hi from middleware");
    next();
})

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

app.all('*',(req,res,next)=>{
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

app.use(globalErrorHandler)

module.exports = app;
