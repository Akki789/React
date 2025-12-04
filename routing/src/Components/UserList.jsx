import React from 'react'
import { useParams } from 'react-router-dom'



  const allUsers = [
        {id:1, name:"Akash Kumar", Age: 22, Place:"Pune"},
        {id:2, name:"Vedant Kherade", Age: 23, Place:"Konkan"},
        {id:3, name:"Saurabh Dombe", Age: 24, Place:"Satara"}
    ]

export default function UserList() {
    let {id} = useParams();
    const user = allUsers.find(u => u.id === Number(id))
  

  return (
    <div>
        {user ? (
            <>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Age:{user.Age}</p>
            <p>Place: {user.Place}</p>
            </>
        ) : (
            <h3>User Not Found</h3>
        )

        }
        
    </div>
  )
}
