import React from 'react';
import './home.scss';
import { MovieCard, Header } from '../../components';
import axios from 'axios';
import imdbFile from '../../imdb.json'

const Home = () => {
  const [movieData, setMovieData] = React.useState([]);
  const [cardPortion, setCardPortion] = React.useState(20);
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        // const res = await axios.get('http://localhost:3000/imdb.json');
        let slicedData = imdbFile.slice(
          `${cardPortion - 20}`,
          `${cardPortion}`
        );
        setMovieData((prevData) => [...prevData, ...slicedData]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [cardPortion]);

  React.useEffect(() => {
    document.addEventListener('scroll', srollHandler);

    return function () {
      document.removeEventListener('scroll', srollHandler);
    };
  }, []);

  const srollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setCardPortion((prevState) => prevState + 20);
    }
  };

  return (
    <div className="home">
      <Header />
      <MovieCard data={movieData} />
    </div>
  );
};

export default Home;
