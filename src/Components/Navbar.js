import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" to="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/health">Health</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/science">Science</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar;
