import CitiesList from '../../components/citiesList/citiesList';
import Email from '../../components/email/Email';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import Offers from '../../components/offers/Offers';
import PropertyList from '../../components/propertyList/PropertyList';
import TopList from '../../components/topeList/TopeList';
import './Home.css'
// import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {PropagateLoader} from 'react-spinners'
const Home = () => {

    // const myapp=async (e) => {
    //     await axios.get('http://127.0.0.1:8000/api/user',{ withCredentials: true })
    //     .then(({data})=>{
    //         console.log(data)
    //     })
    //     .catch(({response})=>{
    //         console.log(response)
    //     })
    // }

    // useEffect(()=>{
    //     myapp()
    // },[])
    const [loading,setLoading]=useState(false);
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     async function checkAuthStatus(e){
    //         setLoading(true)
    //         await axios.get('http://127.0.0.1:8000/api/user',{ 
    //             withCredentials: true,
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization':`Bearer ${localStorage.getItem('token')}`
    //             }
    //         })
    //         .then(({data})=>{
    //             console.log(data)
    //             dispatch(login(data))
    //             setLoading(false)
    //         })
    //         .catch(({response})=>{
    //             console.log(response)
    //             setLoading(false)
    //         })
    //     }
    //     checkAuthStatus();
    // }, []);
    return ( 
        <div>
            {
                loading?
                <div className="loader">
                    <PropagateLoader color="#36d7b7" size={30}/>
                </div>
                :
            <>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <h1 className="homeTitle">Offers</h1>
                <Offers/>    
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Explore Cities</h1>
                <CitiesList/>
                <h1 className="homeTitle">Stay at our top unique properties</h1>
                <TopList/>
                <Email/>
                <Footer/>
               
            </div></>}

        </div>
     );
}
 
export default Home;