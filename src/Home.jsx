import Header from "./components/home/Header"
import Hero from "./components/home/Hero"
import Service from "./components/home/Service"
import Speciality from "./components/home/Speciality"
import SpecMenu from "./components/home/SpecMenu"
import BookPlace from "./components/home/BookPlace"
import ChefSlide from "./components/home/ChefSlide"
import AboutPizzon from './components/home/AboutPizzon'
import Footer from "./components/home/Footer"
import './components/home/style.scss'
import '../src/index.css'

import loader from './assets/img/home-page/loader.gif'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);



function Home() {

    useGSAP(() => {
        gsap.fromTo(".main__home" , {
            delay: 1.9,
            opacity: 0,
        }, {
            opacity: 1,
            delay: 1.9,

        })
    })
    
    return (
        <div>
            <div className="loader">
                <img src={loader} alt="" />
            </div>
            <div className="main__home">
                <Header />
                <Hero />
                <Service />
                <Speciality />
                <SpecMenu />
                <BookPlace />
                <ChefSlide />
                <AboutPizzon />
                <Footer />
            </div>
        </div>
    )
}

export default Home
