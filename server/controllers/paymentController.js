const instance = require("../config/instance")
const crypto=require('crypto');

const processPayment=async(req,res)=>{
    const {amount}=req.body;
    const options={
        "amount":Number(amount)*100,
        "currency":"INR"
    };
    const order=await instance.orders.create(options);
    res.status(200).json({success:true,order});
}

const getKey=async(req,res)=>{
    const key=process.env.RAZORPAY_API_KEY;
    res.status(200).json({success:true,key});
}

const paymentVerification=async(req,res)=>{
   const{razorpay_payment_id,razorpay_order_id,razorpay_signature}= req.body;
   const body=razorpay_order_id+"|"+razorpay_payment_id
   const expectedSignature=await crypto.createHmac("sha256",process.env.RAZORPAY_API_SECRET).update(body.toString()).digest("hex");
   const isAuthentic=expectedSignature===razorpay_signature
   if(isAuthentic)
   {
        return res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`);
   }
   else{
        res.status(404).json({success:false,message:"Payment Failed"})
   }
}

module.exports={processPayment,getKey,paymentVerification}