
import { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import HomeNavbar from './components/HomeNavbar';
import NavigationNavbar from './components/NavigationNavbar';
import About from './pages/About';
import AirportPage from './pages/AirportPage';
import ContactPage from './pages/ContactPage';
import FrontendDev from './pages/FrontendDev';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage';
import PetrolPage from './pages/PetrolPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
<Fragment>

<Redirect from='/' to='/home'></Redirect>

  <Route path="/home">
    <HomeNavbar />
    <HomePage />
  </Route>

  <Route path="/curriculum">
    <NavigationNavbar pageName="Curriculum"/>
    <NavigationPage />
  </Route>

  <Route path="/skills">
    <NavigationNavbar pageName="Skills"/>
    <SkillsPage />
  </Route>

  <Route path="/petrol-work">
    <NavigationNavbar pageName="Petrol-station"  />
    <PetrolPage />
  </Route>
  
  <Route path="/airport-work">
    <NavigationNavbar pageName="Airport"/>
    <AirportPage />
  </Route>

  <Route path="/about">
    <NavigationNavbar pageName="About me"/>
    <About />
  </Route>

  <Route path="/contact">
    <NavigationNavbar pageName="Contact"/>
    <ContactPage />
  </Route>

  <Route path="/frontend-work">
    <NavigationNavbar pageName="Frontend"/>
    <FrontendDev />
  </Route>


</Fragment>
  );
}

export default App;
