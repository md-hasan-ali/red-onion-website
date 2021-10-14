import React, { useEffect, useState } from 'react';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='container my-4'>
            <h2 className='text-center py-3'>Our Foods</h2>
            <div className="row">
                {
                    foods.map(food =>
                        <div key={food.key} className='col-md-4'>
                            <div className="single-food">
                                <img src={food.img} alt="" />
                                <h5>{food.name}</h5>
                                <p>{food.desc}</p>
                                <p>{food.price}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Foods;