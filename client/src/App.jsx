import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify' 

export default function App() {

  const defaultValue = {
    user: "",
    password: ""
  }


  const [state, setState] = useState(defaultValue)
  const [checked, setChecked] = useState(false)

  const changeValue = e => {
    let { target: { name, value } } = e
    setState({ ...state, [name]: value })
  }

  const setAgreed = (e) => {
    setChecked(!checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.user || !state.password) 
      return toast.warn("All field are required")
      
    if (!checked)
      return toast.warn("Pls accept chapcha") 
  } 
  toast.warn("Pls accept chapcha") 
  
  useEffect(() => {
    setChecked(false)
    setState(defaultValue)
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <input type="checkbox" checked={checked} onChange={setAgreed} /> I'm not a robot <br />

        <button>
          Submit
        </button>
      </form>

    </>
  );
}
