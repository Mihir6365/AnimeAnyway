import React from "react";
import banner from './channels4_banner(1).webp';
import './FooterStyle.css'

export default function Footer() {
  return (
    <>
      <div className="ChannelFooter">
        <div className="footerInfo">
          <div className="channel-info">
            <h4>Anime Anyway</h4>
            <h4>Channel for all Classroom of the elite novel translations</h4>
          </div>
          <div className="creator-info">
            <div className="channel-link">
              <p>Follow Us</p>
              <a
                href="https://www.instagram.com/anime_anyway_/?igshid=1ch5mp9tspotz"
                target="_blank"
                rel="noreferrer"
              >
                <div className="links">
                  <p>Instagram</p>
                  <img src="./icons8-instagram.svg" style={{ width: "30px", height: "30px" }} />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@ANIMEANYWAY/about"
                target="_blank"
                rel="noreferrer"
              >
                <div className="links">
                  <p>Youtube</p>
                  <img src="./icons8-youtube.svg" style={{ height: "38px", width: "38px" }} />
                </div>
              </a>
              <a href="https://t.me/animeanyway" target="_blank" rel="noreferrer">
                <div className="links">
                  <p>Telegram</p>
                  <img src="./icons8-telegram.svg" style={{ height: "28px", width: "28px", "paddingTop": "3px" }} />
                </div>
              </a>
            </div>
            {/* <div
              className="developer-link"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p
                style={{
                  fontSize: "40px",
                  marginTop: "27px",
                  fontWeight: "500",
                }}
              >
                Evoliq
              </p>
              <p style={{ fontSize: "20px", marginTop: "-35px" }}>
                Developer Contact
              </p>
              <a
                href="https://www.instagram.com/_evoliq_/?next=%2F"
                target="_blank"
                rel="noreferrer"
              >
                <div className="developer-insta-links">
                  <h4>_evoliq_</h4>
                  <img src="./icons8-instagram.svg" style={{ marginTop: "-28px", height: "75px", width: "30px" }} />
                </div>
              </a>
            </div> */}
          </div>
        </div>
        <img src={banner} style={{ height: "48%", width: "100%" }} />
      </div>
    </>
  );
}