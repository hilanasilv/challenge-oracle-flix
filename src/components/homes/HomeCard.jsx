import React from "react"
import { Link } from "react-router-dom"


export const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, date, video } }) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className='content flex'>
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating-flex">
              
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              
              <label>{rating}(IMDB)</label>
              <span>{date}</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className="cast">
              <h4>Elenco - <span></span>{starring}</h4>
              <h4>Gênero - <span></span>{genres}</h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i> PLAY
            </button>
          </div>
          <div className="playButton row">
            <Link to={`/singlepage/${id}`}>
              <button className="btn-watch">
                <div className="img">
                  <img src="./images/play-button.png" alt="" />
                  <img src="./images/play.png" alt="" className="change" />
                </div>
                TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
