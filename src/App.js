// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';
import { ReadingPage } from './components/ReadingPage/ReadingPage';
import { VolumeDetails } from './components/VolumeDetails/VolumeDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes forceRefresh={true}>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<ReadingPage />} />
          <Route path="/details" element={<VolumeDetails />} />
        </Routes>
        <BuyMeCoffee />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
