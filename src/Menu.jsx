import Header from "./components/Header"
import Footer from "./components/Footer"
import MainMenu from "./components/menu/MainMenu";
import './components/menu/menu.scss'


import loader from './assets/img/home-page/loader.gif'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

function Menu() {

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
                <MainMenu />
                <Footer />
            </div>
        </div>
    )
}

export default Menu
