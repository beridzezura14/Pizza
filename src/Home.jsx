import Header from "./components/home/Header"
import Hero from "./components/home/Hero"
import Service from "./components/home/Service"
import Speciality from "./components/home/Speciality"
import SpecMenu from "./components/home/SpecMenu"
import BookPlace from "./components/home/BookPlace"
import ChefSlide from "./components/home/ChefSlide"
import AboutPizzon from './components/home/AboutPizzon'
import './components/home/style.scss'
import '../src/index.css'



function Home() {
    
    return (
        <div>
            <Header />
            <Hero />
            <Service />
            <Speciality />
            <SpecMenu />
            <BookPlace />
            <ChefSlide />
            <AboutPizzon />
        </div>
    )
}

export default Home
