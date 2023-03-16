import {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import './Register.css'

import Email from '../../components/email/Email';
import Footer from '../../components/footer/Footer';

import axiosClient from '../../axios-client'
import {setToken, setUser } from '../../data/authSlice';
function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setconfirmPass] = useState('');

  const dispatch = useDispatch();


  const [error,setError]=useState(false)
  const user=useSelector(state=>state.auth.user)
  const navigate=useNavigate();
  const [load,setLoad]=useState(false);

console.log(user)
  const token=useSelector(state=>state.auth.token)

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  })



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata=new FormData()
    formdata.append('name',username)
    formdata.append('email',email)
    formdata.append('password',password)
    formdata.append('password_confirmation',confirmPass)
    setLoad(true)
    axiosClient.post('/register', formdata)
      .then(({data}) => {
        setLoad(false)
        dispatch(setUser(data.user))
        dispatch(setToken(data.token))
      })
      .catch(err => {
        setLoad(false)
      })
};






  return (
    <div>
      <Navbar/>
      <Header page='hotels'/>
      <div className='register-container'>
        <div className="path-container">
            <div className="path-hotels">
                <span>Home </span>
                <code>{'>'} </code>
                <span className="path-resluts">Register</span>
            </div>
        </div>
        <div className='login-container'>
          <div className='login-wrapper'>
          <form onSubmit={handleSubmit} className='login-form'>
              <h2>Register...</h2>

              <label htmlFor="">Username</label>
              <input className='form-input' type="text" value={username} onChange={(e) => {setUsername(e.target.value);setError(false)}} />
              <label htmlFor="">Email</label>
              <input className='form-input' type="text" value={email} onChange={(e) => {setEmail(e.target.value);setError(false)}} />
              <label>password</label>
              <input className='form-input' type="password" value={password} onChange={(e) => {setPassword(e.target.value);setError(false)}} />
              <label>confirm password</label>
              <input className='form-input' type="password" value={confirmPass} onChange={(e) => {setconfirmPass(e.target.value);setError(false)}} />

              <button disabled={load} type="submit">{load?'Loading...':'Register'}</button>

              {error && <div><span className='error-login'>The Email already used!</span></div>}
            </form>
          </div>

        </div>
      </div>
      <Email/>
      <Footer/>

    </div>










    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Username:
    //     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     {error && <div><span>email or password are incorrect!!</span></div>}
    //   </label>
    //   <br />
    //   <button type="submit">Login</button>
    // </form>
  );
}

export default Register;
