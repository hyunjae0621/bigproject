import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import Rating from "./Rating";
import InputBox from "./InputBox";
import { useState } from "react";


function Movie({ id, coverImage, year, title, summary }) {


  const [rating, setRating] = useState(0)
  const [cmtList, setCmtList] = useState([])


  const handleCmtList = (cmt) => {
    const data = {
      ...cmt,
      rating
    }
    setCmtList([data, ...cmtList])

  }
  const handleRating = (currentRating) => {
    setRating(currentRating)

  }





  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>

        <ul className={styles.list} >

          {cmtList.map((data, index) => (<li key={index}>

            ⭐️ : {data.rating} 😀 : {data.name} ✏️ : {data.cmt}


          </li>))}


        </ul>

      </div>


      <Rating handleRating={handleRating} /> <InputBox handleCmtList={handleCmtList} />
    </div>

  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Movie;
