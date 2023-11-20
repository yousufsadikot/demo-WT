import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Nav className="">
      <div className="bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </Nav>
  );
};

export default Sidebar;
