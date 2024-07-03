import React, { useState } from 'react'
import { Row, Col, Card, CardImg, CardBody, CardTitle, Container, CardText } from 'react-bootstrap'
import './Restaurants.css';
import restaurantList from '../../dataStore/restaurantList';
import { useDispatch } from 'react-redux';
import { restaurantActions } from '../../store/restaurantSlice';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStapler, faStar } from '@fortawesome/free-solid-svg-icons';

function Restaurants() {

    const dispatch= useDispatch();
const selectHandler=(data)=>{
console.log(data);
dispatch(restaurantActions.selectRestaurant(data));
 

    }
  return (
    <Container className="list">
        <Row>
        <h4 style={{margin:"30px 0px",textAlign:"center"}}>Top Restaurants</h4>
        </Row>
        <Row>
            {restaurantList.map((data,key)=>{
                return(
                    <Col className="resList" key={`res${key}`}> 
<Link to= "/restaurantmenu" className='link'>
                        <Card className="card" onClick={()=>selectHandler(data.restaurant)} style={{width:"15rem", height:"20rem",marginBottom:"10px",border:"none"}}>
                            <CardImg style={{height:"400px"}}src={data.image}/>
                            <CardBody>
                                <CardTitle>{data.restaurant}</CardTitle>
                                <CardText style={{fontSize:"12px"}}>{data.description}</CardText>
                                <CardText>{data.place}</CardText>
                                <CardText><FontAwesomeIcon icon={faStar}/> {data.rating} ratings</CardText>
                            </CardBody>
                        </Card>
                        </Link>
                    </Col>
                )
            })}

        </Row>    
    </Container>
  )
}

export default Restaurants;

