import {  Routes, Route } from "react-router-dom";
import Empdata from './compnent/Empdata';
import MainPage from './compnent/MainPage';

import Navbar from "./compnent/Navbar";

const App = () => {
  return (
    <div className=" mt-0 w-full h-full flex ">
     
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Empdata />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
      </div>
      </div>
  );
};

export default App;
