
import { NavBar } from '../NavBar/NavBar'
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar'
import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export const Footer = () => {
    return (
        <footer className='h-[5rem] w-[100vw] text-center items-center flex justify-center bg-gray-200 dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5'>
            <p className='text-blue-500'>
                Desarrollado por <strong>Santiago Aguirre</strong>
            </p>
            <NavBar>
                <ul className='flex align-center space-x-4 ml-2'>
                    <ItemNavBar content={<FaFacebook />}style='text-blue-500' />
                    <ItemNavBar content={<FaInstagram />}style='text-blue-500' />
                    <ItemNavBar content={<FaTwitter />} style='text-blue-500'/>
                    <ItemNavBar content={<FaLinkedin />}style='text-blue-500' />

                </ul>

            </NavBar>


        </footer>
    )
}
