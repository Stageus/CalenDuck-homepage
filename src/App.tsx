import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// General, Manager 계정
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import FindIdPage from "pages/FindIdPage";
import FindPwPage from "pages/FindPwPage";
import SetNewPwPage from "pages/SetNewPwPage";
import MainPage from "pages/MainPage";
import AlarmPage from "pages/AlarmPage";
import ContactPage from "pages/ContactPage";

// Master 계정
import ManageSubjectRequestPage from "pages/ManageSubjectRequestPage";
import ManageEtcRequestPage from "pages/ManageEtcRequestPage";
import ManageManagersPage from "pages/ManageManagersPage";
import ManageSubjectsPage from "pages/ManageSubjectsPage";

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
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/manageSubjectRequests" element={<ManageSubjectRequestPage />} />
        <Route path="/manageEtcRequests" element={<ManageEtcRequestPage />} />
        <Route path="/manageManagers" element={<ManageManagersPage />} />
        <Route path="/manageSubjects" element={<ManageSubjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
