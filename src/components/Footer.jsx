import logoFooter from '../assets/img/home-page/logo.png'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__main">
                    <div className="footer__items footer__logo">
                        <img src={logoFooter} alt="logo footer" />

                        <div>
                            <p>20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria, United Kingdom</p>
                            <p>PHONE – +91 123 456 789 0, +91 123 456 789 0</p>
                            <p>EMAIL – Info@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer__items footer__menu">
                        <h2>USEFUL LINKS</h2>

                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Warranty and Services</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">My accaunt</a></li>
                        </ul>
                    </div>
                    <div className="footer__items footer__hours">
                        <h2>OPENNING HOURS</h2>

                        <div className="hours">
                            <div>
                                <p>Mon - Tues:</p>
                                <p>am - 10:00 pm 6:00</p>
                            </div>
                            <div>
                                <p>Wednes - Thurs:</p>
                                <p>am - 10:00 pm 6:00</p>
                            </div>
                            <div>
                                <p>Launch:</p>
                                <p>Everyday</p>
                            </div>
                            <div>
                                <p>Sundey:</p>
                                <p className='closed'>closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='last__line'>
                    <div className='icons'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-youtube"></ion-icon>
                    </div>
                    <p>
                        © Pizzon all Rights Reserved. Designed by Zura ( TemplatesCoder )
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
