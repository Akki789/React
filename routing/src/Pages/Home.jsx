import React from "react";
import { Link, useNavigate } from "react-router-dom";

 const users = [
        {id:1, name:"Akash Kumar"},
        {id:2, name:"Vedant Kherade"},
        {id:3, name:"Saurabh Dombe" }
    ];

export default function Home() {
  return (
    <>
        <h1>User List</h1>
        {users.map(user =>(
            <div key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
        ))}
    </>
  )
}



// export default function Home() {
//   let navigate = useNavigate();

//   function goToDashboard() {
//     navigate("/about");
//   }

//   return (
//     <div>
//       <button onClick={goToDashboard}>Login!</button>
//     </div>
//   );
// }
