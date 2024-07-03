import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dataListState from "../../dataStore/dataList";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardImg,
  CardText,
  Container,
} from "react-bootstrap";
import "./RestaurantMenu.css";
import { cartActions } from "../../store/cartSlice";

function RestaurantMenu() {

  const dispatch = useDispatch();
  const restaurantName = useSelector(
    (state) => state.restaurant.restaurantSelected
  );
  const cart = useSelector((state)=>state.cart.cart);
  const cartItemQuantities = cart.reduce((quantities,item)=>{
    quantities[item.id] = item.quantity;
    return quantities;
  }, {});
  const fetchRestaurantMenu =dataListState.filter((item)=>item.restaurant === restaurantName);

const cartHandler =(item,increment)=>{
  if(increment) {
    dispatch(cartActions.addToCart({item}));
  }else{
    dispatch(cartActions.removeFromCart({item}));
  }
};

//   const [itemQuantities, setItemQuantities] = useState({});

//   const fetchRestaurantMenu = dataListState.filter(
//     (item) => item.restaurant === restaurantName
//   );

//   const cartHandler = (item, increment) => {
//     setItemQuantities((prevQuantities)=>{
//       const currentQuantity = prevQuantities[item.id] || 0;
//       const newQuantity = increment? currentQuantity + 1 : Math.max(0, currentQuantity-1);
//       return {...prevQuantities, [item.id]: newQuantity};
//     });
//     if(increment) {
//       dispatch(cartActions.incrementCart());
//       dispatch(cartActions.addToCart({item}));
//     }else {
//       dispatch(cartActions.decrementCart());
//       dispatch(cartActions.removeFromCart({item}))
//     }
   
// console.log(itemQuantities);
//   };

  return (
    <Container>
      <h2>{restaurantName}</h2>
      <div className="menu">
        {fetchRestaurantMenu.map((item, index) => (
          <div className="menuList" key={`menu${index}`}>
            <Row>
            <Col>
              <p style={{fontWeight:"bold"}}>{item.item}</p>
              <p>Rs{item.price}/-</p>
              <p style={{color:"gray",fontSize:"15px"}}>{item.description}</p>
            </Col>

            <Col className="d-flex justify-content-center align-items-center"  style={{ marginTop: 'auto' }}>
                  <div className="cartButton">
                    {(cartItemQuantities[item.id]>0) ? (
                      <div className="buttonControl">
 <button type="button" onClick={() => cartHandler(item,false)}> - </button>
                     <span>{cartItemQuantities[item.id]}</span>
                 <button type="button" onClick={()=>cartHandler(item,true)}> + </button>
                 </div>
                 )  : (<div className="cartButton">
                 <button type="button" onClick={() => cartHandler(item,true)}>
                   Add
                 </button>
               </div>)}
                </div>
                </Col>
                </Row>
                </div>
        ))}
      </div>
      </Container>
  );
}

export default RestaurantMenu;

// <Col className="menuList" key={`menu${index}`}>
// <Card
//   className="card"
//   style={{
//     width: "15rem",
//     height: "20rem",
//     marginBottom: "10px",
//     border: "none",
//   }}
// >
//   <CardImg src={item.image} />
//   <CardBody>
//     <CardText>{item.item}</CardText>
//     <CardText>Amount  {item.price} Rs</CardText>
// <div className="cartButton">
// <button type="button" onClick={() => addCartHandler(item)}>Add</button>
// </div>

//   </CardBody>
// </Card>
// </Col>
