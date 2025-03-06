import React, { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { ItemTitles } from '../../components/ItemTitles/ItemTitles';
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar';

export const Header = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="App-header bg-teal-500 dark:bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5 w-full flex justify-between">
      <ItemTitles content="Bienvenido a mi Portafolio" styles="text-[30px] text-white font-[1000]" />
      <NavBar>
        <ul className="hidden md:flex align-center sm:w-full flex-wrap space-x-10">
          <ItemNavBar route="/" content="Home" styles="text-white" />
          <ItemNavBar route="/HardSkills" content="Habilidades Técnicas" styles="text-white" />
          <ItemNavBar route="/EnglishLevel" content="Nivel de Inglés" styles="text-white" />
          <ItemNavBar route="/ProfessionalExperience" content="Experiencia Profesional" styles="text-white" />
          <ItemNavBar route="/Studies" content="Estudios" styles="text-white" />
        </ul>

       
        <button className="md:hidden text-white" id="hamburger-btn" onClick={toggleMenu}>
          <svg className="w-10 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h18M4 12h18M4 18h18"></path>
          </svg>
        </button>
      </NavBar>

      
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="hamburger-menu">
        <ul className="space-y-4 p-4 bg-teal-500 text-white">
          <li><a href="#home" className="block hover:text-teal-200">Inicio</a></li>
          <li><a href="#about" className="block hover:text-teal-200">Acerca de</a></li>
          <li><a href="#services" className="block hover:text-teal-200">Servicios</a></li>
          <li><a href="#contact" className="block hover:text-teal-200">Contacto</a></li>
        </ul>
      </div>
    </header>
  );
};
