import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><b>Quiz Champ</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0 p-3">
                        <Link className="nav-link" aria-current="page" to="/"><b>Home</b></Link>
                        <Link className="nav-link" to="/topics"><b>Topics</b></Link>
                        <Link className="nav-link" to="/statistics"><b>Statistics</b></Link>
                        <Link className="nav-link" to="/blog"><b>Blog</b></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;