import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../data/authSlice';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import './Login.css'

import axiosClient from '../../axios-client'
import {setToken } from '../../data/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user=useSelector(state=>state.auth.user)
  const navigate=useNavigate();
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  })

  const [load,setLoad]=useState(false);
  const [error,setError]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata=new FormData()
    formdata.append('email',email)
    formdata.append('password',password)
    setLoad(true)
    axiosClient.post('/login', formdata)
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
      <div className="path-container">
          <div className="path-hotels">
              <span>Home </span>
              <code>{'>'} </code>
              <span className="path-resluts">Login</span>
          </div>
      </div>
      <div className='login-container'>
        <div className='login-wrapper'>
        <form onSubmit={handleSubmit} className='login-form'>
            <h2>LogIn...</h2>
            <label htmlFor="">Email or email</label>
            <input className='form-input' type="text" value={email} onChange={(e) => {setEmail(e.target.value);setError(false)}} />
            <label>password</label>
            <input className='form-input' type="password" value={password} onChange={(e) => {setPassword(e.target.value);setError(false)}} />
            <button  disabled={load} type="submit">{load?'Loading...':'Login'}</button>
            {error && <div><span className='error-login'>email or password are incorrect!!</span></div>}
          </form>
        </div>

      </div>

    </div>

  );
}

export default Login;
