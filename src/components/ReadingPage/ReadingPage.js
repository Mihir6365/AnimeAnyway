import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import "./DarkMode.css";
import { ReactComponent as Moon } from "./Moon.svg";
import { ReactComponent as Sun } from "./Sun.svg";
import Header from "../ChannelHeader/Header.js";

export  const ReadingPage = ()=>{
  const search = useLocation().search;
  const volume = new URLSearchParams(search).get("volume");
  const chapter = new URLSearchParams(search).get("chapter");
  let name=translatedVolume[volume].name;
  const [fileContent, setFileContent] = useState('');
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    fetchFileContent();
    fetchImageURLs();
  }, []);
  const fetchImageURLs = () => {
    const images = document.getElementsByTagName('img');
    const urls = Array.from(images, (image) => image.src);
    setImageURLs(urls);
  };

  const fetchFileContent = async () => {
    try {
      const response = await axios.get(`../../assets/${name}/${chapter}.html`);
      setFileContent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

   return (
    <>
    <Header />
    <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </>
  );
}
 