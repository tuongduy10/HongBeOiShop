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

const Register = () => {
  return (
    <div className="reg-container">
        <div className="reg-wrapper">
            <h1 className="title">Create an Account</h1>         
            <form>
                <input placeholder='Username'></input>
                <input placeholder='Name'></input>
                <input placeholder='Password'></input>
                <input placeholder='Email'></input>
                <input placeholder='Address'></input>
                <input placeholder='Telephone'></input>
            <Button>Create</Button>
            </form>
        </div>
    </div>
  )
}

export default Register