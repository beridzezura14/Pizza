import aPizza from '../../assets/img/home-page/about-pizzon.png'

function about() {
    return (
        <div className="about">
            <div className="about-content">
                <div className='about__head'>
                    <p>Fresh From Pizzon</p>
                    <h2>OUR SPECIAL MENU</h2>
                    <p>Founded on a passion for delivering not just pizzas, but memorable moments, Pizzon is more than a pizza place—it’s a culinary journey. Join us in savoring the artistry of flavors, where every bite tells a story of quality, creativity, and devotion. Come, indulge in the pizza experience you deserve. Welcome to the home of extraordinary pizzas, where every slice is an invitation to culinary delight.</p>
                    <div className='about__btn'>
                        <a href="">VIEW MORE</a>
                    </div>
                </div>
                <div>
                    <img className='about__img' src={aPizza} alt="about pizzon" />
                </div>
            </div>

            <footer>
                <div>HOME</div>
                <div>MENU</div>
                <div>RESERVATION</div>
            </footer>
        </div>
    )
}

export default about
