
import { Row, Col, Container } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{

    return(
        <Container className='footer'>
        <Row className="footerRow">
           
                <Col><Link to="/about" className="link">About Us</Link></Col>
<Col><Link to="/home/helpcenter" className="link"><Row  className="footerData">Help Center</Row></Link></Col>
<Col><Link to="/home/contactus" className="link">Contact Us</Link></Col>
  <Col >
<div className='d-flex justify-content-between'>
 <img src="../assets/fb_logo.jpg" style={{width:"20px", height:"20px"}}></img>
  <img src="../assets/insta_logo.jpg" style={{width:"20px", height:"20px"}}></img>
 <img src="../assets/whatsapp_logo.jpg" style={{width:"20px", height:"20px"}}></img>
</div>
   </Col>         
            </Row> 
      
        <p style={{paddingBottom:"20px",margin:"auto", textAlign:"center",fontSize:"10px" }}>EatFresh Company all rights reserved</p>

    
        </Container>
    )
}
export default Footer;