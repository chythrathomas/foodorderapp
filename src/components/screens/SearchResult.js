import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dataListState from '../../dataStore/dataList';
import { Row, Col } from 'react-bootstrap';
import './SearchResult.css';
import { cartActions } from "../../store/cartSlice";

function SearchResult() {

  const searchTerm = useSelector(state=>state.restaurant.dishSelected);
  const dispatch = useDispatch();
  const cart= useSelector(state=>state.cart.cart);

  console.log(searchTerm);
  let fetchSearchedData=[];
  if(searchTerm){
    fetchSearchedData =dataListState.filter((item)=>
    item.item.toLowerCase().includes(searchTerm.toLowerCase()));
 
  }
 const addCartHandler=(item)=>{
  console.log(item);
  dispatch(cartActions.addToCart({item}));
 } 
 const removeCartHandler=(item)=>{
  const existingItem =cart.find(cartItem => cartItem.id === item.id);
  if(existingItem){
    dispatch(cartActions.removeFromCart({item}));
  }
 }

  return (

    <div>
<div className="menu">
        {fetchSearchedData && (fetchSearchedData.map((item, index) => (
          <div className="menuList" key={`rslt${index}`}>
            <Row>
            <Col>
              <p style={{fontWeight:"bold"}}>{item.item}</p>
              <p>Rs{item.price}/-</p>
              <p>{item.restaurant}</p>
              <p style={{color:"gray",fontSize:"15px"}}>{item.description}</p>
            </Col>

            <Col className="d-flex justify-content-center align-items-center"  style={{ marginTop: 'auto' }}>
              <div className="cartButton">
                {cart.some(cartItem=>cartItem.id === item.id)?(
                  <div className='buttonControl'>
<button type="button" onClick={()=>removeCartHandler(item)}>-</button>
<span>{cart.find(cartItem=>cartItem.id === item.id).quantity}</span>
<button type="button" onClick={()=>addCartHandler(item)}>+</button>
                  </div>
                ) : (
                  <button type="button" onClick={()=>addCartHandler(item)}>Add</button>
                )}
              
              </div>
            </Col>
            </Row>
          </div>
        )))}
      </div>
</div>
  )
}

export default SearchResult;
