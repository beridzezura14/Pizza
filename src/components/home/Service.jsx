

import pizza from '../../assets/img/svg/pizza.svg'
import car from '../../assets/img/svg/car.svg'
import plat from '../../assets/img/svg/tepshi.svg'

import bottom from '../../assets/img/home-page/order-bottom.png'


const serviceList = [
    {
        id: 1,
        img: pizza,
        name: "DELICIOUS RECIPES",
        para: `Discover a world of flavors with our delicious recipes! From gourmet delights to quick and easy meals, explore a diverse range of culinary creations that will tantalize your taste buds `
    },
    {
        id: 2,
        img: car,
        name: "DELIVERY OR PICK UP",
        para: `Discover a world of flavors with our delicious recipes! From gourmet delights to quick and easy meals, explore a diverse range of culinary creations that will tantalize your taste buds `
    },
    {
        id: 3,
        img: plat,
        name: "order your Food",
        para: `Discover a world of flavors with our delicious recipes! From gourmet delights to quick and easy meals, explore a diverse range of culinary creations that will tantalize your taste buds `
    },
]

function service() {
    return (
        <div className="service">
            <div className="service__content">
                {
                   serviceList.map((item) => (
                    <div className='service__item' key={item.id}>
                        <img src={item.img} alt={item.img} />
                        <h2>{item.name}</h2>
                        <p>{item.para}</p>
                    </div>
                   )) 
                }
            </div>
            <img className='bottom' src={bottom} alt="decor-bottom" />
        </div>
    )
}

export default service
