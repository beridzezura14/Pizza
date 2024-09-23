import heroImg from '../../assets/img/home-page/heroImg.png'
import banner1 from '../../assets/img/home-page/banner-bg-2.png'
import banner2 from '../../assets/img/home-page/banner-bg-3.png'
import banner3 from '../../assets/img/home-page/banner-bg-4.png'
import banner4 from '../../assets/img/home-page/banner-bg-5.png'

import top from '../../assets/img/home-page/order-top.png'


import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

function Hero() {

    useGSAP(() => {


        gsap.fromTo('.banner', {
            delay: 2.2,
            y: -150,
            stagger: 0.1,
            opacity: 0,
            duration: 1,

        }, {
            delay: 2.2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
        })
        gsap.fromTo('.fade_up', {
            delay: 2.2,
            y: 150,
            stagger: 0.1,
            opacity: 0,
            ease: 'power1.inOut'

        }, {
            delay: 2.2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power1.inOut'
        })
        gsap.fromTo('.hero__img', {
            delay: 2,
            scale: .5,
            opacity: 0,
            y: 150,
        }, {
            delay: 2,
            scale: 1,
            opacity: 1,
            y: 0
        })
    })
    return (
        <div>
            <div className="hero">
                <div className="hero__content">
                    <div className='hero__items'>
                        <div className='slogan'>
                            <h1 className='fade_up'>QUALITY F<span>OO</span>DS</h1>
                        </div>
                        <div className="sloga_p">
                            <p className='fade_up'>HEALTHY FOOD FOR HEALTHY BODY</p>
                        </div>
                        <div className='img__content'>
                            <img className='banner banner__1' src={banner1} alt="leaf" />
                            <img className='banner banner__2' src={banner2} alt="leaf" />
                            <img className='banner banner__3' src={banner3} alt="leaf" />
                            <img className='banner banner__4' src={banner4} alt="leaf" />

                            <img className='hero__img' src={heroImg} alt="heroImg" />
                        </div>
                    </div>
                    <img className='order__top' src={top} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero
