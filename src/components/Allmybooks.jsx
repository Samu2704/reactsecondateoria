
import "./Allmybooks.css"
import { Col, Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import SingleBook from "./SingleBook"
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import CommentArea from "./CommentArea";



function Allmybooks({ resultSearch }) {
    const [border, setBorder] = useState(null)
    const handleClick = (asin) => {
        if (border === asin) {
            setBorder(null)
        } else {
            setBorder(asin)
        }
    };

    return (
        <div >
            <Container>
                <Row>
                    <Col md={8}>
                        {resultSearch.map(b => <SingleBook key={b.asin} tuttidettagli={b} border={border} handleClick={handleClick} />)}
                    </Col>
                    <Col md={4}>
                        {border && <CommentArea asin={border} />}
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default Allmybooks