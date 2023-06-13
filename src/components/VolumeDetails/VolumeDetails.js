import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import { Link } from "react-router-dom";
import "./VolumeDetailsStyles.css";

export const VolumeDetails = () => {
  const [chapters, setChapters] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [volumeName, setVolumeName] = useState();
  const [chapterName, setChapterName] = useState([]);
  const [prevVolumeIndex, setPrevVolumeIndex] = useState();
  const [nextVolumeIndex, setNextVolumeIndex] = useState();
  const [volumeImg, setVolumeImg] = useState();
  const [status, setStatus] = useState();
  const [color, setcolor] = useState();
  const [synopsis, setsynopsis] = useState();

  var volume_index;
  const volumeIndexList = [];
  const leastVolumeIndex = 0;
  const maxVolumeIndex = translatedVolume.length - 1;
  // const prevVolumeIndex = volume_index-1;
  // const nextVolumeIndex = volume_index+1;
  let currVolumeIndex = volume_index;
  const search = useLocation().search;
  const loc = useLocation();
  const { path } = loc.state;
  let { index } = loc.state;
  // console.log(path ,index)
  volume_index = new URLSearchParams(search).get("volume");
  // console.log(translatedVolume)
  // console.log(path)

  useEffect(() => {
    setChapters(translatedVolume[volume_index].chapter);
    setChapterName(translatedVolume[volume_index].chapter[0].name);
    setTotalPage(translatedVolume[volume_index].totalPage);
    setVolumeName(translatedVolume[volume_index].namehtml);
    setVolumeImg(translatedVolume[volume_index].image);
    setStatus(translatedVolume[volume_index].status);
    setsynopsis(translatedVolume[volume_index].synopsis);
    setPrevVolumeIndex(new URLSearchParams(search).get("volume") - 1);
    setNextVolumeIndex(parseInt(new URLSearchParams(search).get("volume")) + 1);
    window.scrollTo(0, 0);
    console.log(translatedVolume[volume_index]);
    if (status == "Completed") {
      setcolor("rgb(7, 243, 7)");
    } else {
      setcolor("blue");
    }
  }, [volume_index]);

  return (
    <>
      {console.log(volumeImg)}
      <div className="mainHeaderCont">
        <img
          className="volumeImg"
          src={process.env.PUBLIC_URL + volumeImg}
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
        {volume_index == leastVolumeIndex ? (
          <>
            <div className="prevVol disable">Previous</div>
          </>
        ) : (
          <>
            <Link
              to={`/details?volume=${prevVolumeIndex}`}
              state={{ path: path, index: prevVolumeIndex }}
            >
              <div className="prevVol">Previous</div>
            </Link>
          </>
        )}
        {/* <div className="prevVol">
                    Previous
                </div> */}
        {/* <div className="index">
                    Index
                </div> */}
        <Link
          to={`/read?volume=${index}&chapter=${"Index"}`}
          state={{ path: path }}
        >
          <div className="index">Index</div>
        </Link>
        {/* <div className="nextVol">
                    Next
                </div> */}
        {volume_index == maxVolumeIndex ? (
          <>
            <div className="nextVol disable">Next</div>
          </>
        ) : (
          <>
            <Link
              to={`/details?volume=${nextVolumeIndex}`}
              state={{ path: path, index: nextVolumeIndex }}
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
                to={`/read?volume=${index}&chapter=${e.name}`}
                state={{ path: path }}
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
