import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import "./navbar.css"


export const Navbar = () => {

    const navigate = useNavigate()
      
        return (
        <div className="navbar-main">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to={"./categories"}>Category Management</Link>
                </li>
                <li className="navbar-item">
                    <Link to={"./myposts"}>My Posts</Link>
                </li>
                <li className="navbar-item">
                    <Link to={"./tags"}>Tags Management</Link>
                </li>
                
                

                {localStorage.getItem("rareClient-user") ? (
                    <li className="navbar-item">
                        <Link
                        to=""
                        className="navbar-link"
                        onClick={() => {
                            localStorage.removeItem("rareClient-user")
                            navigate("/login", { replace: true })
                        }}
                        >
                        Logout
                        </Link>
                    </li>
                    ) : (
                    ""
                    )}
            </ul>
        </div>
    )
}