import './citiesList.css'
const CitiesList = () => {
    return (
            <div className='cities-container'>
                <div className='first-city cityOnFocus'>
                    <img
                    src="https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    />
                    <div className='city-content'>
                        <b>Rabat</b>
                    </div>
                </div>
                <div className='second-city cityOnFocus'>
                    <img
                    src="https://images.pexels.com/photos/11517336/pexels-photo-11517336.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    />
                    <div className='city-content'>
                        <b>Tangier</b>
                    </div>
                </div>
                <div className='third-city cityOnFocus'>
                    <img
                    src="https://images.pexels.com/photos/4652131/pexels-photo-4652131.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    />
                    <div className='city-content'>
                        <b>Chefchaouen</b>
                    </div>
                </div>
                <div className='third-city cityOnFocus'>
                    <img
                    src="https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    />
                    <div className='city-content'>
                        <b>Marrakesh </b>
                    </div>
                </div>
                <div className='third-city cityOnFocus'>
                    <img
                    src="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    />
                    <div className='city-content'>
                        <b>Casablanca </b>
                    </div>
                </div>
            </div>

     );
}

export default CitiesList;
