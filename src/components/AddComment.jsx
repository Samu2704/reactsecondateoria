import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



function AddComment({ asin, loadComments }) {

  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin

  })
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value })
  }

  const handleSaveComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllOWJiN2JmNTA2ZTAwMTU0ODJlMzMiLCJpYXQiOjE3MjE2NzA1ODMsImV4cCI6MTcyMjg4MDE4M30.mLs7pGAeTMlLyZ5fJork9lkEc8ZUNPKo-1cklx3BceU"
        },
        method: "POST",
        body: JSON.stringify(formValue)
      }
      )
      if (response.ok) {
        loadComments()
        setFormValue({
          elementId: asin,
          comment: "",
          rate: "",
        }, alert("commento aggiunto"))
      } else{
        alert("inserisci un numero da 1 a 5")
      }
    }
    catch (error) {
      alert("errore generico")
    }
  }
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>From 1 to 5</Form.Label>
          <Form.Control type="number" placeholder="rate" min="1" max="5" name="rate" onChange={handleChange} value={formValue.rate} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your comment</Form.Label>
          <Form.Control as="textarea" rows={3} name="comment" onChange={handleChange} value={formValue.comment} />
        </Form.Group>
        <Button variant="primary" onClick={handleSaveComment}>Send comment</Button>
      </Form>
    </>
  )
} export default AddComment