import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LinkedIn from '@/components/linked-in';
import GitHub from '@/components/git-hub-icon';
import PersonIcon from '@/components/person-icon';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">Store Data</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Store Data
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Home</Nav.Link>

                  <Nav.Link
                    href="https://dspyk77.github.io/landing-page/index.html"
                  >
                    <PersonIcon />

                    <span className="ms-2">My Landing Page</span>
                  </Nav.Link>

                  <Nav.Link href="https://github.com/dspyk77">
                    <GitHub />

                    <span className="ms-2">GitHub</span>
                  </Nav.Link>

                  <Nav.Link href="https://www.linkedin.com/in/daniel-spykstra-0b3045218/">
                    <LinkedIn />

                    <span className="ms-2">Linkedin</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
