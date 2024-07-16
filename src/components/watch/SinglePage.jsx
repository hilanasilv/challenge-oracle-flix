import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  const [rec, setRec] = useState(recommended);

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1>
            </div>
            <div className='container'>
              <div className='videoContainer'>
                <iframe
                  width='560'
                  height='315'
                  src="https://www.youtube.com/embed/DTjlurdbNnw?si=KToDN5ywXBWLVByW"
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
          
        </>
      ) : (
        "no"
      )}
    </>
  );
};

export default SinglePage;
