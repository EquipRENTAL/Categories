import React from "react";
import "./Navbar.css"

const Navbar = props =>
    <div>
        <nav className="navbar navbar-dark bg-success">
            <div className="info-section">
                 <a href="/home" style={{ textDecoration: 'none' }}><h1 className="logo">EquipRENT</h1></a>
            </div>
            <div className="about">
                <a href="/about" style={{ textDecoration: 'none' }} className="navLinks"><p>About Us</p></a>
            </div>
            <div className="browse">
                <a href="/browse" style={{ textDecoration: 'none' }} className="navLinks"><p>Browse</p></a>
            </div>
            <div className="post">
                <a href="/post" style={{ textDecoration: 'none' }} className="navLinks"><p>Post</p></a>
            </div>
            <div className="login">
                <a href="/login" style={{ textDecoration: 'none' }} className="navLinks"><p>Login/Create User</p></a>
            </div>
            <div className="account">
                <a href="/account" style={{ textDecoration: 'none' }} className="navLinks"><p>My account</p></a>
            </div>     
        </nav>
    </div>

export default Navbar;