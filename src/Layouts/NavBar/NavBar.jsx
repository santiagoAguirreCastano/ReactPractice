import React from 'react'
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar'
export const NavBar = () => {
  return (
    
      <nav>
            <ul className='flex align-center space-x-4'>
            
                <ItemNavBar content='Home' style='text-blue-500'/>
                <ItemNavBar content='Clase 2' style='text-blue-500'/>
                <ItemNavBar content='Clase 3' style='text-blue-500'/>

            </ul>
        </nav>
   
  )
}
