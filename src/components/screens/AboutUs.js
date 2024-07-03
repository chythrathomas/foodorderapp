import React from 'react';
import { Fragment } from 'react';
import { Row,Col,Container } from 'react-bootstrap';

function AboutUs() {
  return (
         <Fragment>
             <Row>
    <Col lg={10} className="mx-auto">
            <Container  >
     
    </Container>
      <div className="container" >
        <Row>
          <Col md={6} className="order-2 order-lg-1">
       <Container className="my-5 ">
       <img className="ms-5"
         style={{width:"80%"}}
          src="../images/home1.jpg"
          alt="image" 
        />
       </Container>
       </Col>
       <Col md={6} className="order-1 order-lg-2">
       <Container >
       <h2 className="text-center text-capitalize mt-3 my-3" style={{color:"rgb(19, 207, 19)"}}>About us</h2>
       
              
          <p style={{textAlign:"center",fontStyle:"italic"}}>
            Lorem ipsum dolor sit amet. Qui suscipit voluptatum hic sunt maxime
            et nemo necessitatibus ut magnam iste aut tempore voluptas sed
            quidem rerum ut enim itaque? Sed assumenda molestias ex nostrum
            laboriosam et molestiae perspiciatis qui aspernatur similique qui
            quas molestiae. Quo aspernatur saepe qui voluptatem quidem et
            repellendus ipsam in galisum praesentium aut consequatur officia ut
            nostrum deserunt et beatae corporis! Ut sint delectus aut asperiores
            sapiente et consequatur aliquam et dolorem soluta non tenetur
            inventore ea consectetur magni sed ratione quia. Est earum excepturi
            id facere doloremque eos soluta aspernatur et culpa molestiae ut
            Quis corrupti sit molestiae veritatis qui distinctio enim. Eum
            quaerat consectetur vel omnis recusandae in similique ullam.
          </p>
          </Container>
          </Col>
          </Row>
          </div>
          </Col>
    
      </Row>
    
          </Fragment>
    
  )
}

export default AboutUs
