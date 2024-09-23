// import pizza1 from '../../assets/img/pizza/pizza-1.png'
import pizza2 from '../../assets/img/pizza/pizza-2.png'
import pizza3 from '../../assets/img/pizza/pizza-3.png'
// import pizza4 from '../../assets/img/pizza/pizza-4.png'
import pizza5 from '../../assets/img/pizza/pizza-5.png'

// import burger1 from '../../assets/img/burger/burger-1.png'
import burger2 from '../../assets/img/burger/burger-2.png'
// import burger3 from '../../assets/img/burger/burger-3.png'
import burger4 from '../../assets/img/burger/burger-4.png'

// import drink1 from '../../assets/img/drink/drink-1.png'
import drink2 from '../../assets/img/drink/drink-2.png'
import drink3 from '../../assets/img/drink/drink-3.png'
// import drink4 from '../../assets/img/drink/drink-4.png'


// import salad1 from '../../assets/img/salad/salad-1.png'
// import salad2 from '../../assets/img/salad/salad-2.png'

import salad3 from '../../assets/img/salad/salad-3.png'
import { useState } from 'react'


const specMenu = [
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
        price: "15.00",
        category: "burger"
    },
    {
        id: 3,
        img: drink3,
        name: "SPECIAL DRINK",
        price: "15.00",
        category: "drink"
    },
    {
        id: 4,
        img: salad3,
        name: "GREEN SALAD",
        price: "15.00",
        category: "salad"
    },
    {
        id: 5,
        img: pizza2,
        name: "Ggreek pizza",
        price: "15.00",
        category: "pizza"
    },
    {
        id: 6,
        img: pizza3,
        name: "GARLINK PIZZA",
        price: "15.00",
        category: "pizza"
    },
    {
        id: 7,
        img: burger2,
        name: "veggie combo",
        price: "15.00",
        category: "burger"
    },
    {
        id: 8,
        img: drink2,
        name: "COCA-COLA",
        price: "15.00",
        category: "drink"
    },
    
    
]


function SpecMenu() {

    const [filteredCategory, setFilteredCategory] = useState('All');

    const filteredProducts = filteredCategory === 'All' ? specMenu
                            : specMenu.filter(product => product.category === filteredCategory);

    return (
        <div className='spec__menu'>
            <div className='spec__menu__content'>
                <div className='menu__head'>
                    <p>Fresh From Pizzon</p>
                    <h2>OUR SPECIAL MENU</h2>
                </div>
                <div>
                    <div className='buttons'>
                        <button 
                            onClick={() => setFilteredCategory('All')}
                            className={`filter-btn ${filteredCategory === 'All' ? 'active' : ''}`}
                        >ALL</button>
                        <button
                            onClick={() => setFilteredCategory('pizza')} 
                            className={`filter-btn ${filteredCategory === 'pizza' ? 'active' : ''}`}
                        >Pizzas</button>
                        <button 
                            onClick={() => setFilteredCategory('drink')} 
                            className={`filter-btn ${filteredCategory === 'drink' ? 'active' : ''}`}
                        >Drinks</button>
                        <button 
                            onClick={() => setFilteredCategory('burger')} 
                            className={`filter-btn ${filteredCategory === 'burger' ? 'active' : ''}`}
                        >Burgers</button>
                        <button 
                            onClick={() => setFilteredCategory('salad')} 
                            className={`filter-btn ${filteredCategory === 'salad' ? 'active' : ''}`}
                        >Salads</button>
                    </div>
                    <div className='select__items'>
                        {
                        filteredProducts.map((item) => (
                                <div 
                                    key={item.id}
                                >
                                    <img src={item.img} alt="" />
                                    <h3>{item.name}</h3>
                                    <p>{item.price} $</p>
                                </div>
                        )) 
                        }
                    </div>
                    <div className='link__to__menu'>
                        <a href="">Menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecMenu
