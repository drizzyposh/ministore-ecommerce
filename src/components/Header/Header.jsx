import './Header.css'
import { Container, Row } from 'reactstrap'
import {useRef, useEffect} from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import avatar from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'

const nav_links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Store'
    },
    {
        path:'cart',
        display:'Cart'
    }
]

function Header() {
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const profileActionRef = useRef(null)


    const menuRef = useRef(null)
    const navigate = useNavigate()
    const currentUser = useAuth()

    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky-header')
            } else {
                headerRef.current.classList.remove('sticky-header')
            }
        })
    }

    useEffect(() => {
        stickyHeader();

        return () => window.removeEventListener('scroll', stickyHeader)
    })

    const menuToggle = () => {
        menuRef.current.classList.toggle('active-menu')
    }

    const navigateToCart = ()=> {
        navigate('/cart')
    }

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show-profileActions')
       

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav-container">
                        <div className="logo">
                            <div>
                                <h1><Link to="/">Ministore</Link></h1>
                            </div>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {nav_links.map((item, index) => (
                                  <li className="nav-item" key={index}>
                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav-active' : ""}>{item.display}</NavLink>
                                  </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav-icons">

                            {/* <span className="fav-icon"><i className="uil uil-heart"></i>
                                <span className="badge">1</span>
                            </span> */}
                            <span className="cart-icon" onClick={navigateToCart}><i className="uil uil-shopping-bag"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <div className="profile">
                                <motion.img whileTap={{scale:1.2}} src={currentUser ? currentUser.photoURL : avatar} alt="" 
                                onClick={toggleProfileActions}
                                />

                                <div className="profile-actions" ref={profileActionRef} onClick={toggleProfileActions}>
                                    {currentUser ? ( <span>Logout</span> 
                                    ) : ( <div>
                                       <Link to="signup">Sign up</Link> 
                                       <Link to="login">Login</Link> 
                                    </div>
                                    )    
                                }
                                </div>
                            </div>
                            
                            <div className="mobile-menu">
                                <span onClick={menuToggle}><i className="uil uil-bars"></i></span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header