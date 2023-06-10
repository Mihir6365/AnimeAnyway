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
                    <p>"As I thought, I guess that means Ichinose-san has given up on getting to Class A?"</p>

                    <p>December, after the end of the School Trip. The final Special Test of the second semester, the Cooperative Written
                        Test is announced.</p>

                    <p>In this test, everyone takes turns at answering the questions of the test, with the class as a whole answering a
                        hundred questions. Horikita's Class B will face Sakayanagi's Class A.</p>

                    <p>While they are preparing for the test, Nagumo announces that he will decide on the next Student Council President.
                        The student council members from the second year are Horikita and Ichinose. Even though people were asking her to
                        run for it, Ichinose's own desire was to quit the student council altogether.</p>

                    <p>And separate from the problem of finding members for the new student council, with Kiryūin targeted by a bogus
                        shoplifting scandal, even the people around the Student Council find themselves busier and busier.</p>

                    <p>"I'm not forcing myself! ……I want to meet Ayanokōji-kun, too……"</p>

                    <p>This school's book of revelations is headed for a new chaos——</p>
                </div>
            </div>

            <div className="volumeNav">
                <div className="prevVol">
                    Previous
                </div>
                <div className="index">
                    Index
                </div>
                <div className="nextVol">
                    Next
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
