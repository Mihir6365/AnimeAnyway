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
                <h2 className='statusTitle'>Ongoing</h2>
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
            <div className="chapCard">
                <h2 className='chapTitle'>
                    Prologue - Yamamura's Monologue
                </h2>
                <h2 className='transType'>
                    AnimeAnyway Fan translation
                </h2>
            </div>
            <div className="chapCard">
                <h2 className='chapTitle'>
                    Prologue - Yamamura's Monologue
                </h2>
                <h2 className='transType'>
                    AnimeAnyway Fan translation
                </h2>
            </div>
            <div className="chapCard">
                <h2 className='chapTitle'>
                    Chapter 1 
                </h2>
                <h2 className='transType'>
                    AnimeAnyway Fan translation
                </h2>
            </div>
            <div className="chapCard">
                <h2 className='chapTitle'>
                    Chapter 2
                </h2>
                <h2 className='transType'>
                    AnimeAnyway Fan translation
                </h2>
            </div>
            <div className="chapCard">
                <h2 className='chapTitle'>
                    Chapter 3
                </h2>
                <h2 className='transType'>
                    AnimeAnyway Fan translation
                </h2>
            </div>
        </div>
    </>
  ) 
} 
