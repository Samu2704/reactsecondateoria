import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from "../books/history.json"
import { useParams } from 'react-router-dom';

function BookDetails(){
    const {asin} = useParams()
    const myBook= books.find((b)=>b.asin==asin)
    console.log(myBook)
    return(
        <div className= "d-flex">
        <h1> Book Details </h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myBook.img}/>
      <Card.Body>
        <Card.Title>{myBook.title}</Card.Title>
        <Card.Text>{myBook.price}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    )
} export default BookDetails