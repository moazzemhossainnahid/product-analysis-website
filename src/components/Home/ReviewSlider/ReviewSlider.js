import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../../hooks/useReviews";
import "./ReviewSlider.css";
import ReviewThree from "./ReviewThree/ReviewThree";

const ReviewSlider = () => {
  const [reviews] = useReviews();
  const newReview = reviews.slice(0,3);
  const navigate = useNavigate();
  return (
    <div className="py-5">
      <h3 className="bg-warning py-3 my-5">Review Show: {newReview.length}</h3>
      <div className="reviewDiv">
      {
        newReview.map(review => <ReviewThree review = {review} key = {review.id}></ReviewThree>)
      } 
    </div>
    <button onClick={() => navigate('/reviews')} className="btn btn-outline-danger my-5">Show More Review</button>
    </div>
  );
};

export default ReviewSlider;
