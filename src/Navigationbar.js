import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

function Navigationbar() {
    var x=''
    if (window.innerWidth <576){
        x='false'
    } else if (window.innerWidth > 576 && window.innerWidth <= 768){
        x='sm'
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
        x = 'md'
    } else if (window.innerWidth > 992 && window.innerWidth <= 1200) {
        x = 'lg'
    } else if (window.innerWidth > 1200 && window.innerWidth <= 1400) {
        x = 'xl'
    } else {
        x = 'xxl'
    }
    return (
        <>
        <div style={{ backgroundColor: '#292723' , width:"100%", display:'flex',justifyContent:'center'}}>
            <Navbar.Brand href="#" fluid='true'><img src={logo} alt='logo' style={{height:'75px'}}/></Navbar.Brand>
        </div>
            {[x].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 nav" style={{ height: '50px'}}>
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={logo} alt='logo' fluid='true' style={{ height: '100px'}}/>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <div style={{width:'20vw'}}></div>
                                <Nav className="justify-content-center flex-grow-1 me-auto" style={{gap:'20px'}}>
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Sneakers</Nav.Link>
                                    <Nav.Link href="#action2">Brands</Nav.Link>
                                    <Nav.Link href="#action2">Resell</Nav.Link>
                                    <NavDropdown
                                        title={<FontAwesomeIcon icon={faUser} />}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Log in/Sign up
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex" style={{ width: '20vw' }}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-dark"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navigationbar