import { Card, Col  } from "react-bootstrap";
import "./SingleBook.css"
import { useState } from "react";


function SingleBook({tuttidettagli}) {
    const [border, setBorder] = useState(false)
  const handleClick = () =>{
    setBorder(!border)
  };
    return (
      
      <Col xs={12} sm={6} md={3}>
      <Card className={border ? "mb-3 bordeRed" :" mb-3"}
      onClick={handleClick} >
      
        <Card.Img variant="top" style={{height:""}} src={tuttidettagli.img} />
        <Card.Body>
          <Card.Title className="title">{tuttidettagli.title} </Card.Title>
          <Card.Text className="price mt-2">price: {tuttidettagli.price} </Card.Text>
         
        </Card.Body>
      </Card>
      </Col>
      
    );
  }
  
  export default SingleBook;