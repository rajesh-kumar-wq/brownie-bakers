import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import CakesMenu from './pages/CakesMenu/CakesMenu';
import FastFoodMenu from './pages/FastFoodMenu/FastFoodMenu';
import DessertsMenu from './pages/DessertsMenu/DessertsMenu';
import CustomCakes from './pages/CustomCakes/CustomCakes';
import BranchesReviews from './pages/BranchesReviews/BranchesReviews';
import Franchise from './pages/Franchise/Franchise';
import ContactOrder from './pages/ContactOrder/ContactOrder';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home onNavigate={setActivePage} />;
      case 'cakes': return <CakesMenu />;
      case 'fastfood': return <FastFoodMenu />;
      case 'desserts': return <DessertsMenu />;
      case 'custom': return <CustomCakes />;
      case 'branches': return <BranchesReviews />;
      case 'franchise': return <Franchise />;
      case 'contact': return <ContactOrder />;
      default: return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="App">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;
