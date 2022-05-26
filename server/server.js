const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use('/', router)

const connectionString='mongodb://localhost/react-shopping-cart';

mongoose.connect(connectionString, {useNewUrlParser: true , useUnifiedTopology: true})
.then(res => console.log("connection Done"))



app.get("/api/products", async(req, res) =>{
    const products = await product.find()
    res.send(products)
})

app.post("/api/products", async (req, res) => {
    const newProduct = new product(req.body) ;
    const saveP = await newProduct.save();
    res.send(saveP)
})

app.delete("/api/products/:id", async (req, res) =>{
    const deleteProduct = await product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct)
} )

app.listen(5001, ()=>{
    console.log("Running in port 5001")
})