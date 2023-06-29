// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content.js';
import { ReadingPage } from './components/ReadingPage/ReadingPage';
import { VolumeDetails } from './components/VolumeDetails/VolumeDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes forceRefresh={true}>
          <Route path="/" element={<Content />} />
          <Route exact path="/read" element={<ReadingPage />} />
          <Route exact path="/details" element={<VolumeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
