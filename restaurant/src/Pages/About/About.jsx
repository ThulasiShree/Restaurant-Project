import React from 'react'
import './About.css'

import AboutChef1 from '../../Utils/img/about-chef1.jpg'
import AboutChef2 from '../../Utils/img/about-chef2.jpg'

import ImageGallery from '../../Components/ImageGallery'
import Reviews from '../../Components/Reviews/Reviews'

const About = () => {
  return (
    <div className="about-page">
      <header className='mt-5'>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light '>About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda magni nulla veritatis fugiat vitae iure qui totam nisi fuga dolorum sunt distinctio quis ipsum a, quo sit nostrum, soluta vero. Reprehenderit non quae, quod sint ipsa, pariatur rerum itaque aperiam consequatur doloremque eveniet. Consequatur aliquam ducimus consectetur assumenda pariatur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate! Architecto placeat nostrum beatae voluptate voluptates delectus, eum magnam numquam debitis cum vero esse impedit nemo itaque sed porro iure eos cumque ipsa. Architecto esse ipsa mollitia nemo repudiandae facilis natus ad distinctio soluta, ducimus officia et minima quidem dolore est eaque vero consequatur, inventore earum quod sit modi id laboriosam? Est optio deleniti animi obcaecati. Inventore reiciendis, provident nesciunt tempora repudiandae, saepe nostrum, pariatur a veritatis iure voluptatum incidunt!</p>

        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} className='img-fluid my-4' alt="" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} className='img-fluid my-4' alt="" />
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto nisi quod modi aut commodi dolore blanditiis consectetur necessitatibus optio adipisci nulla, ad vitae consequatur. Maxime, consequatur modi. Natus aliquid praesentium corporis quas nisi consequuntur porro totam facere in, minima dolorem qui optio animi fuga deleniti ea? Ipsa ducimus quibusdam natus pariatur sapiente. Voluptatibus adipisci similique illum aliquid eius, libero suscipit nesciunt dolorem rem quisquam molestias alias dicta fugiat perspiciatis. Mollitia blanditiis accusamus dicta cum facere, nostrum reprehenderit ex corrupti numquam eaque ipsam, necessitatibus exercitationem qui maiores. Adipisci, inventore tenetur.</p>

      </div>

      <div className='bg-dark text-light'>
        <ImageGallery/>
      </div>

      <div className="my-5">
        <Reviews/>
      </div>

    </div>
  )
}

export default About