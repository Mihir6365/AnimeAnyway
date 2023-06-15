import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import { Link } from "react-router-dom";
import "./VolumeDetailsStyles.css";

export const VolumeDetails = () => {
  const [chapters, setChapters] = useState([]);
  const [volumeName, setVolumeName] = useState();
  const [prevVolumeIndex, setPrevVolumeIndex] = useState();
  const [nextVolumeIndex, setNextVolumeIndex] = useState();
  const [volumeImg, setVolumeImg] = useState();
  const [status, setStatus] = useState();
  const [color, setcolor] = useState();
  const [synopsis, setsynopsis] = useState();
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
    console.log(translatedVolume[volume_index]);
    if (status === "Completed") {
      setcolor("rgb(7, 243, 7)");
    } else {
      setcolor("blue");
    }
    // eslint-disable-next-line
  }, [volume_index, status]);

  return (
    <>

      <div className="mainHeaderCont">
        <img
          className="volumeImg"
          src={process.env.PUBLIC_URL + volumeImg}
          alt={volumeName + " cover"}
        ></img>
        <div
          dangerouslySetInnerHTML={{ __html: volumeName }}
          className="volumeTitle"
        ></div>
        <div className="curStatus">
          <div
            style={{ "background-color": color }}
            className="statusDot"
          ></div>
          <div className="statusTitle">{status}</div>
        </div>
      </div>

      <div className="synCont">
        <div
          className="synopsis"
          dangerouslySetInnerHTML={{ __html: synopsis }}

        ></div>
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

        <Link
          to={`/read?volume=${volume_index}&chapter=${"Index"}`}
        >
          <div className="index">Index</div>
        </Link>
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
        {chapters.map((e) => {
          return (
            <>
              <Link
                to={`/read?volume=${volume_index}&chapter=${e.name}`}
              >
                <div className="chapCard">
                  <div className="chapTitle">{e.name}</div>
                  <div className="transType">AnimeAnyway Fan translation</div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
