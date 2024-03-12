import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';



export const Navbar = () => {

    const navigate = useNavigate()
      
        return (
        <div >

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
        </div>
    )
}