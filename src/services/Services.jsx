import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import './Services.css'
import serviceData from '../assets/data/serviceData'

const Services = () => {
  return (
    <div>
      <section className="services">
        <Container>
            <Row>

                {serviceData.map((item, index) => (    
                    <Col lg='3' md='4' key={index}>
                        <motion.div whileHover={{scale: 1.1}} className="service-item" style={{background: `${item.bg}`}}>
                            <span>
                                <i className={item.icon}></i>
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col>
                    ))}
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Services
