// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import categoryList from "../../dataStore/categoryList";
// import './Category.css';


// function Category() {
//   return (
//     <Container >
   
//     <Row>
//       <h6>What's in your mind</h6>
//       </Row>
//       <div className='categoryData'>
//       <Row  className='categoryRow'>
//        {categoryList.map((item, key) => {
//         return (
//             <Card className='cardData' key={`cat${key}`}>
             
//             {/* <img className='cardImg'src={item.image} alt={item.name}/>
            
//               <h4>{item.name}</h4> */}
            
//           </Card>
//         );
//       })} 
//       </Row> 
//       </div>
//     </Container>
//   );
// }

// export default Category;



import React from 'react';
import './Category.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import categoryList from '../../dataStore/categoryList';
import { useDispatch } from 'react-redux';
import { restaurantActions } from '../../store/restaurantSlice';
import { Link } from 'react-router-dom';


function Category() {

  const dispatch= useDispatch();

  const selectHandler=(category)=>{
    console.log(category);
dispatch(restaurantActions.selectCategory(category));
  }

  return (
    <Container className='categoryList'>
      <Row>
      <h4 style={{textAlign:"center"}}>Categories</h4>
      </Row>

      
      {categoryList.map((item,key)=>{
   return(
     <div key={`cat${key}`}>
     <Link to="/home/categoryMenu" className='link'>
 <div className='category' key={`cat${key}`}
 onClick={()=>selectHandler(item.name)}>
 {item.name}
 </div>
 </Link>
 </div>
   )
    })} 


      
    </Container>
  )
}

export default Category










// {categoryList.map((item,key)=>{
//   return(
//     <div key={`cat${key}`}>
//     <Link to="/home/categoryMenu" className='link'>
// <div className='category' key={`cat${key}`}
// onClick={()=>selectHandler(item.name)}>
// {item.name}
// </div>
// </Link>
// </div>
//   )
//    })} 