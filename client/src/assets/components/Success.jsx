import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/success.css'

const Success = () => {
    const query=new URLSearchParams(useLocation().search)
    const payment_ref=query.get("reference");
  return (
    <div className='msg-container'>
      <div className="card">
        <img src="success.png" alt="success" />
        <br />
        <h1>Payment Successfull</h1>
        <p>Your transaction has been completed successfully. Thank you for your payment.</p>
        <p>Payment Ref: <strong>{payment_ref}</strong></p>
      </div>
    </div>
  )
}

export default Success
