const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');
const PORT      = process.env.PORT || 3000;
const exphbs    = require('express-handlebars');
const keys      = require('./config/keys');
const passport  = require('passport');

//Connect to the database
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
        .then(()=>{console.log('Connected to the database')})
        .catch((err)=> console.log(err))

//Require passport
require('./config/passport')(passport);

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import the routes
const index = require('./routes/index')
const users = require('./routes/users')

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Using the routes
app.use('/', index)
app.use('/users', users)

app.listen(PORT, ()=>{
    console.log(`App started at port ${PORT}`)
})