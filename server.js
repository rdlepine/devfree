const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const users = require('./routes/api/users')
const profile= require('./routes/api/profile')
const posts = require('./routes/api/posts')
const videos = require('./routes/api/videos')
const cors = require('cors')


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {

    const app = express()
    app.use(cors())
    //Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json({limit: '200mb'}))

    //DB Config
    const db = require('./config/keys').mongoURI

    //Connect to Mongodb
    mongoose
        .connect(db, {useNewUrlParser: true})
        .then( () => {
            console.log("Mongo Connected")
        })
        .catch( err => console.log(err))

    // Passport middleware
    app.use(passport.initialize())

    // Passport Config
    require('./config/passport')(passport)

    //Use routes
    app.use('/api/users', users)
    app.use('/api/profile', profile)
    app.use('/api/posts', posts)
    app.use('/api/videos', videos)

    const port = process.env.PORT || 5000


    app.listen(port, () => {
        console.log(`Listening on ${port}`)
    }) 
}