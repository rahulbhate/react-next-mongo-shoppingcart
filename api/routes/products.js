const Product = require('../../server/models/product');
const express = require('express');
const router = express.Router();

router.get('/products', (req, res, next) => {
  console.log("Products route called");
  let start = parseInt(req.query.start);
  let limits = parseInt(req.query.limit);
  console.log(start, limits);
  Product.find()
    // .limit(limits)
    // .skip(start)
    .exec()
    .then((storeProducts) => {
      res.status(200).json(storeProducts)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});



module.exports = router;
