import React from "react";
import "./movieCard.scss";
import { BsFillInfoCircleFill } from "react-icons/bs";

const MovieCard = () => {
  return (
    <center className="card_container">
      <div className="card_wrapper">
        <div className="card">
          <div className="card_top">
            <div className="card_title">
              <h1 className="title">Battle of the Bastard</h1>
              <BsFillInfoCircleFill />
            </div>
          </div>
          <div className="card_bottom">
            <div className="card_info">
              <span>Genre</span>
              <span>Director</span>
              <span>Year</span>
            </div>
          </div>
        </div>
        <div className="card">
          <h1>Title</h1>
        </div>
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet aspernatur nisi! A, obcaecati amet! Eius, maxime enim. Sed,
            accusamus.
          </p>
        </div>
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet aspernatur nisi! A, obcaecati amet! Eius, maxime enim. Sed,
            accusamus.
          </p>
        </div>
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet aspernatur nisi! A, obcaecati amet! Eius, maxime enim. Sed,
            accusamus.
          </p>
        </div>
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet aspernatur nisi! A, obcaecati amet! Eius, maxime enim. Sed,
            accusamus.
          </p>
        </div>
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet aspernatur nisi! A, obcaecati amet! Eius, maxime enim. Sed,
            accusamus.
          </p>
        </div>
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet aspernatur nisi! A, obcaecati amet! Eius, maxime enim. Sed,
            accusamus.
          </p>
        </div>
      </div>
    </center>
  );
};

export default MovieCard;
