import { useEffect, useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosClient from '../../axios-client';
import Email from '../../components/email/Email';
import Footer from '../../components/footer/Footer';
const AddRoom = () => {


    const {id}=useParams()
    const [load,setLoad]=useState(false)
    const user=useSelector(state=>state.auth.user)
    const navigate=useNavigate();
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },)
    const [formData, setFormData] = useState({
        room_number:0,
        max_people: 1,
        price_night:0,
        details:'',
        hotel_id:id

    });


    const addHandle=() => {
        setLoad(true)
        axiosClient.post('/room', formData)
        .then(({data}) => {
            setLoad(false)
            console.log(data);
            navigate('/posts')

        })
        .catch(err => {
            console.log(err)
            setLoad(false)
        })
    }
    return (
        <div className='room-container'>
            <Navbar/>
            <Header page='hotels'/>
            <div className="path-container">
                <div className="path-hotels">
                    <span>Home </span>
                    <code>{'>'} </code>
                    <span>Items </span>
                    <code>{'>'} </code>
                    <span className='path-resluts'>Add-room</span>
                </div>
            </div>
            <div className='form-wrapper'>
                <div className='input-form'>
                    <label htmlFor="room-number"><span>* </span>Number of the room:</label>
                    <input type="number" name="room-number" id="room-number" placeholder='101,102...'
                    onChange={(e) => {setFormData({ ...formData, room_number: parseInt(e.target.value) })}}
                    />

                    <label htmlFor="max-people"><span>* </span>Max people:</label>
                    <input type="number" name="max-people" id="max-people"
                    value={formData.max_people}
                    onChange={(e) => {setFormData({ ...formData, max_people: parseInt(e.target.value) })}}
                    />

                    <label htmlFor="price"><span>* </span>Price per night:</label>
                    <input type="number" name="price" id="price"
                    placeholder='1000 MAD'
                    onChange={(e) => {setFormData({ ...formData, price_night: parseInt(e.target.value) })}}
                    />

                    <label htmlFor="room-description"><span>* </span>Description:</label>
                    <textarea name="room-description" id="room-description" placeholder="Description..." rows="5"
                    value={formData.details}
                    onChange={(e) => {setFormData({ ...formData, details: e.target.value })}}
                    ></textarea>

                    <button disabled={load} onClick={addHandle} >{load?'submiting...':'Add room'}</button>
                </div>
            </div>
            <Email/>
            <Footer/>
        </div>
     );
}

export default AddRoom;
