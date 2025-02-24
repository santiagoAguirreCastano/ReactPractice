import React from 'react'
import Image from '../../assets/images/x.jpg'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
export const Main = () => {
  return (
    <main className="h-[100vh] w-[100vw] flex items-center justify-center flex-col ">
    <ItemTitles content="Bienvenido al curso" styles="text-[30px] text-sky-600 "/>
    <img src={Image} alt="" className='h-[30rem] mt-12'/>
    </main>
  )
}




