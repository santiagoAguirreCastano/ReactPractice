import React from 'react'
import {NavBar}from'../NavBar/NavBar'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar'
export const Header = () => {
  return (
    
    <header className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-full flex justify-between'>
        <ItemTitles content="Introduccion a curso React" styles="text-[30px] text-black "/>
        <NavBar style='text-blue-500' >
            <ul className='flex align-center space-x-4'>
                <ItemNavBar content='inicio' style='text-blue-500'/>
                <ItemNavBar content='clase 1' style='text-blue-500'/>
                <ItemNavBar content='clase 2' style='text-blue-500'/>
                <ItemNavBar content='home' style='text-blue-500'/>

            </ul>
        </NavBar>
    </header>
    

  )
}

