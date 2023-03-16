import {FaBed ,FaPlane} from 'react-icons/fa'
import {BiTaxi} from 'react-icons/bi'
import {BsFillCalendarMinusFill} from 'react-icons/bs'
import {AiOutlineCar} from 'react-icons/ai'
import {IoIosMan} from 'react-icons/io'
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import {cities} from '../../data/dataForm'

const Header = ({ page }) => {
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [openSearch,setOpensearch]=useState(true)
    const navigate = useNavigate();
    const handleOption = (name, operation) => {
        setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
        });
    };
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };
    return (
        <div className="header">
        <div className={page === "hotels" ? "headerContainer hotels-page" : "headerContainer listMode"}>

            <div className="header-items">
                <div className="headerItem active">
                    <FaBed />
                    <span>Stays</span>
                </div>
                <div className="headerItem">
                    <FaPlane/>
                    <span>Flights</span>
                </div>
                <div className="headerItem">
                    <AiOutlineCar/>
                    <span>Car rentals</span>
                </div>
                <div className="headerItem">
                    <FaBed />
                    <span>Attractions</span>
                </div>
                <div className="headerItem">
                    <BiTaxi />
                    <span>Airport taxis</span>
                </div>
            </div>

            {page !== "hotels" && (
            <div className="header-content">
                <div className="headtitle">
                    Find your next stay.
                </div>
                <p className="headdesc">
                    Search low prices on hotels, homes and much more...
                </p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed  className="headerIcon" />
                        <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        onFocus={(e)=>{setOpensearch(true)}}
                        onBlur={()=>{setTimeout(function turntofals(){setOpensearch(false)},200)}}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <BsFillCalendarMinusFill className="headerIcon" />
                        <span
                        onClick={() => setOpenDate(!openDate)}
                        className="headerSearchText"
                        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                        )}`}</span>

                        {openDate && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <IoIosMan className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                            {`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}
                        </span>
                        {openOptions && (
                        <div className="options-book">
                            <div className="option-item">
                            <span >Adult</span>
                            <div className="optionCounter">
                                <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                                >
                                -
                                </button>
                                <span className="optionCounterNumber">
                                {options.adult}
                                </span>
                                <button
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "i")}
                                >
                                +
                                </button>
                            </div>
                            </div>
                            <div className="option-item">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button
                                    disabled={options.children <= 0}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("children", "d")}
                                    >
                                    -
                                    </button>
                                    <span className="optionCounterNumber">
                                    {options.children}
                                    </span>
                                    <button
                                    className="optionCounterButton"
                                    onClick={() => handleOption("children", "i")}
                                    >
                                    +
                                    </button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button
                                    disabled={options.room <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("room", "d")}
                                    >
                                    -
                                    </button>
                                    <span className="optionCounterNumber">
                                    {options.room}
                                    </span>
                                    <button
                                    className="optionCounterButton"
                                    onClick={() => handleOption("room", "i")}
                                    >
                                    +
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => setOpenOptions(!openOptions)} className="optionDone">Done</button>
                        </div>
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
                {
                openSearch &&
                    <div className="home-search-dest">
                            {cities.map((e,i)=>{
                                if(e.ville.toUpperCase().startsWith(destination.toUpperCase())&&destination.length>0){
                                    return(
                                        <div
                                            className="home-search-item"
                                            onClick={()=>{setDestination(e.ville)}}
                                            key={i}
                                        >
                                            {e.ville}
                                        </div>
                                    )
                                }

                            })}

                    </div>
                }
            </div>
            )}

        </div>
        </div>
    );
};

export default Header;
