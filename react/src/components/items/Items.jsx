import "./Items.css";
import { Link } from "react-router-dom";
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { addfavorite ,deletefavorite} from "../../data/favoriteSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Items = (props) => {
  const hotel=props.hotel
  const dispatch=useDispatch()
  const selectedHotels = useSelector((state) => state.favorite.selectedHotels).find(e=>{if(e.id==hotel.id){return 'hello worl'}})
  const check =selectedHotels?true:false
  const notify = () => toast(`${hotel.name} saved successfully!!`);
  return (
    <div className="item-container">

      <div className="image-item-container">
        {!check &&
          <BsHeart className="fav-heart" onClick={()=>{dispatch(addfavorite(hotel));notify()}}/>
        }
        {check &&
          <BsHeartFill className="fav-heart" onClick={()=>{dispatch(deletefavorite(hotel.id))}}/>
        }
        <ToastContainer position="bottom-left" autoClose={4000} theme="dark"/>
        <img
          src={hotel.images[0].image}
          alt=""
          className="image-item"
        />
      </div>
      <div className="item-description">
        <h1 className="siTitle">{hotel.name}</h1>
        <div>
        <span style={{color:'blue'}} className="info-item">{hotel.city}</span>
          <span className="info-item">{hotel.center}m from center</span>
          {
          hotel.beach==1 &&
          <span className="info-item">Beach Nearby</span>
          }

        </div>

        <span className="subtitle-item">{hotel.subtitle}</span>
        <span className="features-item">Entire studio • 1 bathroom • 21m² 1 full bed</span>
        <span className="cancele-item">Free cancellation </span>
        <span className="description-item-hotel">{hotel.description}</span>
      </div>
      <div className="details-item">
        <div className="rate-item">
          <span>Excellent</span>
          <button>{hotel.rate}</button>
        </div>
        <div className="details-item-text">
          <span className="item-price">MAD {hotel.min_price}</span>
          <span className="item-taxes">Includes taxes and fees</span>
          <Link className="check-item" to={`/hotels/${hotel.id}`}>See availability</Link>
        </div>
      </div>

    </div>
  );
};

export default Items;
