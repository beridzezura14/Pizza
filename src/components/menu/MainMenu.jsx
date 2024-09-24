import pizza1 from '../../assets/img/pizza/pizza-1.png'
import pizza2 from '../../assets/img/pizza/pizza-2.png'
import pizza3 from '../../assets/img/pizza/pizza-3.png'
import pizza4 from '../../assets/img/pizza/pizza-4.png'
import pizza5 from '../../assets/img/pizza/pizza-5.png'
import burger1 from '../../assets/img/burger/burger-1.png'
import burger2 from '../../assets/img/burger/burger-2.png'
import burger3 from '../../assets/img/burger/burger-3.png'
import burger4 from '../../assets/img/burger/burger-4.png'
import drink1 from '../../assets/img/drink/drink-1.png'
import drink2 from '../../assets/img/drink/drink-2.png'
import drink3 from '../../assets/img/drink/drink-3.png'
import drink4 from '../../assets/img/drink/drink-6.png'
import salad1 from '../../assets/img/salad/salad-1.png'
import salad2 from '../../assets/img/salad/salad-2.png'
import { useState } from 'react';
import PropTypes from 'prop-types';



function MainMenu({addToCart}) {
    const menuItem = [
        {
            id: 1,
            img: pizza5,
            name: "GARLINK PIZZA",
            price: "15.00",
            category: "pizza"
        },
        {
            id: 2,
            img: burger4,
            name: "FRESH burger",
            price: "20.00",
            category: "burger"
        },
        {
            id: 3,
            img: drink3,
            name: "SPECIAL DRINK",
            price: "5.00",
            category: "drink"
        },
        {
            id: 4,
            img: salad2,
            name: "GREEN SALAD M",
            price: "13.00",
            category: "salad"
        },
        {
            id: 5,
            img: pizza2,
            name: "Ggreek pizza",
            price: "18.00",
            category: "pizza"
        },
        {
            id: 6,
            img: pizza3,
            name: "GARLINK PIZZA M",
            price: "20.00",
            category: "pizza"
        },
        {
            id: 7,
            img: burger2,
            name: "veggie combo",
            price: "22.00",
            category: "burger"
        },
        {
            id: 8,
            img: drink2,
            name: "COCA-COLA",
            price: "3.00",
            category: "drink"
        },
    
    
        {
            id: 9,
            img: pizza1,
            name: "GARLINK PIZZA N",
            price: "25.00",
            category: "pizza"
        },
        {
            id: 10,
            img: burger1,
            name: "FRESH burger 2X",
            price: "27.00",
            category: "burger"
        },
        {
            id: 11,
            img: drink1,
            name: "SPECIAL DRINK C",
            price: "2.00",
            category: "drink"
        },
        {
            id: 12,
            img: salad2,
            name: "GREEN SALAD",
            price: "14.00",
            category: "salad"
        },
        {
            id: 13,
            img: drink4,
            name: "ICE CREAM",
            price: "3.00",
            category: "drink"
        },
        {
            id: 14,
            img: pizza3,
            name: "GARLINK PIZZA",
            price: "27.00",
            category: "pizza"
        },
        {
            id: 15,
            img: burger3,
            name: "veggie combo mix",
            price: "14.00",
            category: "burger"
        },
        {
            id: 16,
            img: pizza4,
            name: "TRADICON PIZZA",
            price: "15.00",
            category: "pizza"
        },
        {
            id: 17,
            img: salad1,
            name: "SALAD",
            price: "15.00",
            category: "salad"
        },
        
        
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    const cencel = () => {
        setSearchTerm('');
    };
  
    const filteredItems = menuItem.filter((item ) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === '' || item.category === category)
    
    );
    
    return (
        <div>
            <div className="menu__hero">
                <div className='menu__page__head'>
                    <h1>Menu</h1>
                </div>
                <div>
                    <form>
                        <div className='select__arr'>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="">All </option>
                                <option value="pizza">PIZZA</option>
                                <option value="drink">DRINK</option>
                                <option value="burger">BURGER</option>
                                <option value="salad">SALAD</option>
                            </select>

                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        
                        <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                        /> 
                        <div onClick={cencel} className="search__cencel">
                            <ion-icon  name="close-outline"></ion-icon>
                        
                        </div> 
                    </form>

                    <div className='main__menu__item'>
                        {
                            filteredItems.map((item) => (
                                <div key={item.id} className='object'   >
                                    <img src={item.img} loading="lazy" alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <p>{item.price} $</p>
                                    <div className='cart__relative'>
                                        <div className='buy'>
                                            <button onClick={() => addToCart(item)} >ADD TO CART</button>
                                            <button>ORDER</button>
                                        </div>
                                    </div>

                                </div>
                        )) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


MainMenu.propTypes = {
    addToCart: PropTypes.func.isRequired, // Define addToCart as a required function
};
export default MainMenu
