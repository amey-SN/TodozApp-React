import React from 'react'

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-5">
        <div className="container-fluid text-center">
        <h3 className="text-center text-light bg-dark p-3">{props.title} </h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    </div>
  </nav>
    )
}
