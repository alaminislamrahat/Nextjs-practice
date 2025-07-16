import { resolve } from 'path'
import React from 'react'

type user = {
    id: number,
    name : string,
    userName : string,
    email : string,
    phone : string
}

const server = async() => {
    await new Promise((resolve) => setTimeout(resolve,2000))
    const res = await fetch('https://jsonplaceholder.typicode.com/user');
    const result = await res.json();

  return (
    <div>
        {
            result.map((user : user)  => <li key={user.id}>{user.name}, { user.email}</li>)
        }
    </div>
  )
}

export default server