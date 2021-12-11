import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap';

const HomeTopPanel = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">FormServe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Settings</Nav.Link>
            <Navbar.Text>
              <a href="#login">Example user</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
};

export default HomeTopPanel;