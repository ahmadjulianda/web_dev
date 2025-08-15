const express=require('express')
const app=express()
const productRoutes = require('.\routes\product.js');

app.use(express.json()); // Midleware parsing JSON
app.use('/products', productRoutes); // Prefiks endpoint

const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World....')
})

app.listen(port,()=>{
    console.log(`server berjalan di http://localhost:${port}`);
})