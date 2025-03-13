import React from 'react'
import './Reviews.css'

import {Card, CardBody, CardText, CardFooter, CardTitle} from 'react-bootstrap'

import Person1 from '../../Utils/img/person1.jpg'
import Person2 from '../../Utils/img/person2.jpg'
import Person3 from '../../Utils/img/person3.jpg'
import Person4 from '../../Utils/img/person4.jpg'

const Reviews = () => {
  return (
    <div className="reviews-section container">
        <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
        <div className="row g-4">
            <div className="col-lg-6">
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat itaque fugit quod exercitationem, ipsum quos porro unde ex atque doloremque? Ex saepe porro nobis, eligendi illum possimus dolores sint voluptas delectus perspiciatis deleniti quam illo velit nemo? Rerum, exercitationem.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={Person1} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                        <CardTitle className='text-success'>Ganesh</CardTitle>
                    </CardFooter>
                </Card>
            </div>

            <div className="col-lg-6">
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, fugiat!
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={Person2} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                        <CardTitle className='text-success'>Surya</CardTitle>
                    </CardFooter>
                </Card>
            </div>

            <div className="col-lg-6">
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nemo, natus incidunt a aut esse maiores optio consectetur inventore accusantium deleniti molestiae animi iste quam quia voluptas et minima quisquam.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={Person3} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                        <CardTitle className='text-success'>Ajith</CardTitle>
                    </CardFooter>
                </Card>
            </div>

            <div className="col-lg-6">
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat itaque fugit quod exercitationem, ipsum quos porro unde ex atque doloremque? Ex saepe porro nobis, eligendi illum possimus dolores sint voluptas delectus perspiciatis deleniti quam illo velit nemo? Rerum, exercitationem.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={Person4} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                        <CardTitle className='text-success'>Karthick</CardTitle>
                    </CardFooter>
                </Card>
            </div>

        </div>
    </div>
  )
}

export default Reviews