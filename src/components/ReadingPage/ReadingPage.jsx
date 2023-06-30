import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import Header from "../ChannelHeader/Header.js";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer.js";
import BuyMeCoffee from "../BuyMeCoffee/BuyMeCoffee.js";
import Ad from "../Ads/Ad.jsx";
import Ad2 from "../Ads/Ad2.jsx";

export const ReadingPage = () => {
  const search = useLocation().search;
  const volume = new URLSearchParams(search).get("volume");
  var chapter = new URLSearchParams(search).get("chapter");
  const chapterList = translatedVolume[volume].chapter;
  const [fileContent, setFileContent] = useState(
    'Loading...'
  );
  const [prevIndex, setPrevIndex] = useState(getIndex(chapter) - 1);
  const [nextIndex, setNextIndex] = useState(getIndex(chapter) + 1);
  const [currIndex, setCurrIndex] = useState(getIndex(chapter));
  let volumeIndex = translatedVolume[volume].name;
  useEffect(() => {
    setPrevIndex(getIndex(chapter) - 1);
    setNextIndex(getIndex(chapter) + 1);
    setCurrIndex(getIndex(chapter));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter]);
  useEffect(() => {
    fetchFileContent();
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

  const fetchFileContent = async () => {
    if(translatedVolume[volume].chapter[currIndex].parts === undefined){
      try {
        const response = await axios.get(
          `../../assets/${volumeIndex}/${chapter}.html`
        );
        const component=<div
        dangerouslySetInnerHTML={{ __html: response.data }}
        style={{ userSelect: "none" }}
        />
        setFileContent(component);
      } catch (error) {
        setFileContent("Error loading file");
      }
    }else{
      try {
        let arr=[];
        for(let i = 0; i <= translatedVolume[volume].chapter[currIndex].parts; i++){
        const response = await axios.get(
          `../../assets/${volumeIndex}/${chapter+"_"+i}.html`
        );
        const component=<div key={i}>
        <div dangerouslySetInnerHTML={{ __html: response.data }} style={{ userSelect: "none" }}/>
        <Ad />
      </div>
        arr.push(component);
      }
      setFileContent(arr);
      } catch (error) {
        setFileContent("Error loading file");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {volumeIndex} | {chapter}
        </title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7107200228987000"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header />
    
          {fileContent}      

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
              <div className="prevChap">
                Previous
              </div>
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
              <div
                className="nextChap"
              >
                Next
              </div>
            </Link>
          </>
        )}
      </div>
      <BuyMeCoffee />
      <Footer />
    </>
  );
};
