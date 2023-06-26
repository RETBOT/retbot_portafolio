import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [language, setLanguage] = useState('en');
  const [esTelefono, setEsTelefono] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  const verificarTamanioPantalla = () => {
    const { innerWidth } = window;
    if (innerWidth <= 768) { // Puedes ajustar este valor según tus necesidades
      setEsTelefono(true);
    } else {
      setEsTelefono(false);
    }
  };

  useEffect(() => {
    verificarTamanioPantalla();
    window.addEventListener('resize', verificarTamanioPantalla);

    return () => {
      window.removeEventListener('resize', verificarTamanioPantalla);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          <Navbar language={language} toggleLanguage={toggleLanguage} />
          <Hero language={language} esTelefono={esTelefono} />
        </div>
        <About language={language} />
        <Experience language={language} />
        {!esTelefono ? (<Tech />) : (<></>)}
        <Works language={language} esTelefono={esTelefono} />
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
