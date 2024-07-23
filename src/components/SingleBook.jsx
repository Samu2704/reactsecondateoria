import { Card, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./SingleBook.css"
import { useContext, useState } from "react";
import CommentArea from "./CommentArea";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Link } from 'react-router-dom';


function SingleBook({tuttidettagli, border, handleClick, asin}) {
    
    const {theme} = useContext(ThemeContext)
  
    return (
      
      <Col xs={12} md={4} lg={3}>
      <Card className=  {theme==="light" ? "h-100 cardBook m-2" : "bg-dark  text-white h-100 m-2 cardBook"} >
      
        <Card.Img className={border=== tuttidettagli.asin ? " bordeRed" :" "} variant="top" src={tuttidettagli.img} onClick={() =>handleClick(tuttidettagli.asin)} />
        <Card.Body>
          <Card.Title className="title">{tuttidettagli.title} </Card.Title>
          <Card.Text className="price mt-2">price: {tuttidettagli.price} </Card.Text>
          <Button as={Link} to={`/bookdetails/${tuttidettagli.asin}`} variant="primary" >Book Details</Button>
        </Card.Body>
      </Card>
      </Col>
      
    );
  }
  
  export default SingleBook;