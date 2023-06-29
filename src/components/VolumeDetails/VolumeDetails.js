import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import { Link } from "react-router-dom";
import "./VolumeDetailsStyles.css";
import { Helmet } from "react-helmet";

export const VolumeDetails = () => {
  const [chapters, setChapters] = useState([]);
  const [volumeName, setVolumeName] = useState();
  const [prevVolumeIndex, setPrevVolumeIndex] = useState();
  const [nextVolumeIndex, setNextVolumeIndex] = useState();
  const [volumeImg, setVolumeImg] = useState();
  const [status, setStatus] = useState();
  const [color, setcolor] = useState();
  const [synopsis, setsynopsis] = useState();
  const [expanded, setExpanded] = useState(false);
  var volume_index;
  const leastVolumeIndex = 0;
  const maxVolumeIndex = translatedVolume.length - 1;
  const search = useLocation().search;
  volume_index = new URLSearchParams(search).get("volume");


  useEffect(() => {
    setChapters(translatedVolume[volume_index].chapter);
    setVolumeName(translatedVolume[volume_index].namehtml);
    setVolumeImg(translatedVolume[volume_index].image);
    setStatus(translatedVolume[volume_index].status);
    setsynopsis(translatedVolume[volume_index].synopsis);
    setPrevVolumeIndex(new URLSearchParams(search).get("volume") - 1);
    setNextVolumeIndex(parseInt(new URLSearchParams(search).get("volume")) + 1);
    window.scrollTo(0, 0);
    if (status === "Completed") {
      setcolor("rgb(7, 243, 7)");
    } else if (status === "Upcoming") {
      setcolor("red");
    } else {
      setcolor("blue");
    }
    console.log(window.history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume_index, status]);

  function expand() {
    if (!expanded) {
      document.getElementById("expand").style.animationName = "expand-div";
      document.getElementById("read-btn").innerText = "Show Less";
      setExpanded(true);
    } else {
      document.getElementById("expand").style.animationName = "contract-div";
      document.getElementById("read-btn").innerText = "Show More";
      setExpanded(false);
    }
  }

  return (
    <div className="infinity">
      <Helmet>
        <title>COTE {translatedVolume[volume_index].name}</title>
      </Helmet>
      <div className="mainHeaderCont">
        <img
          className="volumeImg"
          src={process.env.PUBLIC_URL + volumeImg}
          alt={volumeName + " cover"}
        ></img>
        <h1
          dangerouslySetInnerHTML={{ __html: volumeName }}
          className="volumeTitle"
        ></h1>
        <div className="curStatus" >
          <div
            style={{ "backgroundColor": color }}
            className="statusDot"
          ></div>
          <div className="statusTitle">{status}</div>
        </div>
      </div>


      <div className="synCont">
        <div
          className="synopsis infinity"
          dangerouslySetInnerHTML={{ __html: synopsis }}
        ></div>
        <br />
        <button className="expand-btn" onClick={() => expand()}>
          <p className="read-btn" id="read-btn">
            Show More
          </p>
        </button>
      </div>

      <div className="volumeNav ">
        {/* eslint-disable-next-line */}
        {volume_index == leastVolumeIndex ? (
          <>
            <div className="prevVol disable">Previous</div>
          </>
        ) : (
          <>
            <Link
              to={`/details?volume=${prevVolumeIndex}`}
            >
              <div className="prevVol">Previous</div>
            </Link>
          </>
        )}


        {chapters.length == 0 ? (
          <>

          </>
        ) : (
          <>
            <Link
              to={`/read?volume=${volume_index}&chapter=${"Index"}`}
            >
              <div className="index">Index</div>
            </Link>
          </>
        )}
        {/* eslint-disable-next-line */}
        {volume_index == maxVolumeIndex ? (
          <>
            <div className="nextVol disable">Next</div>
          </>
        ) : (
          <>
            <Link
              to={`/details?volume=${nextVolumeIndex}`}
            >
              <div className="nextVol">Next</div>
            </Link>
          </>
        )}
      </div>

      <div className="chapterOpt">
        {chapters.map((e, index) => {
          return (
            <div key={index}>
              <Link
                to={`/read?volume=${volume_index}&chapter=${e.name}`}
              >
                <div className="chapCard">
                  <div className="chapTitle">{e.name}</div>
                  <div className="transType">AnimeAnyway <br /> Fan translation</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
