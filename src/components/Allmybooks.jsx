import books from "../books/history.json"
import "./Allmybooks.css"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import SingleBook from "./SingleBook"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react"



function Allmybooks() {

    

    const  [search, setSearch]= useState(" ")
    const [resultSearch, setResultSearch] = useState(books)
    const handleSearch = (e) =>{
        setSearch(e.target.value)
        const resultTemp = books.filter((book) =>{
           return book.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setResultSearch(resultTemp)
    } 
    return (
        <div >

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
              
            </InputGroup>


            <Container>
                <Row>
                    {resultSearch.map(b => <SingleBook key={b.asin} tuttidettagli={b} />)}
                </Row>
            </Container>
        </div>
    )

}
export default Allmybooks