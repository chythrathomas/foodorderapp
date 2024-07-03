import { Fragment } from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import Category from "../screens/Category";
import Restaurants from "../screens/Restaurants";
import './Home.css';


// import { initialDataListState } from "../store/foodListSlice";


const Home = () => {
 
  const restaurantName = useSelector(state=>state.restaurant.restaurantSelected);

  return (
  <Row>
 <Row  className="captionSection">
      
<Col className="d-flex justify-content-center align-items-center">
<h2>Order your favorite food here!</h2>
</Col>
<Col className="d-flex justify-content-center align-items-center">
<img className="captionImage" src="../assets/home.jpg"/>
</Col>
     
    </Row>
  
         <Row>
 <Col sm={3}>
       <Category/>
       </Col>
       <Col sm={9}>
         <Restaurants/>
       </Col>
       </Row>
        </Row>
     
  );
};
export default Home;








// import { Fragment } from "react";
// import { Card, Container, Row, Col} from "react-bootstrap";
// import { useSelector } from "react-redux";
// import Category from "../screens/Category";
// import Restaurants from "../screens/Restaurants";
// import './Home.css';


// // import { initialDataListState } from "../store/foodListSlice";


// const Home = () => {
 
//   const restaurantName = useSelector(state=>state.restaurant.restaurantSelected);

//   return (
//   <Row>
//  <Row  className="captionSection">
      
// <Col className="d-flex justify-content-center align-items-center">
// <h2>Order your favorite food here!</h2>
// </Col>
// <Col className="d-flex justify-content-center align-items-center">
// <img className="captionImage" src="../assets/home.jpg"/>
// </Col>
     
//     </Row>
//     <Row>
// <Col sm={3}>
//       <Category/>
//       </Col>
//       <Col sm={9}>
//         <Restaurants/>
//       </Col>
//       </Row>

//       </Row>
  
//   );
// };
// export default Home;

