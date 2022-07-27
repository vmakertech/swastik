import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux' 
import { addAdmin, addUser } from './action'

export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(user);


  const defaultValue = {
    user: "Mohd Kamleen",
    password: "kamleen123"
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
    if (!state.user) 
      return toast.warning("Username required")
      
    if (!state.password) 
    return toast.warning("Password required")
    
    if (!checked)
      return toast.info("Accept our terms and condition") 

    dispatch(addUser("developer"))
  } 

 
  useEffect(() => {
    setChecked(false)
    setState(defaultValue)
  }, []);

  return (
    <>
      <form action='/' onSubmit={handleSubmit}>
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

      <button onClick={() => {dispatch(addAdmin("admin"))}}>admin add</button>
 
    </>
  );
}

