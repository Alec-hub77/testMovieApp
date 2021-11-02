import React from 'react';
import './movieCard.scss';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import MovieModal from '../movieModal/MovieModal';

const MovieCard = ({ data }) => {
  const [showModal, setShowModal] = React.useState(false);
  const user = JSON.parse(localStorage.getItem('user'))


  return (
    <center className="card_container">
      <div className="card_wrapper">
        {showModal ? <MovieModal setShowModal={setShowModal} /> : null}
        {data?.map((item) => (
          <div key={item.id} className="card" onClick={() => setShowModal(true)}>
          <div className="card_overlay">
            <BsFillInfoCircleFill />
          </div>
          <div className="card_top" style={{backgroundImage: "url" + `(${item.poster})`}}>
            <div className="card_title">
              <h1 className="title">{item.title}</h1>
            </div>
          </div>
          <div className="card_bottom">
            <div className="card_info">
              <ul>
                <li>{item.genre}</li>
                <li>{item.director}</li>
                <li>{item.year}</li>
              </ul>
            </div>
          </div>
        </div>
        ))}
        <div className="card" onClick={() => setShowModal(true)}>
          <div className="card_overlay">
            <BsFillInfoCircleFill />
          </div>
          <div className="card_top">
            <div className="card_title">
              <h1 className="title">Battle of the Bastard</h1>
            </div>
          </div>
          <div className="card_bottom">
            <div className="card_info">
              <ul>
                <li>Action, comedy, drama</li>
                <li>Action, comedy</li>
                <li>2052</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default MovieCard;
