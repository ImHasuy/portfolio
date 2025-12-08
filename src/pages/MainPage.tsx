import {Theme} from "../Components/Theme.tsx";
import BackGround from "../Components/BackGround.tsx";
import NavBar from "../Components/NavBar.tsx";
import HeroSection from "../Components/HeroSection.tsx";
import AboutMe from "../Components/AboutMe.tsx";
import Skills from "../Components/Skills.tsx";
import Projects from "../Components/Projects.tsx";
import Achievements from "../Components/Achievements.tsx";
import Contact from "../Components/Contact.tsx";
import Footer from "../Components/Footer.tsx";

export const MainPage = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Themed page*/}
        <Theme/>
        {/*Backgorund*/}
        <BackGround/>
        {/*Navbar*/}
        <NavBar/>
        {/*Content*/}
        <main>
            <HeroSection/>
            <AboutMe/>
            <Achievements/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
        {/*Footer.tsx*/}
        <Footer/>
    </div>
}