/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Product = require('../database/Product.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/test', (req, res) => {
  res.send('hello');
});

app.get('/api/products/:itemid/alsoliked', (req, res) => {
  const itemNum = parseInt(req.params.itemid, 10);
  let numOfProducts = 10;
  if (99 - itemNum < 10) {
    numOfProducts = 99 - itemNum;
  }
  Product.find({
    itemNum: {
      $gte: itemNum,
      $lte: itemNum + numOfProducts,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/api/products/:itemid/ultbought', (req, res) => {
  let itemNum = parseInt(req.params.itemid, 10);
  itemNum = itemNum <= 49 ? itemNum + 50 : itemNum - 50;
  let numOfProducts = 10;
  if (99 - itemNum < 10) {
    numOfProducts = 99 - itemNum;
  }
  console.log(itemNum, numOfProducts);
  Product.find({
    itemNum: {
      $gte: itemNum,
      $lte: itemNum + numOfProducts,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
