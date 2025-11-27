export default function Showmessage(){

    const isLoggedIn = true;
    const username = "Akash"

    return(
        <>
        <h2>📝 Assignment 1 — Show a message only if user is logged in</h2>
        {isLoggedIn ? (<p>Welcome {username}</p>) : (<p>Please login first!</p>)}
        </>
    )
}