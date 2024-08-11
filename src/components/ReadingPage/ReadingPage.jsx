import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import Header from "../ChannelHeader/Header.js";
import { Helmet } from "react-helmet";
import BuyMeCoffee from "../BuyMeCoffee/BuyMeCoffee.js";
import Ad from "../Ads/Ad.jsx";
import Ad2 from "../Ads/Ad2.jsx";

export const ReadingPage = () => {
  const search = useLocation().search;
  const volume = new URLSearchParams(search).get("volume");
  var chapter = new URLSearchParams(search).get("chapter");
  const chapterList = translatedVolume[volume].chapter;
  const [fileContent, setFileContent] = useState("Loading...");
  const [prevIndex, setPrevIndex] = useState(getIndex(chapter) - 1);
  const [nextIndex, setNextIndex] = useState(getIndex(chapter) + 1);
  const [currIndex, setCurrIndex] = useState(getIndex(chapter));
  let volumeIndex = translatedVolume[volume].name;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    document.getElementById("bookmark_read").style.display = "none";
    setPrevIndex(getIndex(chapter) - 1);
    setNextIndex(getIndex(chapter) + 1);
    setCurrIndex(getIndex(chapter));
    window.scrollTo(0, 0);
    setIsOpen(false);
    setIsOpen2(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter]);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7107200228987000";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await fetchFileContent();
      setTimeout(() => {
        document.getElementById("bookmark_read").style.display = "block";
        if (
          localStorage.getItem("volume") == volume &&
          localStorage.getItem("index") == currIndex
        )
          window.scrollTo(0, localStorage.getItem("y"));
      }, 300);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currIndex]);

  function getIndex(chapterName) {
    let count = 0;
    for (let i = 0; i < chapterList.length; i++) {
      if (chapterList[i].name == chapterName) {
        break;
      }
      count++;
    }
    return count;
  }
  function getChapterName(index) {
    return chapterList[index].name;
  }

  const save = () => {
    localStorage.setItem("volume", volume);
    localStorage.setItem("index", currIndex);
    localStorage.setItem("y", window.scrollY);
    const infoDiv = document.getElementById("info");
    infoDiv.style.opacity = "1";
    setTimeout(() => {
      infoDiv.style.transition = "opacity 2s, transform 2s";
      infoDiv.style.opacity = 0;
      infoDiv.style.transform = "translateY(-30px)";
    }, 200);
    setTimeout(() => {
      infoDiv.style.transform = "translateY(0)";
      infoDiv.style.transition = "none";
    }, 2200);
  };

  const fetchFileContent = async () => {
    if (translatedVolume[volume].chapter[currIndex].parts === undefined) {
      try {
        const response = await axios.get(
          `../../assets/${volumeIndex}/${chapter}.html`
        );
        const component = (
          <div className="read-content">
            {window.innerWidth > 1260 ? (
              <>
                <Ad2 />
                <div className="main-part" >
                  <div
                    dangerouslySetInnerHTML={{ __html: response.data }}
                    style={{ userSelect: "none" }}
                  />
                </div>
                <Ad2 />
              </>
            ) : (
              <div className="main-part">
                <div
                  dangerouslySetInnerHTML={{ __html: response.data }}
                  style={{ userSelect: "none" }}
                />
              </div>
            )}
          </div>
        );
        setFileContent(component);
      } catch (error) {
        setFileContent("Error loading file, please refresh the page");
      }
    } else {
      try {
        let arr = [];
        for (
          let i = 0;
          i <= translatedVolume[volume].chapter[currIndex].parts;
          i++
        ) {
          const response = await axios.get(
            `../../assets/${volumeIndex}/${chapter + "_" + i}.html`
          );
          const component = (
            <div className="read-content" key={i}>
              {window.innerWidth > 1260 ? (
                <>
                  <Ad2 />
                  <div className="main-part">
                    <div
                      dangerouslySetInnerHTML={{ __html: response.data }}
                      style={{ userSelect: "none" }}
                    />
                    <div className="ad1">
                      <Ad />
                    </div>
                  </div>
                  <Ad2 />
                </>
              ) : (
                <div className="main-part">
                  <div
                    dangerouslySetInnerHTML={{ __html: response.data }}
                    style={{ userSelect: "none" }}
                  />
                  <div className="ad1">
                    <Ad />
                  </div>
                </div>
              )}
            </div>
          );
          arr.push(component);
        }

        setFileContent(arr);
      } catch (error) {
        setFileContent("Error loading file");
      }
    }
  };
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleOpen2 = () => setIsOpen2(!isOpen2);

  return (
    <>
      <Helmet>
        <title>
          {volumeIndex} | {chapter}
        </title>
      </Helmet>
      <Header />
      <br />
      <br />
      <br />
      <div className="dropdown">
        <button onClick={toggleOpen} className="dropbtn">
          Select a chapter
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {chapterList.map((chapter) => (
              <Link
                to={`/read?volume=${volume}&chapter=${chapter.name}`}
                className="options"
                key={chapter.name}
              >
                {chapter.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      {fileContent}
      <div id="info">
        Bookmarked <br /> successfully
      </div>
      <button id="bookmark_read" key="10000" onClick={() => save()}>
        <img src="./icons8-bookmark.svg" alt="bookmark" />
      </button>
      <div className="chapNav">
        {currIndex == 0 ? (
          <>
            <div className="prevChap disable">Previous</div>
          </>
        ) : (
          <>
            <Link
              to={`/read?volume=${volume}&chapter=${getChapterName(prevIndex)}`}
            >
              <div className="prevChap">Previous</div>
            </Link>
          </>
        )}

        {currIndex == chapterList.length - 1 ? (
          <>
            <div className="nextChap disable">Next</div>
          </>
        ) : (
          <>
            <Link
              to={`/read?volume=${volume}&chapter=${getChapterName(nextIndex)}`}
            >
              <div className="nextChap">Next</div>
            </Link>
          </>
        )}
      </div>
      <br />
      <br />
      <div className="dropdown">
        <button onClick={toggleOpen2} className="dropbtn">
          Select a chapter
        </button>
        {isOpen2 && (
          <div className="dropdown-content">
            {chapterList.map((chapter) => (
              <Link
                to={`/read?volume=${volume}&chapter=${chapter.name}`}
                className="options"
                key={chapter.name}
              >
                {chapter.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <BuyMeCoffee />
    </>
  );
};
