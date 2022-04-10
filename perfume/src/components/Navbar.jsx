import React from 'react'
import '../components/Style.css';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AccountCircle, HelpOutlineOutlined, SearchOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="wrapper">
            <div className="left">
                <div className="menu-item">
                    <a href="./register">REGISTER</a>
                </div>
                <div className="menu-item" style={{display: 'flex'}}>
                    <AccountCircle style={{color: "#0f1827", fontSize: 25}} />
                    <p style={{paddingTop: '3px'}}><a href="/login">SIGN IN</a></p>
                </div>
            </div>
            <div className="center">
                <div className="logo">
                    <h1>Hong Bes Oiw.</h1>
                </div>
            </div>
            <div className="right">
                <div className="search-container">
                    <input></input>
                    <SearchOutlined style={{color: "gray", fontSize: 16}}/>
                </div>
                <div className="menu-item">
                    <Badge badgeContent={6} color="success">
                        <a href="/cart"><ShoppingCartOutlinedIcon style={{color: "#0f1827", fontSize: 25}}/></a>
                    </Badge>
                </div>
                <div className="menu-item">
                    <HelpOutlineOutlined style={{color: "#0f1827", fontSize: 25}}/>
                </div>
            </div>
        </div>
        <div className="underline">
            <h1> </h1>
        </div>
    </div>
  )
}

export default Navbar