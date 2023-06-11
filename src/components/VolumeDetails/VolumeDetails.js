import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { translatedVolume } from "../../constants/volumeObj.js";
import { Link } from "react-router-dom";
import "./VolumeDetailsStyles.css"

export const VolumeDetails = ({ onChange, value }) => {

    const [chapters, setChapters] = useState([])
    const [totalPage, setTotalPage] = useState([])
    const [volumeName, setVolumeName] = useState()
    const [chapterName, setChapterName] = useState([])
    const [prevVolumeIndex,setPrevVolumeIndex] = useState()
    const [nextVolumeIndex,setNextVolumeIndex] = useState()
    
    // function getVolumeIndex(){
    //     translatedVolume.map(e => {
    //         volumeIndexList.push(count)
    //         console.log(count)
    //         console.log(volumeIndexList[count])
    //         count++
    //     })
    // }
    
    var volume_index , theme = "light";
    const volumeIndexList = []
    const leastVolumeIndex = 0
    const maxVolumeIndex = translatedVolume.length-1
    // const prevVolumeIndex = volume_index-1;
    // const nextVolumeIndex = volume_index+1;
    let currVolumeIndex = volume_index
    const search = useLocation().search;
    const loc = useLocation()
    const { path } = loc.state
    let { index } = loc.state
    // console.log(path ,index)
    volume_index = new URLSearchParams(search).get("volume");
    console.log(translatedVolume)
    // console.log(path)
    useEffect(() => {
        onChange(false)
        // getVolumeIndex()
    }, []) 

    useEffect(() => {
        console.log(translatedVolume[volume_index])
        console.log(volume_index)
        console.log(index)
        console.log(prevVolumeIndex)
        console.log(nextVolumeIndex)
        setChapters(translatedVolume[volume_index].chapter);
        setChapterName(translatedVolume[volume_index].chapter[0].name);
        setTotalPage(translatedVolume[volume_index].totalPage);
        setVolumeName(translatedVolume[volume_index].name)
        setPrevVolumeIndex((new URLSearchParams(search).get("volume"))-1)
        setNextVolumeIndex(parseInt(new URLSearchParams(search).get("volume"))+1)
        window.scrollTo(0, 0);
        console.log(translatedVolume[volume_index])
    }, [volume_index])

    return (
        <>
            <div className="mainHeaderCont">
                <div className="volumeImg" styles={{
                    background: "url('../VolumeDetails/pic01.jpg')",
                    backgroundSize: "cover"
                }}>
                </div>
                <div className="volumeTitle">
                    {/* Cote Year 2 volume 9.5 */}
                    {volumeName}
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

            <div className="volumeNav ">
                {
                    volume_index == leastVolumeIndex ? <>
                        <div className="prevVol disable">
                            Previous
                        </div>
                    </> : <>
                        <Link 
                            to={`/details?volume=${(prevVolumeIndex)}`}
                            state={{ path: path , index:(prevVolumeIndex)}}
                        >
                            <div className="prevVol">
                                Previous
                            </div>
                        </Link>
                    </>
                }
                {/* <div className="prevVol">
                    Previous
                </div> */}
                <div className="index">
                    Index
                </div>
                {/* <div className="nextVol">
                    Next
                </div> */}
                {
                    volume_index == maxVolumeIndex ? <>
                        <div className="nextVol disable">
                            Next
                        </div>
                    </> : <>
                        <Link
                            to={`/details?volume=${(nextVolumeIndex)}`}
                            state={{ path: path , index:(nextVolumeIndex)}}
                        >
                            <div className="nextVol">
                                Next
                            </div>
                        </Link>
                    </>
                }
            </div>

            <div className="chapterOpt">
                {
                    chapters.map(e => {
                        return <>
                            <Link
                                to={`/read?volume=${index}&chapter=${e.name}&theme=light`}
                                state={{ path: path }}
                            >
                                <div className="chapCard">
                                    <h2 className='chapTitle'>
                                        {e.name}
                                    </h2>
                                    <h2 className='transType'>
                                        AnimeAnyway Fan translation
                                    </h2>
                                </div>
                            </Link>
                        </>
                    })
                }


            </div>
        </>
    )
} 
