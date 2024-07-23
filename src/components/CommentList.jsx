import SingleComment from "./SingleComment"
import { ListGroup } from "react-bootstrap"
function CommnetList({comments, loadComments}) {
    return (
        <ListGroup>

            {comments.map(c => 
                < SingleComment key = {c.id} comment={c} loadComments={loadComments}/>)}
        </ListGroup>

    )
} export default CommnetList