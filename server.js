const express = require('express');
const userRouter = require('./routes/user');

const app = express();
app.set('view engine', "ejs");
// app.use(logger);   ///for all api endpoints - top level

//to show static content 
// if we comment out below / thnen it will show the file /public/index
app.use(express.static('public'));

// app.get('/', logger, logger, logger, (req, res) => {   // all commented middleware run 1 by 1 in order
//     // res.send('HI');
//     // res.status(500).status('HIIII');
//     // res.status(500).json({ message: 'HI json' });
//     // res.json({ message: 'HI json' });
//     // res.download('server.js')
//     res.render("index", { msg1: 'HI learning' });
// });

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log("======", req.originalUrl)
    next()
}

app.listen(3001);