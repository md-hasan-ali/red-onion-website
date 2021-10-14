import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="banner-content">
                            <h3>Best food waiting for your belly..</h3>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;