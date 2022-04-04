import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewData from "./ReviewData/ReviewData";
import './Reviews.css';

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="pt-3">
      <h3 className="bg-info py-3 my-3 mb-5">Total Review: {reviews.length}</h3>

      <div className="reviewDiv py-5">
          {
              reviews.map(review => <ReviewData review = {review} key = {review.id}></ReviewData>)
          }
      </div>

      
    </div>
  );
};

export default Reviews;
