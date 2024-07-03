

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import restaurantList from '../../dataStore/restaurantList';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardImg,
    CardText,
    Container,
  } from "react-bootstrap";
  import './CategoryMenu.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { restaurantActions } from '../../store/restaurantSlice';

function CategoryMenu() {

  const dispatch= useDispatch();
    const categoryName= useSelector(state=>state.restaurant.categorySelected);
console.log(categoryName);
let fetchSelectedCategory =[];
     fetchSelectedCategory =restaurantList.filter((item)=>
    item.type.includes(categoryName));
   console.log(fetchSelectedCategory);

   const selectHandler=(data)=>{
   console.log(data);
   dispatch(restaurantActions.selectRestaurant(data));
    
   
       }
  return (
   <Container>
    <div className="categoryTitle">
      <h2 className='title'>
        {categoryName} 
      </h2>
      <h6 className="subtitle text-center mt-4 mb-2">Satisfy your cravings with these fresh and flavoursome {categoryName}.....</h6>
      </div>
      {fetchSelectedCategory &&
      <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-4">
      {fetchSelectedCategory.map((item,index) => (
        <Link to= "/restaurantmenu" className='link'>
               <Col className="catMenuList" key={`menu${index}`}>
               <Card
                 className="card"
                 onClick={()=>selectHandler(item.restaurant)}
                 style={{
                   width: "15rem",
                   height: "20rem",
                   marginBottom: "10px",
                   border: "none",
                 }}
               >
                 <CardImg src={item.image} />
                 <CardBody>
                   <CardText style={{fontWeight:"bold"}}>{item.restaurant}</CardText>
                   <CardText>{item.place}</CardText>
                   <CardText>{item.description}</CardText>
                   <CardText><FontAwesomeIcon icon={faStar}/> {item.rating} ratings</CardText>
                 </CardBody>
               </Card>
             </Col>
             </Link>
))}
              
    </Row>
      }
      

   </Container>
  )
}

export default CategoryMenu;
