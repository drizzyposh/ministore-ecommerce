import Helmet from '../components/Helmet/Helmet'
import {useState} from 'react'
import {Container, Row, Col, Form, FormGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/Login.css'
import { signInWithEmailAndPassword }from 'firebase/auth'
import {auth} from '../firebase.config'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const signin = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userDetails = await signInWithEmailAndPassword(auth, email, password)

            const user = userDetails.user

            console.log(user)
            setLoading(false)
            toast.success('Successfully logged in')
            navigate('/checkout')

        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }


    return <Helmet title="Login">
        <section>
            <Container>
                <Row>
                   {loading ? (<Col lg="12" className="text-center"><h4 className="fw-bold">Loading...</h4>
                   </Col>
                   ) : (
                    <Col lg="6" className="m-auto text-center ">
                    <h3 className="fw-bold fs-4 mb-4">Login</h3>

                    <Form className="auth-form" onSubmit={signin}>
                        <FormGroup className="form-group">
                            <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>
                        
                        <FormGroup className="form-group">
                            <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </FormGroup>

                        <button type="submit" className="shop-btn shop-btn2 auth-btn">Login</button>
                        <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
                    </Form>
                </Col>
                   )
                   
                
                }
                </Row>
            </Container>
        </section>
    </Helmet>





}

export default Login