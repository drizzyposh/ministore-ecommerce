import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import  {Container, Row, Col} from 'reactstrap'
import '../styles/Shop.css'
import {useState} from 'react'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'


function Shop() {
    const [productsData, setProductsData] = useState(products)

    const handleFilter = (e) => {
        const filterValue = e.target.value
        if(filterValue === "Laptop") {
            const filterProducts = products.filter((item) => item.category === "Laptop")

            setProductsData(filterProducts)
        }

        if(filterValue === "Mobile") {
            const filterProducts = products.filter((item) => item.category === "Mobile")

            setProductsData(filterProducts)
        }

        if(filterValue === "Watch") {
            const filterProducts = products.filter((item) => item.category === "Watch")

            setProductsData(filterProducts)
        }

        if(filterValue === "Wireless") {
            const filterProducts = products.filter((item) => item.category === "Wireless")

            setProductsData(filterProducts)
        }

        if(filterValue === "Sofa") {
            const filterProducts = products.filter((item) => item.category === "Sofa")

            setProductsData(filterProducts)
        }
    }


    const handleSearch = (e) => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        
        setProductsData(searchedProducts)
    }

    return <Helmet title="shop">
        <CommonSection title="Products"/> 

         <section>
            <Container>
                <Row>
                    <Col lg="3" md="3">
                        <div className="filter-products">
                            <select onChange={ handleFilter}>
                                <option>Filter By Category</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Watch">Watch</option>
                                <option value="Wireless">Wireless</option>
                                <option value="Sofa">Sofa</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg="3" md="6" className="text-end">
                        <div className="filter-products">
                                <select>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Decending</option>
                                </select>
                        </div>
                    </Col>
                    <Col lg="6" md="12">
                        <div className="search-box">
                            <input type="text" placeholder="search..." onChange={handleSearch }/>
                            <span>
                                <i class="uil uil-search"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
         </section>

         <section className="pt-0">
            <Container>
                <Row>
                    {productsData.length === 0 ? ( <h1 className="text-center fs-3">No products available</h1>) : ( <ProductList data={productsData}/>)}
                </Row>
            </Container>
         </section>
    </Helmet>
}

export default Shop