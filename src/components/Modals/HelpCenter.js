import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import './HelpCenter.css';
import { useNavigate } from 'react-router-dom';

function HelpCenter() {
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const closeHandler=()=>{
        navigate('/');
    }

  return (
    <div className='modalBackground'>
    <div className='modalContainer'> 
            <div className='helpCenter'>
      <Row >
<Col><h2>Help Center</h2></Col>
<Col style={{textAlign:"right"}} xs lg='2'><FontAwesomeIcon icon={faXmark} onClick={closeHandler}/> </Col>
    </Row>
   <div>
        <p>Our customer experience team is
available all days from
9am to 12.00am to assist you with any
questions or issues you might have.</p>
</div>

<Row><p style={{textAlign:"center"}}>Contact Us for any queries or help</p></Row>
    <Row><p style={{textAlign:"center", color:"rgb(19, 207, 19)"}} >order@eatfresh.com</p></Row>
    <Row><p style={{textAlign:"center", color:"rgb(19, 207, 19)"}} >090 4567 9876</p></Row>
    </div>
    </div>
    </div>
  )
}

export default HelpCenter
