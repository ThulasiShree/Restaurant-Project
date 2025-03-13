import React from 'react'
import './Menu.css'

import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap'

import BreakFastImg from '../../Utils/img/breakfast.jpg'
import LunchImg from '../../Utils/img/lunch.jpg'
import DinnerImg from '../../Utils/img/dinner.jpg'
import DessertImg from '../../Utils/img/dessert.jpg'

const breakfast = [
  {
    id: 1,
    name: 'South-Side',
    description: 'Idly, Masala Dosa, Pongal, Rava Pongal, Sweet Pongal, Aval Upma',
    price: 'Rs.300'
  },
  {
    id: 2,
    name: 'North-Side',
    description: 'Aloo Parath, Gobi Paratha, Methi Paratha',
    price: 'Rs.500'
  },
  {
    id: 3,
    name: 'South-Side',
    description: 'Paniyaram, Puttu, Sambar Vada',
    price: 'Rs.600'
  },
  {
    id: 4,
    name: 'North-Side',
    description: 'Bread Roll, Aloo Kachori, Bread Pakoda',
    price: 'Rs.250'
  }
];
const lunch = [
  {
    id: 1,
    name: 'Briyani',
    description: 'Veg Briyani, Mushroom Briyani, Chicken Briyani, Mutton Briyani',
    price: 'Rs.500'
  },
  {
    id: 2,
    name: 'Meal',
    description: 'Normal Meal, South-Indian Meal, North-Indian Meal',
    price: 'Rs.500'
  },
  {
    id: 3,
    name: 'Tiffen-Items',
    description: 'Paratha, Chappathi',
    price: 'Rs.600'
  }
];
const dinner = [
  {
    id: 1,
    name: 'Dosa',
    description: 'Masala Dosa, Paneer Dosa, Pizza Dosa, Ghee Dosa, Butter Dosa',
    price: 'Rs.300'
  },
  {
    id: 2,
    name: 'Paratha',
    description: 'Aloo Paratha, Paneer Paratha, Methi Paratha, Veg Paratha',
    price: 'Rs.400'
  },
  {
    id: 3,
    name: 'Idly',
    description: 'Podi Idly, Masala Idly, Sampar Idly, Idly Upma, Min Idly',
    price: 'Rs.200'
  },
  {
    id: 4,
    name: 'Roti',
    description: 'Naan, Butter Naan, Mint Roti',
    price: 'Rs.200'
  }
];
const dessert = [
  {
    id: 1,
    name: 'Lemon Cake',
    description: 'Flour, Sugar, Baking Powder, Lemo',
    price: 'Rs.350'
  },
  {
    id: 2,
    name: 'Cinnamon Rolls',
    description: 'Flour, Salt, Sugar, Cinnamon, Yeast, Sour Cream Milk',
    price: 'Rs.400'
  },
  {
    id: 3,
    name: 'Vegan PanCakes',
    description: 'Flour, Sugar, Baking Powder, Soya Milk, BlueBerries',
    price: 'Rs.250'
  },
  {
    id: 4,
    name: 'Mango IceCream',
    description: 'Fresh Cream, Sugar, Vennila Estract, Mango',
    price: 'Rs.290'
  }
];

const Menu = () => {
  return (
      <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className='text-light'>Menu</h1>
          </div>
        </header>

        <div className="breakfast my-5">
            <div className="container">
              <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>BreakFast</h2>
              <div className="row flex-column-reverse flex-lg-row">
                <div className='col-lg-6 d-flex justify-content-center'>
                  <img src={BreakFastImg} className='img-fluid w-75 mt-4mt-lg-0' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                  {breakfast.map((breakfast) => (
                    <div key={breakfast.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {breakfast.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {breakfast.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {breakfast.price}
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        <div className="lunch bg-dark text-light py-5">
            <div className="container">
              <h2 className='text-center fs-1 mb-4 pt-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
              <div className="row">
                <div className='col-lg-6 d-flex justify-content-center'>
                  <img src={LunchImg} className='img-fluid w-75 mt-4mt-lg-0' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                  {lunch.map((lunch) => (
                    <div key={lunch.id}>
                      <Card className='border-0 bg-dark text-light'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {lunch.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {lunch.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {lunch.price}
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        <div className="dinner my-5">
            <div className="container">
              <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
              <div className="row flex-column-reverse flex-lg-row">
                <div className='col-lg-6 d-flex justify-content-center'>
                  <img src={DinnerImg} className='img-fluid w-75 mt-4mt-lg-0' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                  {dinner.map((dinner) => (
                    <div key={dinner.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {dinner.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {dinner.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {dinner.price}
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        <div className="dessert bg-dark text-light py-5">
            <div className="container">
              <h2 className='text-center fs-1 mb-4 pt-4 mb-lg-5 text-uppercase fw-bold text-success'>dessert</h2>
              <div className="row">
                <div className='col-lg-6 d-flex justify-content-center'>
                  <img src={DessertImg} className='img-fluid w-75 mt-4mt-lg-0' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                  {lunch.map((dessert) => (
                    <div key={dessert.id}>
                      <Card className='border-0 bg-dark text-light'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {dessert.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {dessert.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {dessert.price}
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

      </div>
    )
}

export default Menu