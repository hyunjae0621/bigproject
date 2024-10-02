import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './Rating.module.css'

const Rating = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="star"
              size={20}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );


      })}

      <p>" 별점 {rating} "</p>
    </div>
  )
}

export default Rating