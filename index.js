const express = require('express');
const Product = require('./models/product.model');
const port = 8000;
const app = express();
const User = require('./models/user.model');

require('./configs/mongodb.config');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("This is our API-101 session.");
})

app.post('/user', async (req, res) => {
    
    try {
        const body = req.body;
        const user = new User(body);
        const savedUser = await user.save();

        res.status(200).json({
            message: "User added successfully",
            savedUser
        });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
    
})

app.post('/product', async (req, res) => {
    try {
        const body = req.body;
        const product = Product(body);
        const savedProduct = await product.save();
        res.status(200).json({
            message: "Product added successfully",
            savedProduct
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})


app.listen(port, () => {
    console.log(`Server running at port ` + port);
});