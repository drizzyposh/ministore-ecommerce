import Helmet from "../components/Helmet/Helmet"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'
import heroPic from '../assets/images/livingroom.png'
import '../styles/Home.css'
import Services from "../services/Services"
import ProductList from "../components/UI/ProductList"
import products from '../assets/data/products'
import doubleSofa from '../assets/images/double-sofa-02.png'
import Clock from "../components/UI/Clock"



function Home() {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [watchProducts, setWatchProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])


    useEffect(() => {
        const filterTrendingProducts = products.filter((item) => item.category === 'Laptop')


        const filterBestSalesProducts = products.filter((item) => item.category === 'Mobile')

        const filterWatchProducts = products.filter((item) => item.category === 'Watch')

        const filterWirelessProducts = products.filter((item) => item.category === 'Wireless')

        const filterPopularProducts = products.filter((item) => item.category === 'Sofa')


        setTrendingProducts(filterTrendingProducts)
        setBestSalesProducts(filterBestSalesProducts)
        setWatchProducts(filterWatchProducts)
        setWirelessProducts(filterWirelessProducts)
        setPopularProducts(filterPopularProducts)
    }, [])

    const year = new Date().getFullYear()
    return (
        <Helmet title={"Home"}>
            <section className="hero-section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero-content">
                                <p className="hero-subtitle">Trending product in {year}</p>
                                <h2>Make Your Home More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum earum, cum debitis voluptate dolores.</p>

                                <motion.button whileTap={{ scale: 1.2}} className="shop-btn">
                                    <Link to='/shop'>SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero-img">
                                <img src={heroPic} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
            
            <section className="trending-products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section-title">Trending Products To Buy</h2>
                        </Col>
                        <ProductList data={trendingProducts}/>
                    </Row>
                </Container>
            </section>

            <section className="best-sales">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section-title">Our Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts}/>
                    </Row>
                </Container>
            </section>

            <section className="timer-count">
                <Container>
                    <Row>
                        <Col lg="6" md="12" className="count-down_col">

                            <div className="clock-timer">
                                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                                <h3 className="text-white fs-5 mb-3">Quality Laptops</h3>
                            </div>
                            <Clock />

                            <motion.button whileTap={{scale: 1.2}} className="shop-btn store-btn"><Link to="/shop">Visit Store</Link>
                            </motion.button>
                        </Col>

                        <Col lg="6" md="12" className="text-end counter-img">
                            <img src={doubleSofa} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new-arrivals">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2 className="section-title">New Arrivals</h2>
                        </Col>
                        <ProductList data={watchProducts}/>
                        <ProductList data={wirelessProducts}/>
                    </Row>
                </Container>
            </section>

            <section className="popular-category ">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2 className="section-title">Popular Categories</h2>
                        </Col>
                        <ProductList data={popularProducts}/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home
