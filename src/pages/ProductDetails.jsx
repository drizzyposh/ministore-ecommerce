import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { useState, useRef, useEffect} from 'react'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/ProductDetails.css'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import {useDispatch} from 'react-redux'
import {cartActions} from '../redux/slices/cartSlice'
import {toast} from 'react-toastify'




function ProductDetails() {
    const [tab, setTab] = useState('desc')
    const [rating, setRating] = useState(null)
    
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()


    const {id} = useParams()
    const product = products.find((item) => item.id === id)

    const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product

    const relatedProducts = products.filter(item => item.category === category)


    const submitForm = (e) => {
        e.preventDefault()

        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewObj)
        toast.success('Review submitted successfully')
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            productName,
            image: imgUrl,
            price,
        }))

        toast.success('Item added successfully')
    }

    useEffect(() => {
        window.scrollTo(0,0)

    }, [product])

    return <Helmet title={productName}>
        <CommonSection title={productName}/>

        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg="6">
                        <img src={imgUrl}/>
                    </Col>

                    <Col lg="6">
                        <div className="product-details ">
                            <h2>{productName}</h2>
                            <div className="product-ratings d-flex align-items-center gap-5 mb-3">
                                <div>
                                    <span ><i className="uil uil-star"></i></span>
                                    <span ><i className="uil uil-star"></i></span>
                                    <span ><i className="uil uil-star"></i></span>
                                    <span><i className="uil uil-star"></i></span>
                                    <span><i className="uil uil-star-half-alt"></i></span>
                                </div>

                                <p className="mt-3">(<span>{avgRating}</span> ratings)</p>
                            </div>

                            <div className='d-flex align-items-center gap-5'>
                                <span className="product-price">${price}</span>
                                <span>Category: {category.toUpperCase()}</span>
                            </div>
                            <p  className="mt-3">{shortDesc}</p>

                            <motion.button whileTap={{scale: 1.2}} className="shop-btn text-white" onClick={addToCart}>Add to Cart</motion.button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="tab-wrapper d-flex align-items-center gap-5">
                            <h6 className={`${tab === 'desc' ? 'active-tab' : ""}`} onClick={() => setTab('desc')}>Description</h6>

                            <h6 className={`${tab === 'rev' ? 'active-tab' : ""}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                        </div>

                        {tab === 'desc' ? (  
                            <div className="tab-content mt-5">
                                <p>{description}</p>
                            </div>
                            ) : (
                                <div className="product-review mt-5">
                                    <div className="review-container">
                                        <ul>
                                            {reviews?.map((item, index) => (
                                                <li key={index} className="mb-4">
                                                    <h6>Sefunmi Fadayomi</h6>
                                                    <span>{item.rating} ( rating)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="review-form " >
                                            <h4>Leave your Reviews</h4>
                                            <form action="" onSubmit={submitForm}>
                                                <div className="form-group">
                                                    <input type="text" placeholder='Enter name' ref={reviewUser}required />
                                                </div>

                                                <div className="form-group d-flex align-items-center gap-5 rating-number">
                                                    <motion.span  whileTap={{scale: 1.2}} onClick={() => setRating(1)}>1<i className="uil uil-star"></i></motion.span >
                                                    <motion.span  whileTap={{scale: 1.2}} onClick={() => setRating(2)}>2<i className="uil uil-star"></i></motion.span >
                                                    <motion.span  whileTap={{scale: 1.2}} onClick={() => setRating(3)}>3<i className="uil uil-star"></i></motion.span >
                                                    <motion.span   whileTap={{scale: 1.2}} onClick={() => setRating(4)}>4<i className="uil uil-star"></i></motion.span >
                                                    <motion.span  whileTap={{scale: 1.2}} onClick={() => setRating(5)}>5<i className="uil uil-star"></i></motion.span >
                                                </div>

                                                <div className="form-group">
                                                    <textarea
                                                    ref={reviewMsg} type="text"
                                                    row={4} placeholder='Review Message...'
                                                    required/>
                                                </div>

                                                <motion.button whileTap={{scale: 1.2}} type="submit"className="shop-btn text-white">Submit</motion.button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </Col>

                    <Col lg="12" className='mt-5'>
                        <h2 className="related-title">You might also like</h2>
                    </Col>

                    <ProductList data={relatedProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet>
    
}

export default ProductDetails