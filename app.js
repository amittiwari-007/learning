const express = require('express');

const app = express();

const morgan = require('morgan');
const tourRouter = require(`${__dirname}/routes/tourRoute.js`);
const userRouter = require(`${__dirname}/routes/userRoute.js`);
const loginRouter = require(`${__dirname}/routes/loginRoute.js`)


app.use(morgan('dev'));
app.use(express.json());
app.use((req,res,next)=>{
    console.log("ye hai middle ware ");
    console.log("just  to type the typing speed here");
    next();
})

app.use('/',tourRouter);
app.use('/users',userRouter);
app.use('/login',loginRouter);


module.exports = app;
