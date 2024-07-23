import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const [theme, setTheme] = useState('light');

    function handleTheme() {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            setTheme('light');
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/text-field.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-center"></img>
                    &nbsp;{props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success" onClick={handleTheme}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" className="bi bi-circle-half" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
                    </svg></button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
Navbar.propTypes =
{
    title: PropTypes.string.isRequired
}