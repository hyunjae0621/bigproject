import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { auth, db } from "../firebase";
import { doc, onSnapshot } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"


function Home() {





  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await ((await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'))).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  onSnapshot(
    doc(db, 'movies', '0yEUfaF8Lis2Nwd2dSLL'), (snapshot) => {
      const moviesData = snapshot.data();
      // console.log("제목이야 :", moviesData.title);
    },
  );

  
  const addMovie = () => {
    const movieCollect = collection(db, 'movies')
    try {
      {movies.map( async (movie) =>{
       await addDoc(movieCollect,   
        { 
          ytsid: movie.id,
          year :movie.year,
          title: movie.title,
           } 
              )})}
       

    }
    catch(error) {
      console.log("🚀error:", error)
      
    }

  }














  useEffect(() => {
    getMovies();
    // addMovie();
  }, []);


  return (
    <div className={styles.container}>
      {loading ?
        <div className={styles.loader}>
          <span>Loading...</span>
        </div> :
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres} />
          ))}</div>}
    </div>
  );
};


export default Home;