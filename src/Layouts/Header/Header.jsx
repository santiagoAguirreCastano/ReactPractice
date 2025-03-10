
import { NavBar } from '../NavBar/NavBar';
import { ItemTitles } from '../../components/ItemTitles/ItemTitles';
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar';

export const Header = () => {
 


  return (
    <header className="App-header bg-teal-600 dark:bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5 w-full flex justify-between">
      <ItemTitles content="Bienvenido a mi Portafolio" styles="text-[30px] text-white font-[1000]" />
      <NavBar>
        <ul className="hidden md:flex align-center sm:w-full flex-wrap space-x-10">
          <ItemNavBar route="/" content="Home" styles="text-white" />
          <ItemNavBar route="/HardSkills" content="Habilidades Técnicas" styles="text-white" />
          <ItemNavBar route="/EnglishLevel" content="Nivel de Inglés" styles="text-white" />
          <ItemNavBar route="/ProfessionalExperience" content="Experiencia Profesional" styles="text-white" />
          <ItemNavBar route="/Studies" content="Estudios" styles="text-white" />
        </ul>

      </NavBar>

     
    </header>
  );
};
