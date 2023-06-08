import React from 'react'
import "./VolumeDetailsStyles.css"

export const VolumeDetails = () => {

  return (
    <>
        <div className="mainHeaderCont">
            <div className="volumeImg" styles={{
                background: "url('../VolumeDetails/pic01.jpg')",
                backgroundSize: "cover"
            }}>
            </div>
            <div className="volumeTitle">
                Cote Year 2 volume 9.5
            </div>
            <div className="curStatus">
                <div className="statusDot"> 
                </div>
                <h2>Ongoing</h2>
            </div>
        </div>

        <div className="synCont">
            <div className="synopsis">
                synopsis
            </div>
        </div>

        <div className="volumeNav">
            <div className="prevVol">
                Previous Volume
            </div>
            <div className="index">
                Index
            </div>
            <div className="nextVol">
                Next Volume
            </div>
        </div>

        <div className="chapterOpt">

        </div>
    </>
  ) 
} 
