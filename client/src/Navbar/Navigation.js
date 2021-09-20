import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

// Responsive fixed navbar to switch from Form to list of entries:
const Navigation = () => {

    return(
        <div>
<Navbar collapseOnSelect bg="dark" variant="dark" fixed="top" expand="sm" style={{height: "3.2rem"}}>
<Navbar.Brand href="#form" className="order-sm-0 mx-auto order-1"></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" className="order-sm-1 order-0"/>
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link className="bg-dark" href="#form"><h6>Form</h6></Nav.Link>
<Nav.Link className="bg-dark" href="#entries"><h6>Entries</h6></Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
    </div>
    )
}

export default Navigation