import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NorthIcon from '@mui/icons-material/North';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import "./DarkMode.css";
import { ReactComponent as Moon } from "./Moon.svg";
import { ReactComponent as Sun } from "./Sun.svg";
import Header from "../ChannelHeader/Header.js";

export  const ReadingPage = ()=>{
  const search = useLocation().search;
  var zoomIndex = 1.8
  // eslint-disable-next-line no-restricted-globals
  const screenWidth = screen.availWidth
  const newWidth = (screenWidth * 0.001875) - 0.125
  // eslint-disable-next-line no-restricted-globals 
  screenWidth >= 1024 ? console.log("width = 1024") : zoomIndex = newWidth
  var volume_index = 0, theme = "light";
  volume_index = new URLSearchParams(search).get("volume");
  console.log(volume_index)
  theme = new URLSearchParams(search).get("theme");

  const [pageNumber, setPageNumber] = useState(0);
  const [chapters, setChapters] = useState([])
  const [totalPage, setTotalPage] = useState()
  const [chapterName, setChapterName] = useState("")
  const [currentTheme, setCurrentTheme] = React.useState(theme);
  const [pdfTheme, setpdfTheme] = React.useState(theme);
  const [name, setname] = useState('')
  const [folderName,setFolderName] = useState('')
  const themeContext = { currentTheme, setCurrentTheme };
  const [htmlData,setHtmlData] = useState()

  const link = "../../assets/html/Year 2 Volume 9/Chapter 1/index.html"

  // Displaying html 
  

  function getHtml(folderName,chapterName){
    fetch(`../../assets/html/${folderName}/${chapterName}/index.html`).then(e=>{
      console.log(e.url)
      getHtmlData(e.url)
    })
  }

  async function getHtmlData(url){ 
    await axios.get(url).then(e=>{console.log(e.data)
    setHtmlData(e.data)})
  }

  //

  function changeChap(chapterName){
    console.log("folderName",folderName)
    getHtml(folderName,chapterName)
  }

  useEffect(()=>{
    console.log(new URLSearchParams(search).get("chapter"))
    getHtml(translatedVolume[new URLSearchParams(search).get("volume")].folderName,new URLSearchParams(search).get("chapter"))
    // onChange(true)
  },[])

  useEffect(() => {
    setChapters(translatedVolume[volume_index].chapter);
    setFolderName(translatedVolume[volume_index].folderName)
    setChapterName(translatedVolume[volume_index].chapter[0].name);
    setTotalPage(translatedVolume[volume_index].totalPage);
    setPageNumber(translatedVolume[volume_index].chapter[0].pageNo);
    setname(translatedVolume[volume_index].name)
    window.scrollTo(0, 0);
  }, [volume_index])

  // const darkPath = translatedVolume[volume_index].darkPath;
  const lightPath = translatedVolume[volume_index].path;

  let path
  pdfTheme === "light" ? path = lightPath : path = lightPath

  useEffect(() => {
    if (pdfTheme === "dark") {
      document.getElementById('darkmode-toggle').checked = true;
    } else {
      document.getElementById('darkmode-toggle').checked = false;
    }
  }, [pdfTheme])
  const changePDF = () => {
    if (pdfTheme === "light") { setpdfTheme("dark") }
    else { setpdfTheme("light") }
    if (document.getElementById('currpage') != null) {
      setPageNumber(document.getElementById('currpage').innerText)
    }
  }

  return (
    <>
    <Header />
    <div className="maindiv">
      <h1 className="heading">Classroom Of The Elite {name}</h1>
      <div className="reading-container">
        <div className="label-tab">
          <div className='dark_mode_2'>
            <input
              className='dark_mode_input'
              type='checkbox'
              id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
              <Sun />
              <Moon />
            </label>
          </div>
          <div className="theme-btn" onClick={() => {
            changePDF()
          }}>
          </div>

          <div
            className="fullscreeen-btn"
          >
          </div>
          <div
            className="pageInput"
          >
            
          </div>

          <div
            className="chapter-option"
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{chapterName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {chapters.map((e) => {
                  return (
                    <React.Fragment key={e.pageNo}>
                      <h2
                        className="chapter-container"
                        onClick={() => {
                          setPageNumber(e.pageNo);
                          setChapterName(e.name);
                          changeChap(e.name)
                          // jumpToPage(e.pageNo);
                        }}
                      >
                        {e.name}
                      </h2>
                    </React.Fragment>
                  ); 
                })}
              </AccordionDetails> 
            </Accordion> 
          </div>  
        </div>  
  
        {/* <div className="pdfMainCont"> */} 
          <div className="pdf-viewer-container" id="renderHtml" dangerouslySetInnerHTML={{ __html: htmlData }}>
          </div>
        {/* </div> */}
      </div>
    </div> 
    </>
  );
}
