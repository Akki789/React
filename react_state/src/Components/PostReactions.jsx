import { useState } from "react"

export default function PostReactions(){

    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    function handleLikes(){
        setLikes(prev => prev+1);
    }

    function handleComments(){
        setComments(prev =>  prev+1);
    }
    return(
        <>
        <h2>✅ Assignment 11 — Post Reactions (Like + Comment Counters)</h2>
        <h3>This is my first React Post!</h3>
        <button onClick={handleLikes}>Like</button>
        <button onClick={handleComments}>Add comment</button>
        <p>Likes: {likes} | Comments: {comments}</p>
        </>
    )
}