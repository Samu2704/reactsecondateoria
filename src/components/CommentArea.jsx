import { useEffect, useState } from "react"
import CommnetList from "./CommentList"
import AddComment from "./AddComment"


function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                headers: {
                    "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllOWJiN2JmNTA2ZTAwMTU0ODJlMzMiLCJpYXQiOjE3MjE2NzA1ODMsImV4cCI6MTcyMjg4MDE4M30.mLs7pGAeTMlLyZ5fJork9lkEc8ZUNPKo-1cklx3BceU"
                }
            })
            const data = await response.json()
            setComments(data)
            } catch (error){
                console.error("error", error)
            }
        }
        
    useEffect(() => {
        loadComments()
    }, [asin])
    return (
        <div>
            <AddComment asin={asin} loadComments={loadComments} />
            <CommnetList comments={comments} loadComments={loadComments} />
        </div>
    )
}
export default CommentArea


