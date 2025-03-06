import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
// import { NotFound } from "./components/Pages/NotFound/NotFound"
import { Header } from "./Layouts/Header/Header" 
import { Footer } from "./Layouts/Footer/Footer"
import { HardSkills } from "./pages/HardSkills/HardSkills"
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperience"
import { EnglishLevel } from "./pages/EnglishLevel/EnglishLevel"
import { Studies } from "./pages/Studies/Studies"
export const App = ()=>{
    return(
   
        
        <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HardSkills" element={<HardSkills />} />
        <Route path="/ProfessionalExperience" element={<ProfessionalExperience/>} />
        <Route path="/EnglishLevel" element={<EnglishLevel />} />
        <Route path="/Studies" element={<Studies />} />
                    
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
      

    )
}