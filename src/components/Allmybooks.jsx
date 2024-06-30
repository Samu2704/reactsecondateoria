import books from "../books/history.json"
import Mycard from "./Mycard"
import "./Allmybooks.css"
import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
function Allmybooks(){
    return(
        <div className="d-flex flex-wrap justify-content-center">
            <Container />
            <Row />
{books.map(b=><Mycard key={b.asin} tuttidettagli={b}/>)}
        </div>
    )

}
export default Allmybooks