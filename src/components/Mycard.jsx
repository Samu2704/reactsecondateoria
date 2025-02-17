import { Card, Col  } from "react-bootstrap";
import "./Mycard.css"

function Mycard({tuttidettagli}) {
  
    return (
      
      <Col xs={12} sm={6} md={3}>
      <Card className="book h-100 mb-4">
        <Card.Img variant="top" style={{height:""}} src={tuttidettagli.img} />
        <Card.Body>
          <Card.Title className="title">{tuttidettagli.title} </Card.Title>
          <Card.Text className="price mt-2">price: {tuttidettagli.price} </Card.Text>
         
        </Card.Body>
      </Card>
      </Col>
      
    );
  }
  
  export default Mycard;