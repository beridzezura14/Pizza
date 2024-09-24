import cart from '../assets/img/svg/cart.svg'
import phone from '../assets/img/svg/phone.png'
import logo from '../assets/img/home-page/logo.png'

import { useState } from 'react'

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const closeMenu = () => {
    //     setIsOpen(false);
    // };

    return (
        <div className="header">
            <div className="header__hero__content">
                <div className='fixed__navbar'>
                    <div className="navbar">
                        <div className='nav'>
                            <div className="burger" onClick={toggleMenu}>
                                <div className={isOpen ?  "burger__item burger__item__1 active" : "burger__item burger__item__1"}
                                ></div>
                                <div className={isOpen ?  "burger__item burger__item__2 active" : "burger__item burger__item__2"}></div>
                                <div className={isOpen ?  "burger__item burger__item__3 active" : "burger__item burger__item__3"}></div>
                            </div>
                            <div >
                                <a className='order' href="#">ORDER ONLINE</a>
                            </div>
                            <div className='icons'>
                                <div className='item__quantity'>
                                    <a href="/Cart">
                                    <span>0</span>
                                    <img className='cart__icon' src={cart} alt="cart" /></a>
                                </div>
                                <div className='header__number'>
                                    <div className='number_icon'> +995 555 11 12 22</div>
                                    <img className='phone__icon' src={phone} alt="cart" />  
                                </div>
                            </div>
                            <div className='menu__relative'>
                                <ul className={isOpen ? "nav__items active" : "nav__items"}>
                                    <li><a href="/Home">Home</a></li>
                                    <li><a href="/Menu">Menu</a></li>
                                    <li><a href="">Reservation</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='logo__part'>
                            <a href=""><img className='logo' src={logo} alt="logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
