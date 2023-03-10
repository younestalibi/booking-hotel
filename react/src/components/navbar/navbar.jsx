import "./navbar.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../data/authSlice";
import {BsHeartFill} from 'react-icons/bs'
import axiosClient from "../../axios-client";

const Navbar = () => {
    const user=useSelector(state=>state.auth.user)
    const dispatch=useDispatch()
    const logout=()=>{
        axiosClient.post('/logout')
        .then(({data}) => {
            dispatch(setToken())
            dispatch(setUser())
        })
    }

    return (
        <div className="navbar">
            <div className="navbar-Container">
                <Link className="title" to="/">Booking.com</Link>
                <div className="navbar-Items">
                    {
                    !user &&
                    <div className="auth">
                        <Link className="navAuth" to='/register'>Register</Link>
                        <Link className="navAuth" to='/login'>Login</Link>
                    </div>
                    }
                    {
                    user &&
                    <div className="profile">
                        <Link to='/favorite' className="favorite"><BsHeartFill className="BsHeartFill"/></Link>
                    <Link to='/list-property' className="list-nav">List your property</Link>
                        <Link to='/posts' className="list-nav">My property</Link>
                        <div onClick={logout}>Logout</div>
                        <b><span>Hello,</span>{user.name}</b>
                        <div className="image-profile">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1" alt="" />
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
     );
}

export default Navbar;
