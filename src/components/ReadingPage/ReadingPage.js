import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import Header from "../ChannelHeader/Header.js";

export const ReadingPage = () => {
  const search = useLocation().search;
  const volume = new URLSearchParams(search).get("volume");
  var chapter = new URLSearchParams(search).get("chapter");
  const chapterList = translatedVolume[volume].chapter;
  const [fileContent, setFileContent] = useState('<br/><br/><br/><br/><br/><br/><br/><div style="text-align:center"> Loading...<div><br/><br/><br/><br/><br/><br/><br/><br/>');
  const [prevIndex, setPrevIndex] = useState(getIndex(chapter) - 1)
  const [nextIndex, setNextIndex] = useState(getIndex(chapter) + 1)
  const [currIndex, setCurrIndex] = useState(getIndex(chapter))

  let volumeIndex = translatedVolume[volume].name;

  useEffect(() => {
    setPrevIndex(getIndex(chapter) - 1)
    setNextIndex(getIndex(chapter) + 1)
    setCurrIndex(getIndex(chapter))
    fetchFileContent();
    window.scrollTo(0, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter])

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
    return chapterList[index].name
  }

  const fetchFileContent = async () => {
    try {
      const response = await axios.get(`../../assets/${volumeIndex}/${chapter}.html`);
      setFileContent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: fileContent }} style={{ userSelect: "none" }} />
      <div className="chapNav">
        {currIndex == 0 ? (
          <>
            <div className="prevChap disable" >Previous</div>
          </>
        ) : (
          <>
            <Link
              to={`/read?volume=${volume}&chapter=${getChapterName(prevIndex)}`}
            >
              <div className="prevChap" onClick={() => { getChapterName(prevIndex) }}>Previous</div>
            </Link>
          </>
        )}

        {/* eslint-disable-next-line */}
        {currIndex == (chapterList.length - 1) ? (
          <>
            <div className="nextChap disable" >Next</div>
          </>
        ) : (
          <>
            <Link
              to={`/read?volume=${volume}&chapter=${getChapterName(nextIndex)}`}
            >
              <div className="nextChap" onClick={() => { getChapterName(nextIndex) }}>Next</div>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
