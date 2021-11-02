import React from 'react';
import './movieCard.scss';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import MovieModal from '../movieModal/MovieModal';
import ModalInfo from '../movieModal/ModalInfo'

const MovieCard = ({ data }) => {
  const [modalMovieData, setModalMovieData] = React.useState({});
  const user = JSON.parse(localStorage.getItem('user'))
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModal = (index) => {
    handleOpen(true)
    setModalMovieData(data[index])
  }
  console.log(user)
  return (
    <center className="card_container">
      <div className="card_wrapper">
        {open ? <ModalInfo handleOpen={handleOpen} handleClose={handleClose} open={open} modalMovieData={modalMovieData} /> : null}
        {data?.map((item, index) => (
          <div key={item.id} className="card" onClick={() => handleOpenModal(index)}>
          <div className="card_overlay">
            <BsFillInfoCircleFill />
          </div>
          <div className="card_top" style={{backgroundImage: "url" + `(${item.poster})`}}>
            <div className="card_title">
              <h1 className="title">{item.title}</h1>
            </div>
          </div>
         {user && <div className="card_bottom">
            <div className="card_info">
              <ul>
                <li>{item.genre}</li>
                <li>{item.director}</li>
                <li>{item.year}</li>
              </ul>
            </div>
          </div>}
        </div>
        ))}
      </div>
    </center>
  );
};

export default MovieCard;
