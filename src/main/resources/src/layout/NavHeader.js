import React from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

export default function NavHeader() {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg shadow"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Crud App
        </Link>
        <div>
          <Link className="mx-2 fs-2"
            to="https://www.facebook.com/sachin.kumar.nimbal9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook" />
          </Link>
          <Link className="mx-2 fs-2"
            to="https://github.com/sachinnimbal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github" />
          </Link>
          <Link className="mx-2 fs-2"
            to="https://codepen.io/sachinnimbal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-codepen" />
          </Link>
          <Link className="mx-2 fs-2"
            to="https://www.instagram.com/sachin.kumar.nimbal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram" />
          </Link>
          <Link className="mx-2 fs-2"
            to="https://www.linkedin.com/in/sachin-nimbal/"
            target="_blank"
            rel="noopener"
          >
            <i className="bx bxl-linkedin" />
          </Link>
        </div>
        <Link className="btn btn-outline-light" to="/addUser">
          Add
        </Link>
      </div>
    </nav>
  );
}
