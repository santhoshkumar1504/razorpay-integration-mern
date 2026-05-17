const express=require('express');
const { processPayment, getKey, paymentVerification } = require('../controllers/paymentController');
const router=express.Router();

router.post('/processPayment',processPayment);

router.get('/getKey',getKey);

router.post('/paymentVerification',paymentVerification)

module.exports=router