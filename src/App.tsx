import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDevelopment from './pages/ProjectDevelopment';
import StartupIncubation from './pages/StartupIncubation';
import CommunityBuilding from './pages/CommunityBuilding';
import LearningPrograms from './pages/LearningPrograms';
import JoinCommunity from './pages/JoinCommunity';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Team />
    <Events />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/project-development" element={<ProjectDevelopment />} />
          <Route path="/services/startup-incubation" element={<StartupIncubation />} />
          <Route path="/services/community-building" element={<CommunityBuilding />} />
          <Route path="/services/learning-programs" element={<LearningPrograms />} />
          <Route path="/join-community" element={<JoinCommunity />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;