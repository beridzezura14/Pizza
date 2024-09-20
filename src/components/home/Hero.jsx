import heroImg from '../../assets/img/home-page/heroImg.png'
import banner1 from '../../assets/img/home-page/banner-bg-2.png'
import banner2 from '../../assets/img/home-page/banner-bg-3.png'
import banner3 from '../../assets/img/home-page/banner-bg-4.png'
import banner4 from '../../assets/img/home-page/banner-bg-5.png'

import top from '../../assets/img/home-page/order-top.png'

function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="hero__content">
                    <h1>QUALITY F<span>OO</span>DS</h1>
                    <p>HEALTHY FOOD FOR HEALTHY BODY</p>
                    <div className='img__content'>
                        <img className='banner banner__1' src={banner1} alt="leaf" />
                        <img className='banner banner__2' src={banner2} alt="leaf" />
                        <img className='banner banner__3' src={banner3} alt="leaf" />
                        <img className='banner banner__4' src={banner4} alt="leaf" />

                        <img className='hero__img' src={heroImg} alt="heroImg" />
                    </div>
                    <img className='order__top' src={top} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero
