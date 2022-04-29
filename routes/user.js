const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
    res.send('users route');
});

router.get('/new', (req, res) => {
    res.send('new users route');
});

router.route('/:id').get((req, res) => {
    res.send(`get user with id ${req.params.id}`)
})
    .put((req, res) => {
        res.send(`put user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete user with id ${req.params.id}`)
    });


router.post('/', (req, res) => {
    res.send("user post")
})

// router.get('/:id', (req, res) => {
//     res.send(`get user with id ${req.params.id}`)
// })



// const users = [{ name: 'aa', name: 'bb' }]

// router.params("id", (req, res, next, id) => {
//     console.log("params", id);
//     next();
// })

function logger(req, res, next) {
    console.log("======", req.originalUrl)
    next()
}
module.exports = router;