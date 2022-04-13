import axios from 'axios';
import React, { Component, useState } from 'react'
import styled from 'styled-components'
import '../pages/Style.css'

const Button = styled.button`
    width: 35%;
    margin-top: 12px;
    padding: 12px 20px;
    background-color: #ff3c00;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export default function Login(){
  const [username, setUsername] = useState({username:''});
  const [password, setPassword] = useState({password:''});
  
  const bindingUsername = (event) =>{
    setUsername({username: event.target.value})
  }
  const bindingPassword = (event) =>{
    setPassword({password: event.target.value})
  }
  const login = () => {
    axios.post('http://localhost:3001/Users/login', {username: username.username, password: password.password})
      .then(function(result){

      })
      .catch(function(result){

      })
  }

  return (
    <div className="login-container">
        <div className="login-wrapper">
            <h1 className="title">Sign In</h1>         
            <div className='login-f'>
                <input placeholder='Username' autoComplete='off' onChange={(e)=>bindingUsername(e)}></input>
                <input placeholder='Password' type="password" autoComplete='off' onChange={(e)=>bindingPassword(e)}></input>
                <Button onClick={() => login()}>Login</Button>
            </div>
        </div>
    </div>
  )
}
