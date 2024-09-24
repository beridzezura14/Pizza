
import Footer from "./components/Footer"
import MainMenu from "./components/menu/MainMenu";
import PropTypes from 'prop-types';
import './components/menu/menu.scss'


import loader from './assets/img/home-page/loader.gif'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const Menu = ({ addToCart }) => {

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
                <MainMenu addToCart={addToCart}/>
                <Footer />
            </div>
        </div>
    )
}

Menu.propTypes = {
    addToCart: PropTypes.func.isRequired, // Define addToCart as a required function
  };

export default Menu
