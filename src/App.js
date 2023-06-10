// import logo from './logo.svg';
import { BrowserRouter, Route, Routes ,Router} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee';
import Header from './components/ChannelHeader/Header.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';
import ReadingPage from './components/ReadingPage/ReadingPage';
import { VolumeDetails } from './components/VolumeDetails/VolumeDetails';



function App() {

  // window.location.reload()
  const [showList,setShowList] = useState(true)
  const [reloadState,setReloadState] = useState()
  console.log(window.location.pathname)


  

  const handleChildStateChange = (newValue) => {
    console.log(newValue)
    setShowList(newValue);
  };

  useEffect(()=>{
    handleChildStateChange(true)
  },[])
 
  // useEffect(()=>{
  //   window.location.pathname == '/'?window.location.reload():console.log('');
  // },[showList])

  return (
    <>
      <BrowserRouter>
      {
        showList?<Header />:''
      }
        
        <Routes forceRefresh={true}>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<ReadingPage />} />
          <Route path="/details" element={<VolumeDetails onChange={handleChildStateChange} value={showList}/>}/>
        </Routes>
        <BuyMeCoffee />
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
