const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res)=>{
    res.render('users/login')
})

router.get('/register', (req, res)=>{
    res.render('users/register')
})

module.exports = router;