import React from "react";
import { useEffect } from "react";
import { translatedVolume, volumeData } from '../../constants/volumeObj.js';
import VolumeCard from "../VolumeCard/VolumeCard.js";
import Header from "../ChannelHeader/Header.js";
import './ContentStyle.css';

export default function Content() {
  const transVolumes = translatedVolume.slice(0).reverse();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div className="main-container">
        <h3 className="headerName">
          Anime Anyway Translations
        </h3>
        <div className="volume-container">
          <div className="card-container">
            {transVolumes.map((e) => {
              return (
                <React.Fragment key={e.volumeNumber}>
                  <VolumeCard
                    card={{ e }}
                    index={translatedVolume.indexOf(e)}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="info-container">
            <strong>
              Year 2 Volume 9 is is translated completely.
              <br /><br />
              Year 2 Volume 9.5 trial version translation will be out on june 16th.
              <br /><br />
              <a href="https://www.youtube.com/@ANIMEANYWAY" target="_blank" rel="noreferrer">Subscribe to my youtube channel to stay updated to the latest Classroom of the Elite news.</a>

            </strong>
          </div>
        </div>
        <a href="https://www.youtube.com/watch?v=CAkMA_DsT-I&list=PLgFd4QA43aqVIIrukJI6fqJNOv2g0k48N&index=2" target="_blank" >
          <div className="accord-container">
            <img src="./back-arrow.svg" id="backimg" alt="back" />
            <div className="accordion">
              Previous Classroom of the Elite Volumes
            </div>
          </div>
        </a>

      </div>
    </>
  );
}