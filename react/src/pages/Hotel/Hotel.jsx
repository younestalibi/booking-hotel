import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from '../../components/navbar/navbar'
import Email from '../../components/email/Email'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/header'
import './Hotel.css'
import {AiOutlineHeart} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import { useEffect, useState } from "react";
import {IoMdClose} from 'react-icons/io'
import {FiArrowRightCircle ,FiArrowLeftCircle} from 'react-icons/fi'

import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import { useDispatch} from 'react-redux';
import { addfavorite ,deletefavorite} from "../../data/favoriteSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from "../../axios-client";
const Hotel = () => {
    const {id}=useParams()
    const [hotel,setHotel]=useState([])
const [load,setLoad]=useState(true)
    useEffect(() => {
      const getHotel= async(id) => {
        axiosClient.get('/gethotel',{
          params:{
            id
          }
        })
        .then(({data})=>{
          setHotel(data.hotel[0])
          setLoad(false)
        })
        .catch(({response})=>{
          setLoad(false)
        })
    }
    getHotel(id);
  },[]);

    const [currentImage, setCurrentImage] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');
    const [openSlide,setOpenslide]=useState(false)
    var images=hotel.images
    const handlePrev = () => {
      setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
      setSlideDirection('slide-right');
    };
    const notify = () => toast(`${hotel.name} saved successfully!!`);
    const handleNext = () => {
      setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
      setSlideDirection('slide-left');
    };
    const handleAnimationEnd = () => {
      setSlideDirection('');
    };
    const dispatch=useDispatch()
    const selectedHotels = useSelector((state) => state.favorite.selectedHotels).find(e=>{if(e.id==hotel.id){return 'hello worl'}})
    const check =selectedHotels?true:false
    const reservation = document.getElementById('available-rooms');
    const navigate=useNavigate()
    const handleReserveation = (e) => {
      const room=e.room
      const hotel=e.hotel
      navigate("/Reservation", { state: { room,hotel} });
  };

    return (
        <div>

          <Navbar/>
          <Header page='hotels'/>
          <div className="path-container">
                <div className="path-hotels">
                    <span>Home </span>
                    <code>{'>'} </code>
                    <span>Hotels</span>
                    <code> {'>'} </code>
                    <span>{hotel.city}</span>
                    <code> {'>'} </code>
                    <span className="path-resluts">{hotel.name}</span>
                </div>
          </div>
          {openSlide &&
            <div className="image-slider">
              <IoMdClose className='close' onClick={()=>{setOpenslide(false)}} />
              <FiArrowLeftCircle className="arrow-button"  onClick={handlePrev}/>
              <div>
              <img
                className={`slider-image ${slideDirection}`}
                src={images[currentImage].image}
                alt={`Image ${currentImage}`}
                onAnimationEnd={handleAnimationEnd}
              />
              </div>
              <FiArrowRightCircle className="arrow-button" onClick={handleNext}/>
              <div className="number-image">{currentImage}</div>
            </div>
          }

          {
          load?
          <div className="loader-hotel"></div>
          :
          <div className="hotel-container">
              <div className="hotel-wrapper">
                <div className="header-hotel">
                  <b className="feedback">Excelent hotel</b>
                  <div className="heart-hotel">
                    {!check &&
                      <BsHeart className="heart" onClick={()=>{dispatch(addfavorite(hotel));notify()}}/>
                    }
                    {check &&
                      <BsHeartFill className="heart" onClick={()=>{dispatch(deletefavorite(hotel.id));}}/>
                    }
                    <ToastContainer position="bottom-left" autoClose={4000}theme="dark"/>
                    <button className="btn-reser"
                    onClick={()=>{reservation.scrollIntoView({ behavior: 'smooth' });}}
                    >Reserve
                    </button>
                  </div>
                </div>

                <div className="hotel-content">
                  <div className="title-hotel">{hotel.name}</div>
                  <div className="info-hotel">
                    <span className="info-item"><GrLocation/> {hotel.city}</span>
                    <span className="info-item">{hotel.center}m from center</span>
                    {
                      hotel.beach==1 &&
                      <span className="info-item">Beach Nearby</span>
                    }
                  </div>
                  <div className="images-hotel">
                    <div className="image">
                      <img className="image-hotel" src={hotel.images[0].image} alt="image" onClick={()=>{setOpenslide(true)}}/>
                    </div>

                    <div className="other-image">
                      <div className="first-div">
                        <div className="second-div" onClick={()=>{setOpenslide(true)}}>
                          <div>+{hotel.images.length+1} photos</div>
                        </div>
                        <img src={hotel.images[hotel.images.length-1].image} className='more-images' alt="" onClick={()=>{setOpenslide(true)}}/>
                      </div>
                      {hotel.images.map((e,i)=>{
                        if(i<=3){
                          return(
                            <img key={i} className="other-img" src={e.image} alt="image" onClick={()=>{setOpenslide(true)}}/>
                          )
                        }
                      })}
                    </div>
                  </div>
                  <div className="content-hotel-des">
                    <div className="descritpion-hotel">
                      <div className="subtitle-hotel">{hotel.subtitle}</div>
                      <div className="description-hot">{hotel.description}{hotel.description}{hotel.description} </div>
                    </div>
                    <div className="reservation-hotel">
                      <div className="wrapper-resrervation">
                        <div className="reserv-title">Property Highlights</div>
                        <div className="reserv-title">Perfect for a 24-night stay!</div>
                        <div className="reserv-desc">
                          <div><GrLocation className="location-rese"/></div>
                          <div className="reservation-info">Located in the top-rated area in {hotel.city}, this property has an excellent location score of {hotel.rate}!</div>
                        </div>
                        <div className="reserv-title">Apartments with:</div>
                        <div className="more-info-reserv">
                        <div className="info-item">{hotel.center}m from center</div>
                        {
                          hotel.beach==1 &&
                          <div className="info-item">Beach Nearby</div>
                        }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="available-rooms" id="available-rooms">
                  <table>
                    <thead>
                      <tr>
                        <th>Room number</th>
                        <th>Description</th>
                        <th>Max people</th>
                        <th>Price per night</th>
                        <th>Reserve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotel.rooms.map((e,i)=>{
                        return(
                          <tr key={i}>
                            <td>{`Room-${e.room_number}`}</td>
                            <td>{e.description}</td>
                            <td>{`${e.max_people}-person`}</td>
                            <td>{`${e.price_per_night} MAD`}</td>
                            <td >
                              <button  onClick={()=>{handleReserveation({room:e,hotel:hotel})}} disabled={e.is_available==0} className={e.is_available==1?'reserv-button':'notSvailble'}>
                              {e.is_available==1?'Reserve':'Not availble'}
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>

                  </table>
                </div>

              </div>
              <Email/>
              <Footer/>
          </div>
          }
        </div>
     );
}

export default Hotel;
