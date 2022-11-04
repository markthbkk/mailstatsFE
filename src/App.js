import QueueStats from "./components/MailStats/QueueStats";
import ServiceStats from "./components/MailStats/ServiceStats";
import DiskStats from "./components/MailStats/DiskStats";
import Home from "./components/MailStats/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/MailStats/Menu";

import "./App.css";

const App = () => {
  return (
    
      <div className="AppFrame">
        <Router>
          {<BurgerMenu />}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/queuestats" element={<QueueStats />} />
            <Route path="/servicestats" element={<ServiceStats />} />
            <Route path="/diskstats" element={<DiskStats />} />
          </Routes>
        </Router>
      </div>
    
  );
};

export default App;
