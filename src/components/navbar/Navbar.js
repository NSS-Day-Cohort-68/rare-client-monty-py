import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import "./Navbar.css"


export const Navbar = () => {

    const navigate = useNavigate()
      
        return (
        <div >

                {localStorage.getItem("rare_user") ? (
                    <li className="navbar-item">
                        <Link
                        to=""
                        className="navbar-link"
                        onClick={() => {
                            localStorage.removeItem("rare_user")
                            navigate("/login", { replace: true })
                        }}
                        >
                        Logout
                        </Link>
                    </li>
                    ) : (
                    ""
                    )}
        </div>
    )
}