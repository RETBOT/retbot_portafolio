import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar language={language} toggleLanguage={toggleLanguage} />
          <Hero language={language} />
        </div>
        <About language={language} />
        <Experience language={language} />
        <Tech />
        <Works language={language} />
        <Feedbacks language={language} />
        <div className='relative z-0'>
          <Contact language={language} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
