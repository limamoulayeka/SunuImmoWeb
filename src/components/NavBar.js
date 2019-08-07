import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/navbar.css';
export default class NavBar extends Component {

    render () {
        return (
            <div className="navbarcontainer" >
                <nav class="navbar navbar-dark bg-dark">
                            <a class="navbar-brand" href="#">SunuImmo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/listProperty" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                <Link to="/listProperty" class="nav-link" >Property</Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link" >Disconnect</Link>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
                </nav>
            </div>
        )
    }

}