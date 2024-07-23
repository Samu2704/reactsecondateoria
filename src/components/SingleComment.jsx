import { useState } from "react"
import { ListGroup, Button, Form } from "react-bootstrap"


function SingleComment({ comment, loadComments }) {

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllOWJiN2JmNTA2ZTAwMTU0ODJlMzMiLCJpYXQiOjE3MjE2NzA1ODMsImV4cCI6MTcyMjg4MDE4M30.mLs7pGAeTMlLyZ5fJork9lkEc8ZUNPKo-1cklx3BceU"
                },
            })
            if (response.ok) {
                alert("cancellato correttamente")
                await loadComments()
            }
            else {
                alert("errore cancellazione")
            }
        } catch (error) {
            alert("errore generico")
        }

    }
    const [isEditing, setIsEditing] = useState(false)
    const [formValue, setFormValue] = useState({
        rate: comment.rate,
        comment: comment.comment,
        elementId: comment.elementId
    })
    const editForm = () => {
        setIsEditing(!isEditing)
    }
    const handleEdit = async () => {
        if(formValue.rate > 5 || formValue.rate <1){
            alert("inserisci un numero da 1 a 5")
            return
        }
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllOWJiN2JmNTA2ZTAwMTU0ODJlMzMiLCJpYXQiOjE3MjE2NzA1ODMsImV4cCI6MTcyMjg4MDE4M30.mLs7pGAeTMlLyZ5fJork9lkEc8ZUNPKo-1cklx3BceU"
                },
                body: JSON.stringify(formValue)
                

            })
            if (response.ok) {
                alert("modificato correttamente")
                 await loadComments()
                isEditing(false)
                setFormValue({
                    rate: comment.rate,
                    comment: comment.comment,
                    elementId: comment.elementId
                })
            }
            else {
                alert("errore modifica")
            }
        } catch (error) {
            alert("errore generico")
        }
    }

    const handleChange = (event => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value })
      })
    return (
        <>
            {isEditing && <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>From 1 to 5</Form.Label>
                    <Form.Control type="number" placeholder="rate" min="1" max="5" name="rate" onChange={handleChange} value={formValue.rate} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your comment</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" onChange={handleChange} value={formValue.comment} />
                </Form.Group>
                <Button variant="primary" onClick={handleEdit}>Modifica</Button>
            </Form>}
            <ListGroup.Item> rate: {comment.rate}</ListGroup.Item>
            <ListGroup.Item> comment:{comment.comment}</ListGroup.Item>
            <ListGroup.Item> author:{comment.author}</ListGroup.Item>

            <button type="button" className="btn btn-danger mb-2 me-3" onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg></button>

            <button type="button" className="btn btn-success mb-2 me-3" onClick={editForm}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
            </svg></button>
        </>
    )
} export default SingleComment






