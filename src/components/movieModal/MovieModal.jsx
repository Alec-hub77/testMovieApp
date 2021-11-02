import React from 'react'
import './movieModal.scss'
import { BsPlay } from 'react-icons/bs'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

const MovieModal = () => {
    return (
        <div className="movie_modal">
            <div className="movie_modal_top">
                <div className="close_btn"><IoCloseCircleOutline/></div>
                <div className="poster">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTc0ZjQ5ODctYzRmNC00ZjQ3LWFlZDctN2NjNjY1MTliMjU3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjkxMjM5Nzc@._V1_SX300.jpg" alt="" />
                </div>
                    <div className="watch_btn">
                        <button><BsPlay/>Watch</button>
                    </div>
                    
                    <div className="rate_btn like">
                        <AiOutlineLike/>
                        <span>83</span>
                    </div>
                    <div className="rate_btn dislike">
                        <AiOutlineDislike/>
                        <span>21</span>
                    </div>
               
            </div>
            <div className="movie_modal_bottom">
                <div className="video_info">
                    <span className="info_year">2020,</span>
                    <span className="info_genre">[action, comedy], </span>
                    <span className="info_country">USA</span>
                </div>
                <div className="video-extra">
                    <span className="video_quality">Full HD</span>
                    <span className="video_duration">68 min</span>
                </div>
                <div className="video_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias adipisci molestiae obcaecati dolorum accusantium quidem totam id cupiditate dolor blanditiis.</div>
                <div className="video_cast">Cast:</div>
                <span>Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Kit Harington</span>
            </div>
        </div>
    )
}

export default MovieModal
