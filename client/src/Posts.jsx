// import React, { useEffect, useState } from 'react'

// const Posts = () => {

//   const [users, setUsers] = useState([])

//   const fetchUsers = async () => await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => setUsers(json))

//     const showComments = e => {
//       window.location.href= e.target.key + "/comment" 
//     }

//   useEffect(() => {
//     fetchUsers()
//   }, []);

//   return (
//     <>
//       <h2>Post fetch from json placeholder</h2>

//       {
//         users.map((data, index) => {
//           return (
//             <>
//               <fieldset>
//                 <legend> post {data.id} </legend>
//                 <h3> {data.title} </h3>
//                 <p> {data.body} </p>
//                 <br /><br />
//                 <button key={data.id} onClick={showComments}>comment</button> &ensp;
//                 <button key={data.id}>delete</button>
//               </fieldset> <br />
//             </>
//           )
//         })
//       }

//     </>
//   )
// }

// export default Posts