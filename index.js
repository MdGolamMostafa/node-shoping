const express = require('express');
const products = require('./routes/products');
const items = require('./routes/items');
const users = require('./routes/users');
const orders = require('./routes/orders');
const reviews = require('./routes/reviews');
const app = express();

app.use('/products',products);
app.use('/items',items);
app.use('/users',users);
app.use('/orders',orders);
app.use('/reviews',reviews);



app.listen(2000);