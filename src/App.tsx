// src/App.tsx
import React from 'react';
import './index.css';

// Import your custom sections
import Introduction from './sections/Introduction';
import ContextSection from './sections/Context';
import ScenarioSection from './sections/ScenarioSection';
import References from './sections/References';
import FunFacts from './sections/FunFacts';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div className="main-app-container">
      <Introduction />
      <ContextSection />
      <ScenarioSection />
      <References />
      <FunFacts />
      <Footer />
    </div>
  );
};

export default App;