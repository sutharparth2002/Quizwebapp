import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

import io from 'socket.io-client';

// export const socket = io("localhost:5000/", {
//   transports: ["websocket"],
//   cors: {
//     origin: "http://localhost:3000/",
//   }})
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
};

export default App;
