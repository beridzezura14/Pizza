import cart from '../assets/img/svg/cart.svg'
import phone from '../assets/img/svg/phone.png'
import logo from '../assets/img/home-page/logo.png'
import PropTypes from 'prop-types';


import { useState } from 'react'

const Header = ({ itemCount, items, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isCart, setCart] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleCart = () => {
        setCart(!isCart);
    };
    const handleRemove = (itemToRemove) => {
        removeFromCart(itemToRemove);
      };


    // const closeMenu = () => {
    //     setIsOpen(false);
    // };

    return (
        <div className="header">
            <div>
                <div className={isCart ? "slide__cart active" : "slide__cart"}>
                        <ion-icon onClick={toggleCart} name="close-outline"></ion-icon>
                        <div>
                            <h2 className="">Shopping Cart</h2>
                            <div>
                                {items.length === 0 ? (
                                    <p>Your cart is empty.</p>
                                    ) : (
                                    <div className="slide__cart__item">
                                        {items.map((item) => (
                                            <div className="item__row" key={item.id}>
                                                <img className="cart__img" src={item.img} alt={item.name}   />
                                                <div>
                                                    <h3>{item.name}  </h3>
                                                    <div className="price__manipulate">
                                                        <button className="manipulate" onClick={() => increaseQuantity(item.id)}>+</button>
                                                        {item.quantity}
                                                        <button className="manipulate" onClick={() => decreaseQuantity(item.id)}>-</button>
                                                        <button className="delete" onClick={() => handleRemove(item)}>Delete</button>
                                                    </div>
                                                    <div>
                                                    {item.quantity} x ${item.price} = ${item.price * item.quantity}
                                                    </div>
                                                
                                                </div>
                                            </div>                                
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="sum__clean">
                            <div>
                                <h4 className="sumPrice" >All: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}</h4>
                                {
                                    items.length === 0 ? "" : <button className="Clean__btn" onClick={clearCart}>Delete All</button>
                                }
                            </div>
                            {
                                items.length === 0 ? "" : <button className="cart__buy">Buy</button>
                            }
                        </div>
                </div>

            </div>
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
                                <div onClick={toggleCart} className='item__quantity'>
                                    <span> {itemCount === 0 ? 0 : itemCount} </span>
                                    <img  className='cart__icon' src={cart} alt="cart" />
                                </div>
                                <div className='header__number'>
                                    <div className='number_icon'> +995 555 11 12 22</div>
                                    <img className='phone__icon' src={phone} alt="cart" /> 
                                    {/* <div>{count}</div>  */}
                                </div>
                            </div>
                            <div className='menu__relative'>
                                <ul className={isOpen ? "nav__items active" : "nav__items"}>
                                    <li><a href="/Home">Home</a></li>
                                    <li><a href="/Menu">Menu</a></li>
                                    <li><a href="/Cart">Cart</a></li>
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


Header.propTypes = {
    itemCount: PropTypes.number.isRequired, // Validate itemCount prop
    items: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
};
export default Header
