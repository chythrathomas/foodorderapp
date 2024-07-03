import React from 'react';
import './Cart.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cartSlice';
// import { modalActions } from '../../store/ModalSlice';

function Cart() {
const dispatch= useDispatch();
    const navigate=useNavigate();
    const cartNumber= useSelector(state=>state.cart.cartNumber);
    const cartItems= useSelector(state=>state.cart.cart);
    const totalAmount= useSelector(state=>state.cart.totalAmount);
    console.log(cartItems);

    const closeHandler=()=>{
    navigate("/");
    }

    const decrementHandler = (item)=>{
      dispatch(cartActions.removeFromCart({item}));
    }
    const incrementHandler = (item)=>{
      dispatch(cartActions.addToCart({item}))
    }
const submitHandler=()=>{

}
  return (
    <div className='modalBackground'>
    <div className='cartContainer'> 
    <div className='cartRows'>
       
<div className='colHead'><h2>Cart Items</h2></div>
<div style={{textAlign:"right"}} ><FontAwesomeIcon icon={faXmark} onClick={closeHandler}/> </div>
    </div>
    {cartNumber>0 ?(
   <div>
   {cartItems.map((item,index)=>(
      <div key={`cart${index}`} className='cartItem'>
             <Row>
             <p >{item.item}</p>
          <p style={{color:"gray",fontSize:"15px"}}>{item.restaurant}</p>
             </Row>
          <Row style={{alignItems:"center"}}>
            <div className='buttonControl'>
              <button onClick={()=>{decrementHandler(item)}}>-</button>
              <span>{item.quantity}</span> 
              <button onClick={()=>{incrementHandler(item)}}>+</button>
          <p style={{textAlign:"right", marginLeft:"30px"}}> {item.quantity} x {item.price}</p> 
          </div>
          </Row>  
      </div>
))}
 <div className="cartBox"><p>Total Amount</p>
 <p>Rs {totalAmount}/-</p>
 </div>
 <div className='button'><button type="submit" className='proceedButton' onClick={submitHandler}>PROCEED PAYMENT</button></div>
 </div>
    ): <div style={{textAlign:"center"}}>Your cart is empty</div>}
 
    </div>
    </div>
  )
}

export default Cart;
