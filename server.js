const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
require('./db_connection.js');
require('./config/passport');
var MongoStore = require('connect-mongo')(session);

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());
        server.use(cors());
        server.use(flash());
        server.use(session(
            { 
                secret: 'mySuperSecret', 
                resave: false, 
                saveUninitialized: false,
                store: new MongoStore({ mongooseConnection: mongoose.connection}),
                cookie: { maxAge: 180 * 60 * 1000 }
            }
        ));
        server.use(passport.initialize());
        server.use(passport.session());
        // server.use((req, res, next) => {
        //     // Also expose the MongoDB database handle so Next.js can access it.
        //     req.db = db
        //     next()
        //   });
        const productsRoute = require('./api/routes/products');
        const signupRoute = require('./api/routes/signup');
        const contactRoute = require('./api/routes/contact');
        server.use('/',productsRoute);
        server.use('/',signupRoute);
        //server.use('/profile', signupRoute);
        server.use('/',contactRoute);
        server.use("/static", express.static(__dirname + "/static", {
            maxAge: "365d"
            }));
        // server.get('/about-us', (req, res) => {
        //     console.log("About us called")
        //     app.render('/login', {csrfToken: req.csrfToken()});
        // }
        //     );
        server.get('*', (req, res) => {
            //console.log("Page Called");
            return handle(req, res)
        });
        
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000', session);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });