import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";
import './Reservation.css'
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";
import axiosClient from "../../axios-client";
const Reservation = () => {
    const location = useLocation();

    const [room, setRoom] = useState(location.state.room);
    const [hotel, setHotel] = useState(location.state.hotel);
    const [openDate, setOpenDate] = useState(true);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        room_id: room.id,
        check_in_date: format(date[0].startDate, "MM/dd/yyyy"),
        check_out_date: format(date[0].endDate, "MM/dd/yyyy"),
        room_number: room.room_number,
        total_price: 0,
        name:'',
        last_name:'',
        email:'',
        max_people:1,
        phone:'',
      })
      const date1 =new Date(format(date[0].startDate, "MM/dd/yyyy")).getTime()
        const date2 =new Date(format(date[0].endDate, "MM/dd/yyyy")).getTime()
        const difference=date2-date1
        const TotalDays = Math.ceil(difference / (1000 * 3600 * 24))
      const handelReservation= async() => {
        console.log(formData)
        console.log(format(date[0].startDate, "MM/dd/yyyy"))
        axiosClient.post('/reservation',{
            ...formData,check_out_date:format(date[0].endDate, "yyyy-MM-dd"),check_in_date:format(date[0].startDate, "yyyy-MM-dd"),total_price:TotalDays*room.price_per_night
        })
        .then(({data})=>{
        navigate('/inscreption', { state: {data:{
            ...formData,check_out_date:format(date[0].endDate, "yyyy-MM-dd"),check_in_date:format(date[0].startDate, "yyyy-MM-dd"),total_price:TotalDays*room.price_per_night
        }} })
        })
        .catch(({response})=>{
            console.log(response)
        })
    }
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
                    <span >{hotel.name}</span>
                    <code> {'>'} </code>
                    <span className="path-resluts">Reservation</span>
                </div>
          </div>
            <div className="reservation-form" >
                <div className="reserve-wrapper">
                    <h1>Reservation</h1>
                    <hr />
                    <div className="reservation-items">
                        <div className="details-reserv">
                            <img src={hotel.images[0].image} alt="" />
                            <div>
                                <div>--{hotel.city}</div>
                                <h4>{hotel.name}</h4>
                                <div>{hotel.center}m from center </div>
                                <div>{hotel.beach==1 && <span>Beach Nearby</span>}</div>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-items">
                        <div className="form-reserv">
                            <label htmlFor=""><span>*</span> Name:</label>
                            <input className="inputs" type="text" value={formData.name} onChange={(e) => {setFormData({ ...formData, name: e.target.value })}} />
                            <label htmlFor=""><span>*</span> Last name:</label>
                            <input className="inputs" type="text" value={formData.last_name} onChange={(e) => {setFormData({ ...formData, last_name: e.target.value })}}/>
                            <label htmlFor=""><span>*</span> Email:</label>
                            <input className="inputs" type="email" value={formData.email} onChange={(e) => {setFormData({ ...formData, email: e.target.value })}} />
                            <label htmlFor=""><span>*</span> check in date & check out date</label>
                            <div className="date-wrapper" >
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="dateText "
                                    >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                    )}`}
                                </span>
                                {!openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => {setDate([item.selection])}}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <label htmlFor=""><span>*</span> How many geusts:</label>
                            <input className="inputs" type="number" min="1" max={room.max_people} value={formData.max_people} onChange={(e) => {setFormData({ ...formData, max_people: e.target.value })}}/>
                            <label htmlFor=""><span>*</span> Phone number:</label>
                            <input className="inputs" placeholder="+212-000 000 000" type="text" value={formData.phone} onChange={(e) => {setFormData({ ...formData, phone: e.target.value })}} />
                            <button className="reserve" onClick={handelReservation}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Email/>
            <Footer/>
        </div>
     );
}

export default Reservation;
