import React from 'react';
import './About.css';
import image from '../../images/all-new-yamaha-mt-15-gray-black-4.png';

const About = () => {
    return (
        <div>
            <h1 className='bg-info py-3 display-4 fw-bold text-light my-5'>Yamaha MT-15</h1>
            <div className="content">
                <img src={image} alt="" className="img-fluid my-5" />
                <div className="specification text-start border border-1 rounded my-5 p-5 w-100 mx-auto">
                    <h2 className=" d-flex justify-content-around border border-1 rounded py-2 my-2 text-success">Price: <span className="text-success">	Tk.395,000</span></h2>
                    <h3 className="text-center py-5">-Top Features-</h3>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Body Type: <span className="text-danger">	Sports Naked Bikes</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Engine: <span className="text-danger">155cc</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Mileage: <span className="text-danger">52.02 Kmpl</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Emission Type: <span className="text-danger">BS6</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Kerb Weight: <span className="text-danger">138 Kg</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Max Power: <span className="text-danger">18.5 bhp</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">ABS: <span className="text-danger">Single Channel</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Gear Box: <span className="text-danger">6-Speed</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Tyre Type: <span className="text-danger">Tubeless</span></h4>
                    <h4 className=" d-flex justify-content-around border border-1 rounded py-2 my-2">Fuel Type: <span className="text-danger">Petrol</span></h4>
                </div>
            </div>
        </div>
    );
};

export default About;