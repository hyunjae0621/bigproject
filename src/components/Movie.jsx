import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import Rating from "./Rating";
import InputBox from "./InputBox";
import { useState } from "react";


function Movie({ id, coverImage, year, title, summary, genres}) {

const [cmtList, setCmtList] = useState([])

const handleCmtList = (cmt) => {
  setCmtList([cmt, ...cmtList])
  
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
        
        <ul>
          {cmtList.map((cmt,index) => (<li key={index}>{cmt}</li>))}

        </ul>

      </div>
    <Rating id={id}/> <InputBox handleCmtList={handleCmtList}/>
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
