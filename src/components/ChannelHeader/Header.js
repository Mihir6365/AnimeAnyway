import React, { useState } from "react";
import './HeaderStyle.css';

export default function Header() {
  const [isMobileHeaderVisible, setMobileHeaderVisible] = useState(false);

  const toggleMobileHeader = () => {
    setMobileHeaderVisible(!isMobileHeaderVisible);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="header">
        <a href="https://animeanyway.com" className="header_links">Home</a>
        <a href="/details?volume=7" className="header_links">Fan Translations</a>
        <a href="https://www.youtube.com/c/ANIMEANYWAY" className="header_links" target="_blank">YouTube</a>
        <a href="https://www.instagram.com/anime_anyway_/" target="_blank" className="header_links">Instagram</a>
        <a href="https://t.me/animeanyway" target="_blank" className="header_links">Telegram</a>
        <div className="dropdown">
          <img
            src={isMobileHeaderVisible ? "/black-cross.png" : "./black-hamburger.png"}
            alt="options"
            className="Hamburger"
            onClick={toggleMobileHeader}
          />
        </div>
      </div>

      <div
        className="mobile_header"
        style={{ display: isMobileHeaderVisible ? 'flex' : 'none' }}
      >
        <a href="https://animeanyway.com" className="header_links_mobile">Home</a>
        <a href="/details?volume=7" className="header_links_mobile">Fan Translations</a>
        <a href="https://www.youtube.com/c/ANIMEANYWAY" className="header_links_mobile" target="_blank">YouTube</a>
        <a href="https://www.instagram.com/anime_anyway_/" target="_blank" className="header_links_mobile">Instagram</a>
        <a href="https://t.me/animeanyway" target="_blank" className="header_links_mobile">Telegram</a>
      </div>
    </>
  );
}