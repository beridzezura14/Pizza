import burger from '../../assets/img/home-page/burger.jpg'
import desert from '../../assets/img/home-page/deserts.jpg'

import cheesePizza from '../../assets/img/home-page/cheese-pizza.jpg'



const specList = [
    {
        id: 1,
        img: burger,
        name: "BURGERS",
    },
    {
        id: 2,
        img: desert,
        name: "DESERTS",
    },
    {
        id: 3,
        img: cheesePizza,
        name: "DOUBLE CHEESE PIZZA",
    },
]

function Speciality() {
    return (
        <div className='speciality'>
            <div className='spec__head'>
                <p>Fresh From Pizzon</p>
                <h2>OUR SPECIALITY</h2>
            </div>
            <div className='speciality__item'>
                {
                    specList.map((item) => (
                        <div className='speciality__item__center' key={item.id}>
                            <img src={item.img} alt={item.img} />
                            <h3>{item.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Speciality
