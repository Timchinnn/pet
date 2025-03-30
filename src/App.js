import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Ads from "./components/Ads/Ads";
import Services from "./components/Services/Services";
import Main from "./components/Main/Main";
import Events from "./components/Events/Events";
import Profile from "./components/Profile/Profile";
import MyServices from "./components/MyServices/MyServices";
import MyAds from "./components/MyAds/MyAds";
import MyEvents from "./components/MyEvents/MyEvents";
import MyRatings from "./components/MyRatings/MyRatings";
import Filter from "./components/Filter/Filter";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myservices" element={<MyServices />} />
        <Route path="/myads" element={<MyAds />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/myratings" element={<MyRatings />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </Router>
  );
}
export default App;
