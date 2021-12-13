import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap';

const HomeTopPanel = (props) => {
    const { username } = props;
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
              <a>{username}</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
};

export default HomeTopPanel;