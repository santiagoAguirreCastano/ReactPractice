import React from 'react'
import {NavBar}from'../NavBar/NavBar'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
export const Header = () => {
  return (
    
    <header className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-full flex justify-between'>
        <ItemTitles content="Introduccion a curso React" styles="text-[30px] text-black "/>
        <NavBar style='text-blue-500' />
    </header>
    

  )
}

