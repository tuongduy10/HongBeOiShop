import React from 'react'
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

const Login = () => {
  return (
    <div className="login-container">
        <div className="login-wrapper">
            <h1 className="title">Sign In</h1>         
            <form className='login-f'>
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
            <Button>Login</Button>

            </form>
        </div>
    </div>
  )
}

export default Login