const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();

const app=express();
const paymentRoute=require('./routes/paymentRoute');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/v1',paymentRoute);

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})