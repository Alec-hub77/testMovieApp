import React from "react";
import "./movieModal.scss";
import { BsPlay } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Modal from "@mui/material/Modal";

const ModalInfo = ({ handleOpen, handleClose, open, modalMovieData }) => {
  return (
    <Modal open={open} onClose={handleClose} style={{border: "none"}}>
      <div className="movie_modal">
        <div className="movie_modal_top">
          <div onClick={() => handleClose(false)} className="close_btn">
            <IoCloseCircleOutline />
          </div>
          <div className="poster">
            <img
              src={modalMovieData.poster}
              alt=""
            />
          </div>
          <div className="watch_btn">
            <button>
              <BsPlay />
              Watch
            </button>
          </div>

          <div className="rate_btn like">
            <AiOutlineLike />
            <span>83</span>
          </div>
          <div className="rate_btn dislike">
            <AiOutlineDislike />
            <span>21</span>
          </div>
        </div>
        <div className="movie_modal_bottom">
          <div className="video_info">
            <span className="info_year">{modalMovieData.year},</span>
            <span className="info_genre">{modalMovieData.genre}, </span>
            <span className="info_country">{modalMovieData.country}</span>
          </div>
          <div className="video-extra">
            <span className="video_quality">Full HD</span>
            <span className="video_duration">{modalMovieData.runtime}</span>
          </div>
          <div className="video_description">
           {modalMovieData.plot}
          </div>
          <div className="video_cast">Casts:</div>
          <span>
            {modalMovieData.actors}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ModalInfo;
