import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import "./ListHotels.css";
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer'
import {format } from "date-fns";
import { DateRange } from "react-date-range";
import {IoIosMan} from 'react-icons/io'
import { cities } from "../../data/dataForm";
import {BsSearch} from 'react-icons/bs'
import Items from "../../components/items/Items";
import { useSelector } from "react-redux";
import axiosClient from "../../axios-client";
const ListHotels = () => {
    const Hotels = useSelector((state) => state.Hotels.hotels)
    const location = useLocation();
    const [minPrice,setMin]=useState(null);
    const [maxPrice,setMax]=useState(null);
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [openSearch,setOpensearch]=useState(false)
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const [listHotels,setListHotels]=useState([])
    const [load,setLoad]=useState(true)
    const [links,setLinks]=useState()

    const getHotels= async (city,maxPrice,minPrice) => {
        axiosClient.get(`/gethotels`,{
            params: {
                city,maxPrice,minPrice
            }
        })
        .then(({data})=>{
            setLoad(false)
            setLinks(data.hotels)
            setListHotels(data.hotels.data)

        })
        .catch(({response})=>{
            setLoad(false)
        })
    }

    useEffect(() => {
        getHotels(destination);
    },[]);

    const [errdestination,setErrdestination]=useState(destination)
    function handleFilter(){
            setErrdestination(destination)
            setLoad(true)
            getHotels(destination,maxPrice,minPrice);
    };


    const handlePagination=async (e) => {
        setLoad(true)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        console.log(e)
        axiosClient.get(e,{
            params:{
                city:destination
            }
        })
        .then(({data})=>{
            setLoad(false)
            setLinks(data.hotels)
            setListHotels(data.hotels.data)
        })
        .catch(({response})=>{
            setLoad(false)
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
                    {destination && (<><code> {'>'} </code><span>{destination}</span></>)}
                    <code> {'>'} </code>
                    <span className="path-resluts">Search results</span>
                </div>
            </div>
            <div className="hotels-container">
                <div className="hotels-wrapper">
                    <div className="filter-hotels">
                        <h1 className="filter-title">Search</h1>
                        {/* ---- destination --- */}
                        <div className="filter-form search">
                            <label>Destination</label>
                            <input placeholder={destination} value={destination}
                            onChange={(e)=>{setDestination(e.target.value)}}
                            onFocus={(e)=>{setOpensearch(true)}}
                            onBlur={()=>{setTimeout(function turntofals(){setOpensearch(false)},200)}}
                             type="text" />

                                {openSearch &&
                                   <div className="search-suggestions">
                                    {cities.map((e,i)=>{
                                        if(e.ville.toUpperCase().startsWith(destination.toUpperCase())&&destination.length>0){
                                            return(
                                                <div
                                                    className="search-item"
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
                        {/* ---- calendr --- */}
                        <div className="filter-form">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                )} TO ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    className="date"
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        {/* ---- options --- */}
                        <div className="filter-form">
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText" >
                                    <IoIosMan size={19} className="optionsicon" />
                                    {`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}
                                </span>
                                {openOptions && (
                                    <div className="options-book-hotels">
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
                        {/* ---- Pricing --- */}
                        <div className="filter-form">
                            <label>Options</label>
                            <div className="pricing-options">
                                <div className="price-option">
                                    <span>
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" placeholder="000"  onChange={(e)=>{setMin(e.target.value)}}/>
                                </div>
                                <div className="price-option">
                                    <span >
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" placeholder="000" onChange={(e)=>{setMax(e.target.value)}}/>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleFilter} >Search</button>
                    </div>
                    {
                        load?
                        <div className="loader-container">
                            <div class="loader-hotels"></div>
                        </div>
                        :
                        <div className="listResult">
                            {listHotels.length>0 && <h1>{links.total} properties found</h1>}
                            {
                                listHotels.length>0?
                                    listHotels.map((e,i)=>{
                                        return (
                                            <Items key={i} hotel={e}/>
                                        )
                                    })
                                    :
                                    <div className="not-found">
                                        <BsSearch size={30}/>
                                        <h3>No properties found  {errdestination && `in ${errdestination}`}</h3>
                                        <div>There are no matching properties for your search criteria. Try updating your search.</div>
                                    </div>
                            }

                            {listHotels.length>0&&
                                <div className="pagination">
                                    {
                                        links.links.map((e,i)=>{
                                            console.log()
                                            if(i==0){
                                                return(
                                                    <button key={i} link={e.url}
                                                        className={e.active?'active':''}
                                                        disabled={e.url==null?true:false}
                                                        onClick={()=>{handlePagination(e.url)}}
                                                    >
                                                        Previous
                                                    </button>
                                                )
                                            }
                                            else if(i==links.links.length-1){
                                                return(
                                                    <button key={i} link={e.url}
                                                        className={e.active?'active':''}
                                                        disabled={e.url==null?true:false}
                                                        onClick={()=>{handlePagination(e.url)}}
                                                    >
                                                        Next
                                                    </button>
                                                )
                                            }
                                            else{
                                                return(
                                                    <button key={i} link={e.url}
                                                        className={e.active?'active':''}
                                                        disabled={e.url==null?true:false}
                                                        onClick={()=>{handlePagination(e.url)}}
                                                    >
                                                        {e.label}
                                                    </button>
                                                )
                                            }

                                        })
                                    }
                                </div>
                            }
                        </div>
                    }



                </div>
            </div>
            <div className="list-item-container">
                <div className="list-your-property">
                    <Link to='/list-property' className="list-hotels">List your property</Link>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default ListHotels;
