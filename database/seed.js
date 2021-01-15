/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const faker = require('faker');
const mongoose = require('mongoose');
const Product = require('./Product.js');

const randomProducts = [];

for (let i = 0; i < 100; i++) {
  const reviewers = Math.floor(Math.random() * 10000);
  const score = Math.random() * 5;
  let color = new Set();
  for (let j = 0; j <= Math.floor(1 + Math.random() * 5); j++) {
    color.add(faker.commerce.color());
  }
  color = Array.from(color);
  const product = {
    itemNum: i,
    name: faker.commerce.productName(),
    brand: faker.company.companyName(),
    price: faker.commerce.price(),
    colors: color,
    description: faker.commerce.productDescription(),
    img_url: 'https://source.unsplash.com/200x113/?products',
    category: faker.commerce.department(),
    rating: score,
    reviews: reviewers,
    features: [faker.fake('{{commerce.productAdjective}} {{commerce.productMaterial}}'), faker.fake('{{commerce.productAdjective}} {{commerce.productMaterial}}')],
  };
  randomProducts.push(product);
}

function insertRandomProducts() {
  Product.create(randomProducts)
    .then(() => {
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
    });
}

insertRandomProducts();
