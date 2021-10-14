import React from 'react';
import img1 from '../../images/Image/chef-cook-food-33614.png'
import img2 from '../../images/Image/adult-blur-blurred-background-687824.png'
import img3 from '../../images/Image/architecture-building-city-2047397.png'
import './About.css'


const About = () => {
    return (
        <div className='about us my-5'>
            <div className="container">
                <h3>Why Chose Me ?</h3>
                <p className='w-50 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ea! Provident voluptatibus consequatur hic, dolorum voluptatum velit voluptatem nihil adipisci earum, est officia repudiandae numquam.</p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-about">
                            <img className='img-fluid mb-3' src={img2} alt="" />
                            <div className='d-flex'>
                                <div className="icon mr-3">
                                    <i class="fas fa-truck"></i>
                                </div>
                                <div className="details">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim delectus dolores magnam commodi molestias </p>
                                    <a href="/">See More</a> <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-about">
                            <img className='img-fluid mb-3' src={img1} alt="" />
                            <div className='d-flex'>
                                <div className="icon mr-3">
                                    <i class="fas fa-truck"></i>
                                </div>
                                <div className="details">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim delectus dolores magnam commodi molestias </p>
                                    <a href="/">See More</a> <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-about">
                            <img className='img-fluid mb-3' src={img3} alt="" />
                            <div className='d-flex'>
                                <div className="icon mr-3">
                                    <i class="fas fa-truck"></i>
                                </div>
                                <div className="details">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim delectus dolores magnam commodi molestias </p>
                                    <a href="/">See More</a> <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;