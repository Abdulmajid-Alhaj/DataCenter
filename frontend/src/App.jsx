import React from 'react';
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import Verify from './pages/Verify/Verify';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SocialStatusPage from './pages/SocialStatus/SocialStatusPage';
import ChildrenQuestionPage from './pages/ChildrenQuestionPage/ChildrenQuestionPage';
import ChildrenCountPage from './pages/ChildrenCountPage/ChildrenCountPage';
import PersonalInfoPage from './pages/PersonalInfoPage/PersonalInfoPage';
import EducationLevelPage from './pages/EducationLevelPage/EducationLevelPage';
import FamilyWorkPage from './pages/FamilyWorkPage/FamilyWorkPage';
import HousingInfoPage from './pages/HousingInfoPage/HousingInfoPage';
import AdditionalHousingInfo from './pages/AdditionalHousingInfo/AdditionalHousingInfo';
import HealthStatusPage from './pages/HealthStatusPage/HealthStatusPage';
import CrisisAndNeedsPage from './pages/CrisisAndNeedsPag/CrisisAndNeedsPag';
import BankAccountEntryPage from './pages/BankAccountEntryPage/BankAccountEntryPage';
import Dashboard from './pages/Dashboard/Dashboard';
import UserManagementPage from './pages/UserManagementPage/UserManagementPage';
import FamilyDashboard from './pages/FamilyDashboard/FamilyDashboard';
import NotesPage from './pages/NotesPage/NotesPage';

function App() {


  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/social' element={<SocialStatusPage />} />
        <Route path='/children' element={<ChildrenQuestionPage />} />
        <Route path='/childrenCount' element={<ChildrenCountPage />} />
        <Route path='/personalInfo' element={<PersonalInfoPage />} />
        <Route path='/education' element={<EducationLevelPage />} />
        <Route path='/work' element={<FamilyWorkPage />} />
        <Route path='/housing' element={<HousingInfoPage />} />
        <Route path='/housingAdditional' element={<AdditionalHousingInfo />} />
        <Route path='/health' element={<HealthStatusPage />} />
        <Route path='/crisis' element={<CrisisAndNeedsPage />} />
        <Route path='/bank' element={<BankAccountEntryPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userManagement' element={<UserManagementPage />} />
        <Route path='/familyMemberInfo' element={<FamilyDashboard />} />
        <Route path='/notes' element={<NotesPage />}/>
      </Routes>
    </>
  )
}

export default App
