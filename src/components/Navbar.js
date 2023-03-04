import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex align-items-start flex-row" style={{ width: "100%" }}>


                    <button className="navbar-toggler p-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ maxWidth: "3rem" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand p-2" to="/" style={{ marginRight: "auto" }}>Full Stack Application</Link>
                    <Link className="btn btn-outline-light ml-auto p-2" to="/adduser">Add User</Link>
                </div>


            </nav>


        </div>
    )
}
