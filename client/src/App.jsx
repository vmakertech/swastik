import React, { useState, useEffect } from 'react';
import Users from './component/Users'

export default function App() {

  const defaultValue = {
    user: "Mohd Kamleen",
    password: "kamleen123"
  }


  const [state, setState] = useState(defaultValue)

  const changeValue = e => {
    let { target: { name, value } } = e
    setState({ ...state, [name]: value })
  }

  const handleSubmit = () => {
    Users.push(state) 
  }

  const tableData = 
    Users.map((data, index) => {
      return <tr>
        <td> {index} </td>
        <td> {data.user} </td>
        <td> {data.password} </td>
        <td>
          <button key={index}>edit</button>
          <button key={index} onClick={() => {Users.pop()}}>delete</button>
        </td>
      </tr>
    })
  


  useEffect(() => {
    setState(defaultValue)
  }, []);

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <input value={state.user}
        name="user"
        placeholder='user name'
        onChange={changeValue}
      /> <br />

      <input
        value={state.password}
        name="password"
        placeholder='password'
        onChange={changeValue}
      /> <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
      {/* </form> */}

      <br /><br /><br />
      <table border="1" cellSpacing={0}>
        <tr>
          <th>id</th>
          <th>user</th>
          <th>password</th>
          <th>action</th>
        </tr>
        { tableData } 

      </table>

    </>
  );
}
