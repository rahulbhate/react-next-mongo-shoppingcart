// require('dotenv').config;
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
//https://myaccount.google.com/lesssecureapps 
//Allow less secure apps: OFF / ON
// Important Note: No need to define get router in 
//order to just fetch front end user interface..

// router.get('/contact', function (req, res, next){
//     // get all form fields and then send email to the user with all form fields.
//     res.render('/contact');
//   });

  router.post('/contact', function (req, res, next){
      console.log("POST called");
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    let mailOptions = {
        from: req.body.email,
        to: req.body.email,
        subject: req.body.name,
        text: req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error,data){
        if(error){
            console.log('Error in sending Email');
        }else{
            console.log('Email Sent');
        }
    });

    res.json({
        message: "Email Sent"
        });
  });

module.exports = router;