import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import { Link } from "react-router-dom";
import '../VolumeCard/VolumeCardStyle.css';


export default function VolumeCard({ card, index }) {
  return (
    <>
      <div className="center">
        <div className="property-card">
          <div
            className="property-image"
            style={{
              backgroundImage: `url(${card.e.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >

            <div className="property-image-title">
            </div>
          </div>
          <div className="property-description">
            <h5> {card.e.name} </h5>
          </div>
          <div className="property-social-icons">


            <div className="read-button">
              <Link
                to={`/details?volume=${index}`}
                state={{ path: card.e.path, index: index }}
                className="downloadbutton"
              >
                <ArrowForwardIosIcon className="nextPageBtn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
