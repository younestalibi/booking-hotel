import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';
import ListHotels from './pages/Hotels/ListHotels';
import Hotel from './pages/Hotel/Hotel';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ListProperty from './pages/ListProperty/ListProperty';
import Favorite from './pages/favorite/favorite';
import { useEffect, useState } from 'react';
import axiosClient from './axios-client';
import { useDispatch } from 'react-redux';
import { setUser } from './data/authSlice';
import {PropagateLoader} from 'react-spinners'
import Posts from './pages/Posts/Posts';
import AddRoom from './pages/Posts/AddRoom';
import Reservation from './pages/reservation/Reservation';
import Inscreption from './pages/inscreption/Inscreption';



function App() {
  const dispatch=useDispatch()
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    async function checkAuthStatus(e){
        axiosClient.get('/user')
        .then(({data})=>{
            dispatch(setUser(data))
            setLoading(false)
        })
        .catch(({response})=>{
            if(response.status==401){
                dispatch(setUser(null))
            }
            setLoading(false)
        })
    }
    checkAuthStatus();
},[]);

  return (

    <div className="App">
      {
        loading?
        <div className="loader">
            <PropagateLoader color="#36d7b7" size={30}/>
        </div>
        :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<ListHotels/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/list-property" element={<ListProperty/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/addroom/:id" element={<AddRoom/>}/>
          <Route path="/Reservation" element={<Reservation/>}/>
          <Route path="/inscreption" element={<Inscreption/>}/>
        </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
