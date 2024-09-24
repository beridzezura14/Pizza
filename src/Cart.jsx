
import Footer from "./components/Footer"
import PropTypes from 'prop-types';


const Cart = ({ items, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }) => {
    const handleRemove = (itemToRemove) => {
      removeFromCart(itemToRemove);
    };
    
    return (

        <div>
            <div className='menu__page__head'>
                <h1>Cart</h1>
            </div>
            <div className="test__export">
                <h2 className="Shoping__cart__name">Shopping Cart</h2>
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart__item__rom">
                        {items.map((item) => (
                            <div className="cart__row" key={item.id}>
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

            <Footer />
        </div>
    )
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
  };
export default Cart
