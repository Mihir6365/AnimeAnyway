import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './HeaderStyle.css';

export default function Header() {

  const search = useLocation().search;
  let header = new URLSearchParams(search).get("header");


  const [headerClassName,setHeaderClassName] = useState('channelHeader')

  // window.location.reload()
  // const url =window.location.pathname
  // console.log(url)
  const newStyles ={
    display: "none"
  }

  useEffect(()=>{
    header === false? setHeaderClassName('newStyles'):setHeaderClassName('channelHeader');
  },[])

  // let headerClassName = true
  // header == false? headerClassName = 'newStyles':headerClassName='channelHeader';

  return (
    <>
    {console.log(headerClassName)}
      <Link to="/"
      className={headerClassName}
      // className={url=="/details"?"newStyles":"channelHeader"}
        // className="channelHeader"
        style={{
          backgroundSize: "cover"
        }}
      >
        <div className="channelName">
          <h1>
            Classroom Of The Elite Fan Translations
          </h1>
        </div>
        <div className="homebtn"><img src="https://img.icons8.com/material-sharp/24/null/home-page.png" alt="homebtn" /></div>
      </Link>
      <br />
      <br />
      <br />
    </>
  );
} 