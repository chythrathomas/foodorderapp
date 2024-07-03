 import { Container, Navbar } from "react-bootstrap";
 import {  Nav, NavDropdown } from "react-bootstrap";
 import './Header.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

 import './Header.css';
 import { Col, Row } from 'react-bootstrap';

// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { modalActions } from "../../store/ModalSlice";
import { Link } from "react-router-dom";



 const Header=()=>{
 
   const dispatch=useDispatch();
   const cartNumber = useSelector(state=>state.cart.cartNumber);
  //  const [toggleUser, setToggleUser]= useState(false);

//    const loginMenuMenuHandler=()=>{
//       setToggleUser((prevState)=>!prevState);
//   // dispatch(modalActions.modalStatus());
// //   dispatch(modalActions.modalData('login'))
//  }



    return(
     
      //  <Navbar expand='lg' className="nav">
/* 
          <Col lg={6} md={6} sm={8}> */
          /* <div className="header"> */
          /* <span className="logo"><img src="../assets/logo.jpg" alt="EAT FRESH logo"></img></span> */
          /* <span className='title'>
       EAT FRESH
       </span>
       </div> */
       /* </Col> */
       /* <Col></Col>
       <Col> */
       <Navbar
       style={{
           
         backgroundColor:"white",
         opacity: "1",
       }}
       className="shadow-lg py-2 py-lg-4" 
       collapseOnSelect
       expand="lg"
       sticky="top"
     >
       <Container>
         <Navbar.Brand to="/">
           {" "}
           <h1>EAT FRESH</h1>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-auto fs-5 ">
               <Nav.Link  className= 'navIcon'as={Link} to="/home/search">
                <div>
                <FontAwesomeIcon icon={faSearch} />
                Search
                </div>                
               </Nav.Link>
               <Nav.Link className= 'navIcon' as={Link} to="/home/user">
               <FontAwesomeIcon icon={faUser} />
               </Nav.Link>
               <Nav.Link className= 'navIcon' as={Link} to="/cart">
               <div>
               <FontAwesomeIcon icon={faCartShopping} />
      ({cartNumber})</div>
               </Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Navbar.Collapse>
       </Container>
     </Navbar>
  /* <div >
       <Row>
       <Col className="headerMenu"><div><FontAwesomeIcon  style={{ paddingRight: '5px' }} icon={faSearch} />Search</div></Col>
       <Col className="headerMenu">
        <Link to="/home/user" style={{color:"inherit"}}>
         <FontAwesomeIcon icon={faUser} />
         </Link></Col>
    
       <Col className="headerMenu">
        <Link to ="/cart" className="link">
        <div>
    <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faCartShopping} />
       <div>({cartNumber})</div>
       </div>
       </Link>
     </Col>
     </Row>
       </div>
    </Col> */
    // </Container>
    //    </Navbar>
 
    )
 }

 export default Header;












// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

// import './Header.css';
// import { Col, Row } from 'react-bootstrap';
// import { useState } from 'react';

// const Header=()=>{
//    const [userMenu, setUserMenu]= useState(false);
// const toggleUserMenuHandler=()=>{
//    setUserMenu(prevState => !prevState);
// }

//    return(
//     <div className="header">
//       <div>
//          <span className="logo"><img src="../assets/logo.jpg" alt="EAT FRESH logo"></img></span>
//          <span className='title'>
//       EAT FRESH
//       </span>
//       </div>
//    <div >
//       <Row>
//       <Col className="headerMenu"><div><FontAwesomeIcon  style={{ paddingRight: '5px' }} icon={faSearch} />Search</div></Col>
//       <Col className="headerMenu"><FontAwesomeIcon icon={faUser} onClick={toggleUserMenuHandler} /></Col>
    
//       <Col className="headerMenu">
//        <div>
//    <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faCartShopping} />
//       <div>(0)</div>
//       </div>
//     </Col>
//     </Row>
//     <Row><Col></Col>
//     {userMenu && (<Col  xs={6} className="userMenu">
//                  <Row><p>Log In</p></Row>
//          <Row><p>Sign Up</p></Row>
        
//       </Col>)}
//       <Col></Col></Row>
//    </div>
//     </div>
//    )
// }

// export default Header;
