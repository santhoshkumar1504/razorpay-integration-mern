import React from 'react'
import axios from 'axios'
import '../styles/product.css'
const Products = ({data}) => {
  const checkoutHandler=async (amount)=>{
    const {data:orderData}=await axios.post("api/v1/processPayment",{
        amount:amount
    })
    const {data:keyData}=await axios.get("api/v1/getKey");

    const options = {
        key: keyData.key, 
        amount, 
        currency: 'INR',
        name: 'ShopNexa',
        description: 'The Next Level Shopping',
        order_id: orderData.order.id, 
        callback_url: 'api/v1/paymentVerification', 
        prefill: {
          name: 'Santhoshkumar',
          email: 'santhoshkumar@shopnexa.com',
          contact: '9865743210'
        },
        theme: {
          color: '#6e36f1'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
  }

  return (
    <>
    <div className='product-container'>
        {data.map((item)=>(
        <div className="card-container" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>⭐{item.rating}/5 Ratings</h4>
            <p>Price: <strong>{item.price}</strong></p>
            <button onClick={()=>{checkoutHandler(item.price)}}>Buy Now</button>
        </div>
        ))}
    </div>
    </>
  )
}

export default Products
