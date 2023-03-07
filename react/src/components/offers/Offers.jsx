import './Offers.css'
const Offers = () => {
    return ( 
        <div className='offers-container'>
            <div className='offer'>
                <img
                src="https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                />
                <div className='offer-content'>
                    <div className='offer-more'>
                        <b>Escape for a while</b>
                        <div>Enjoy the freedom of a monthly stay on Booking.com</div>
                    </div>
                </div>
            </div>
            <div className='offer'>
                <img
                src="https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                />
                <div className='offer-content'>
                    <div className='offer-more'>
                        <b>New year, new adventures</b>
                        <div>Save 15% or more when you book and stay before 31 March 2023</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Offers;