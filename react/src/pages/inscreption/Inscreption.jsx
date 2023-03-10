import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import './Inscreption.css'
import ReactToPrint from 'react-to-print';
import { Link } from "react-router-dom";
const Inscreption = () => {
    const location = useLocation();
    const [data, setRoom] = useState(location.state.data);
    const ref=useRef()
    return (
        <div>
            <Navbar/>
            <Header page='hotels'/>
            <div className="inscreption-container">
                <div className="insception-wrapper">
                    <div className="inscreption-action">
                        <h4>Your inscription</h4>
                        <ReactToPrint
                        trigger={() => {
                            return <button >Download</button>;
                        }}
                        content={() => ref.current}
                        documentTitle='reservation'
                        />
                        <Link to='/'>Home</Link>

                    </div>
                    <div ref={ref} className="inscreption-content">
                        <h1>Inscription for reservation</h1>
                        <hr />
                        <div>Room's number: <b>{data.room_number}</b></div>
                        <div>Name: <b>{data.name}</b></div>
                        <div>Last name: <b>{data.last_name}</b></div>
                        <div>How many geusts: <b>{data.max_people}</b></div>
                        <div>Total price: <b>{data.total_price} MAD</b></div>
                        <div>How many geusts: <b>{data.max_people}</b></div>
                        <div>Check in: <b>{data.check_in_date}</b></div>
                        <div>Check out: <b>{data.check_out_date}</b></div>
                    </div>
                </div>
            </div>
            <Email/>
            <Footer/>
        </div>
     );
}

export default Inscreption;
