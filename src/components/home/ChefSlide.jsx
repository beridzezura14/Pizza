
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import chef1 from '../../assets/img/chef/chef-1.jpg'
import chef2 from '../../assets/img/chef/chef-2.jpg'
import chef3 from '../../assets/img/chef/chef-3.jpg'
import chef4 from '../../assets/img/chef/chef-4.jpg'


const chefList = [
    {
        id: 1,
        img: chef1,
        name: "JAMIE OLIVER",
        position: "Sous chef",
    },
    {
        id: 2,
        img: chef2,
        name: "TOMAS KELLER",
        position: "Sous chef",
    },
    {
        id: 3,
        img: chef3,
        name: "ALAIN DUKASE",
        position: "Sous chef",
    },
    {
        id: 4,
        img: chef4,
        name: "NIGELA LAVSON",
        position: "Sous chef",
    },
    
]

function ChefSlide() {

    const slide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 5000, 
        arrows: false,
    };

    return (
        <div className='chef'>
            <div className="chef__content">
                <div className='chef__head'>
                    <p>Fresh From Pizzon</p>
                    <h2>OUR SPECIAL MENU</h2>
                </div >
                <div >
                    <Slider {...slide}>
                        {
                            chefList.map((item) => (
                                <div className='chef__item' key={item.id}>
                                    <img src={item.img} alt={item.name} />
                                    <div className='chef__text'>
                                        <h3>{item.name}</h3>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ChefSlide
