import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import MainPage from "pages/MainPage";
import AlarmPage from "pages/AlarmPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
      </Routes>
    </Router>
  );
};

export default App;
