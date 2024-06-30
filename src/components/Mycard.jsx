import { Card, Col  } from "react-bootstrap";
import "./Mycard.css"

function Mycard({tuttidettagli}) {
    return (
      <div>
      <Col xs={12} sm={6} md={4} />
      <Card className="book m-3" style={{width: "16rem", height:""}}>
        <Card.Img variant="top" style={{height:"250px"}} src={tuttidettagli.img} />
        <Card.Body>
          <Card.Title className="title" style={{height:"115px"}}>{tuttidettagli.title} </Card.Title>
          <Card.Text className="price mt-4">price: {tuttidettagli.price} </Card.Text>
         
        </Card.Body>
      </Card>
      </div>
    );
  }
  
  export default Mycard;