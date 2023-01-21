import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import Helmet from  '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/Checkout.css'
import {useSelector} from 'react-redux'


function Checkout() {
    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)



    return (
        <>
            <Helmet title="Checkout">
                <CommonSection title="Checkout" />

                <section>
                    <Container>
                        <Row>
                            <Col lg="8">
                                <h6 className="mb-4">Billing Information</h6>
                                <Form className='billing-form'>
                                    <FormGroup className='form-group'>
                                        <input type="text" placeholder='Enter your name'/>
                                    </FormGroup>

                                    <FormGroup className='form-group'>
                                        <input type="email" placeholder='Enter your email'/>
                                    </FormGroup>

                                    <FormGroup className='form-group'>
                                        <input type="number" placeholder='Phone number'/>
                                    </FormGroup>

                                    <FormGroup className='form-group'>
                                        <input type="text" placeholder='Street address'/>
                                    </FormGroup>

                                    <FormGroup className='form-group'>
                                        <input type="text" placeholder='City'/>
                                    </FormGroup>

                                    <FormGroup className='form-group'>
                                        <input type="text" placeholder='Postal code'/>
                                    </FormGroup>

                                    <FormGroup className='form-group'>
                                        <input type="text" placeholder='Country'/>
                                    </FormGroup>
                                </Form>
                            </Col>


                            <Col lg="4">
                                <div className="checkout-cart">
                                    <h6>Total Qty: <span>{totalQty} items</span></h6>
                                    <h6>Total: <span>${totalAmount}</span></h6>
                                    <h6><span>Shipping: <br />free shipping </span> <span>$0</span></h6>
                                    <h4>Total Cost: <span>${totalAmount}</span></h4>

                                    <button className="shop-btn edit-btn auth-btn w-100">Place an order</button>
                                </div>
                           
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default Checkout