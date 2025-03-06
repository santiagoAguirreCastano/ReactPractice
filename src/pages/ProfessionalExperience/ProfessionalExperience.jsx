import React from 'react'
import { Main } from '../../Layouts/Main/Main'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
import Image from '../../assets/images/x.jpg'
export const ProfessionalExperience = () => {
  return (
    <Main>
    <ItemTitles content="Bienvenido al curso" styles="text-[30px] text-sky-600 " />
    <img src={Image} alt="" className='h-[30rem] mt-12' />
    </Main>
  )
}


