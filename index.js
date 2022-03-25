const express = require('express');
const port = 8000;
const app = express();


require('./configs/mongodb.config');

//Route constants
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send("This is our API-101 session.");
})

app.listen(port, () => {
    console.log(`Server running at port ` + port);
});