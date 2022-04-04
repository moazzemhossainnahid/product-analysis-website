import React from "react";
import "./Bike.css";
import bike from '../../../images/blue_Vermillion_color.png'
import { useNavigate } from "react-router-dom";

const Bike = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6 my-3">
              <h2 className="">Yamaha MT-15 Feature Review  <br /> – Overview</h2>
              <p className="">
                The new Yamaha MT-15 is the all-new release in the 150cc
                category from Yamaha. This street naked motorcycle developed and 
                manufactured in Yamaha Motorcycle Thailand. The motorcycle
                uncovered in a public inauguration on October 06, 2018, by the
                MotoGP Superstar Valentino Rossi & Maverick Viñales at that
                time.
              </p>
              <button className="btn btn-outline-danger" onClick={() => navigate('/about')}>Explore More</button>
            </div>
            <div className="col-12 col-md-6 col-lg-6 my-3">
                <img className="img-fluid w-75" src={bike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bike;
