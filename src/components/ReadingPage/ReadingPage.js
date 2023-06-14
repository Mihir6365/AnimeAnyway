import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import Header from "../ChannelHeader/Header.js";


export const ReadingPage = () => {
  const search = useLocation().search;
  const volume = new URLSearchParams(search).get("volume");
  const chapter = new URLSearchParams(search).get("chapter");
  let name = translatedVolume[volume].name;
  const [fileContent, setFileContent] = useState('<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>');

  useEffect(() => {
    fetchFileContent();
  }, []);


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
      <div dangerouslySetInnerHTML={{ __html: fileContent }} style={{ userSelect: "none" }} />
    </>
  );
}
