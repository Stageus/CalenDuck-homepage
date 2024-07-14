import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// General
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import FindIdPage from "pages/FindIdPage";
import FindPwPage from "pages/FindPwPage";
import SetNewPwPage from "pages/SetNewPwPage";
import MainPage from "pages/MainPage";
import AlarmPage from "pages/AlarmPage";
import ContactPage from "pages/ContactPage";

// Manager
import ManagerMainPage from "pages/ManagerMainPage";

// Master
import ManageInterestRequestPage from "pages/ManageInterestRequestPage";
import ManageEtcRequestPage from "pages/ManageEtcRequestPage";
import ManageManagersPage from "pages/ManageManagersPage";
import ManageInterestsPage from "pages/ManageInterestsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/findId" element={<FindIdPage />} />
        <Route path="/findPw" element={<FindPwPage />} />
        <Route path="/setNewPw" element={<SetNewPwPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/manager" element={<ManagerMainPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/manageInterestRequests" element={<ManageInterestRequestPage />} />
        <Route path="/manageEtcRequests" element={<ManageEtcRequestPage />} />
        <Route path="/manageManagers" element={<ManageManagersPage />} />
        <Route path="/manageInterests" element={<ManageInterestsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
