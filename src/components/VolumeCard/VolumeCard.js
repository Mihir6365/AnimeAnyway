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
          <Link
            to={`/details?volume=${index}`}
            className="downloadbutton"
          >
            <div className="property-description">
              <h2> {card.e.name} </h2>
              {/* {localStorage.getItem("index") == index ? (
                <div className="bookmark">
                  <img src="./icons8-bookmark.svg" alt="bookmark" />
                </div>
              ) : (<></>)} */}
            </div>
            <div className="property-social-icons">
              <div className="read-button">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXElEQVR4nO3VOwqAQAxAQT/nFmwVtLbTzmOOLG5rIZJGMgfIg7CfpklfYMCMLiqwuO0hEbTYauREn5FHcl1voKtHt5ijA1PE8CPkAsrh/1pLgTX6uR5rJObDScUF85ca+b4WJLoAAAAASUVORK5CYII=" alt="Read" style={{ height: "24px", width: "24px" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
