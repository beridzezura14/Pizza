// import bookTop from '../../assets/img/home-page/book-top.png'
// import bookBottom from '../../assets/img/home-page/book-bottom.png'


function BookPlace() {
    return (
        <div className="book">
            {/* <img className='book__top' src={bookTop} alt="top decor" /> */}
            <div className="book__content">
                <div className='book__head'>
                    <div className="book__text">
                        <p>Fresh From Pizzon</p>
                        <h2>BOOK ONLINE</h2>
                        <p>Elevate your dining experience with ease! Reserve a table at our restaurant, where exquisite cuisine meets inviting ambiance. Enjoy impeccable service and create memorable moments with your loved ones, ensuring a delightful and unforgettable mealtime</p>
                        <div className='book__number'>
                            phone: +995 555 11 12 22
                        </div>
                    </div>
                    <form>
                        <h3>BOOK A TABLE</h3>
                        <div className="form__content">
                            <input placeholder="Name" type="text" />
                            <input placeholder="Email" type="email" name="email" id="email" />
                            <div className="select__number">
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="4">3</option>
                                    <option value="4">4</option>
                                </select>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <input type="date" placeholder="Date" />
                            <div>
                                <button>BOOK NOW</button>   
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <img className='book__bottom' src={bookBottom} alt="bottom decor" /> */}
        </div>
    )
}

export default BookPlace
