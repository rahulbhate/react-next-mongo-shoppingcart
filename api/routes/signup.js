const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../server/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var Order =  require('../../server/models/order');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', (req, res, next) => {
  console.log(req);
  let email = req.body.email;
  let password = req.body.password;
 
  User.find({ email: email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Mail Exists',
        });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: 'User Created',
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
            res.status(200).json({ email: email, password: password });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
router.post('/login', (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth Failed',
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth Failed',
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            'secret',
            { expiresIn: '1h' },
          );
          return res.status(200).json({
            message: 'Auth Successful',
            token: token,
            email: req.body.email
          });
          
        }
        res.status(401).json({
          message: 'Auth Failed',
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.post('/checkout', function (req, res, next){
  if(!req.session.cart){
    return res.render('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var stripe = require("stripe")(
    "sk_test_E4e0J5dFPh53uXECMVYASnSF007jxl702a"
);

stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: "aud",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Test Charge"
}, function(err, charge) {
    if (err) {
        req.flash('error', err.message);
        return res.redirect('/checkout');
    }
    var order = new Order({
        user: req.user,
        cart: cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: charge.id
    });
    order.save(function(err, result) {
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/');
    });
}); 
});
router.get('/logout', (req, res, next) => {
  console.log("Routeeeee Called");
  req.logOut();
  res.redirect('/login');
  // res.status(200).json({
  //   message: 'Logged out',
  // });
});
module.exports = router;
