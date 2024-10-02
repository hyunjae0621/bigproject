import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import { BrowserRouter } from "react-router-dom";



function App() {

  return (
    <BrowserRouter >
    <div>
      <Routes>
        <Route path="/bigproject" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;


