import React, { Component } from 'react'
import './Style.css'

export default class Carousel extends Component {

    dataGlassses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        dataGlassses: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }


    renderGlasses = () => {
        return this.dataGlassses.map((item, index) => {
            return (
                <button key={index} onClick={() => {
                    const newState = { dataGlassses: item };
                    this.setState(newState);
                }}>
                    <img className="card-img-top " src={item.url} alt='' />
                    <h4 className="card-title text-danger">{item.name}</h4>
                    <p className="card-text">Price: {item.price}$</p>
                    
                </button>
            )
        })
    }

    render() {
        const { url, name, price } = this.state.dataGlassses
        return (
            <div className='container' >

                <div className='col-md-4 mx-auto'>
                    <div className="card mt-25 ">
                        <img className="card-img-top" style={{ width: '300px', height: '400px' }} src="./glassesImage/model.jpg" alt="" />
                        <img className='imgGlass' src={url} alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-danger">{name}</h4>
                            <p className="card-text">Price: {price}$</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="btn" role="group" aria-label="Basic example">
                        {this.renderGlasses()}
                    </div>
                </div>

            </div>
        )
    }
}
