import React from 'react'
import { MenuBtn } from '../../Components/MenuBtn'
import './Home.css'

import AboutImg from '../../Utils/img/about-img.jpg'
import {Link} from 'react-router-dom'
import ImageGallery from '../../Components/ImageGallery'

import ContactImage from '../../Utils/img/contact-img.jpg'
import ContactInfo from '../../Components/ContactInfo'

const Home = () => {
  return (
    <div className='home-page'> 
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                        <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                        <h1 className='mb-5 text-black fw-bold text center text-sm-start'>Ours Restaurant</h1>
                        <MenuBtn/>
                    </div>
                </div>
            </div>
        </header>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                    <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                </div>
                <div className="col-lg-6 flex-column align-items-center justify-content-center">
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>
                        About Us
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum non error corporis perferendis quibusdam harum accusamus possimus sit dignissimos. Numquam aliquam obcaecati eum quasi quis repudiandae enim eveniet, sunt quas.</p>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, illum earum cumque odio magnam error et culpa quidem sit iusto vel dolores reiciendis, similique ullam aliquid consequuntur, adipisci alias sed.</p>
                    <Link to="/about">
                        <button type='button' className='btn btn-outline-success btn-lg'>
                            More About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="menu-section py-5 text-light shadow">
            <div className="container d-flex flex-column align-items-center">
                <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
                <div className="row mb-5 w-100">
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                        <h3 className='fs-2 mb-5'>Food</h3>
                        <ul className='px-0'>
                            <li className='d-flex justify-content-between'>
                               <p className='fs-3 mx-2'>BreakFast</p>
                               <p className='fs-3 mx-2 text-success fw-nold'>Rs.300</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                               <p className='fs-3 mx-2'>Briyani</p>
                               <p className='fs-3 mx-2 text-success fw-nold'>Rs.500</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                               <p className='fs-3 mx-2'>Starters</p>
                               <p className='fs-3 mx-2 text-success fw-nold'>Rs.200</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                        <h3 className='fs-2 mb-5'>Drinks</h3>
                        <ul className='px-0'>
                            <li className='d-flex justify-content-between'>
                               <p className='fs-3 mx-2'>Coffee</p>
                               <p className='fs-3 mx-2 text-success fw-nold'>Rs.150</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                               <p className='fs-3 mx-2'>Tea</p>
                               <p className='fs-3 mx-2 text-success fw-nold'>Rs.100</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                               <p className='fs-3 mx-2'>Fresh Juice</p>
                               <p className='fs-3 mx-2 text-success fw-nold'>Rs.200</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <MenuBtn/>
            </div>
        </div>
        
        <ImageGallery/>

        <div className='bg-dark text-light py-5 shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                        <ContactInfo/>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src={ContactImage} className='img-fluid w-50' alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home