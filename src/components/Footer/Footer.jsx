import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" className='mb-4'>
                        <div className="logo">
                            <div>
                                <h1 className='text-dark'>MiniShop</h1>
                            </div>
                        </div>
                        <div className="footer-text mt-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, facilis dipisicing elit. Tempore, facilis.
                        </div>
                    </Col>

                    <Col lg="3" md="3" className='mb-4'>
                        <div className="footer-quick_links">
                            <h4 className="quick-link_titles">Top Categories</h4>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Modern Sofa</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Mobile Phones</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Laptops</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Watches</Link>
                                    </ListGroupItem>
                                </ListGroup>
                        </div>
                    </Col>

                    <Col lg="2" md="3" className='mb-4'>
                    <div className="footer-quick_links">
                            <h4 className="quick-link_titles">Useful Links</h4>
                                <ListGroup className='footer-contact'>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/shop">Store</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/cart">Cart</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/login">Login</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Privacy Policy</Link>
                                    </ListGroupItem>
                                </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" md="3">
                    <div className="footer-quick_links">
                            <h4 className="quick-link_titles">Contact</h4>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span><i className=''></i></span>
                                        <p className='text-dark'>Grace Court estate, Makoko road</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                       <span><i className=''></i></span>
                                       <p className='text-dark'>+2348119292443</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span><i className=''></i></span>
                                        <p className='text-dark'>femzyfadayomi2gmail@com</p>
                                    </ListGroupItem>
                                </ListGroup>
                        </div>
                    </Col>

                    <Col lg="12">
                        <p className="footer-copyright">Copyright {year} developed by Oluwafemi Fadayomi. All rights reserved. </p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer