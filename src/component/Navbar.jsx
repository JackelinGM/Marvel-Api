import React from "react";

const Navbar =()=> {
    return(
        <>
        <nav
        style={{ background: "#000" }}
        className="navbar navbar-expand-lg navbar-dark "
      >
        <div className="container-fluid">
        <img className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Marvel_Studios_logo.svg" style={{ width: "100px" }} 
            alt=""
            />
           
        <span  className="navbar-toggler navbar-toggler-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
        </span>
            
           
{/*           
            <span className="navbar-toggler-icon"></span> */}
        
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "end" }}
          >
            <hr className="dropdown-divider" style={{ color: "white" }} />
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  style={{ margin: "5px" }}
                  className="nav-link active text-white"
                  aria-current="page"
                  href="https://www.marvel.com/"
                >
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ margin: "5px" }}
                  className="nav-link text-white"
                  href="https://www.marvel.com/comics"
                >
                 <i class="fab fa-jedi-order"></i> Comics
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ margin: "5px" }}
                  className="nav-link text-white"
                  href="https://www.marvel.com/articles"
                >
                  <i class="fas fa-newspaper"></i> Noticias
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export {Navbar}