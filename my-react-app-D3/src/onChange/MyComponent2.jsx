//onChange = event handler used primarily with form elements, it triggers when the value of an element changes
import { useState } from 'react';

import React from 'react'

function MyComponent2() {

  const [name, setname] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState('');
  const [payment, setpayment] = useState('');
  const [gender, setGender] = useState('');

  function handleNameChange(event) {
    setname(event.target.value);
  }

  function handleQuantitychange(event){
    setQuantity(event.target.value);
  }

  function handleCommentchange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setpayment(event.target.value);
  }

  function handleGenderchange(event){
    setGender(event.target.value);
  }

  return (
    <>
      <input value={name} type="text" onChange={handleNameChange}/>
      <p>Name: {name}</p>
<hr />
      <input value={quantity} type='number' onChange={handleQuantitychange}>
      </input>
      <p>Quantity: {quantity}</p>
<hr />
      <textarea value={comment} onChange={handleCommentchange} placeholder='Enter any instruction'></textarea>
      <p>Comment: {comment}</p>
<hr />
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="paypal">Upi</option>
        <option value="bank">Bank Transfer</option>
        <option value="cash">Cash on Delivery</option>
      </select>
      <p>Payment: {payment}</p>
<hr />
      <label> 
        <input type="radio" value='male' checked={gender === 'male'} onChange={handleGenderchange} />
        Male
      </label>
      <br />
      <label> 
        <input type="radio" value='female' checked={gender === 'female'} onChange={handleGenderchange} />
        Female
      </label>
      <p>Gender : {gender}</p>
    </>
  )
}

export default MyComponent2