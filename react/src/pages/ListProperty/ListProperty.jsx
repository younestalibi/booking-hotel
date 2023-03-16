import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import './ListProperty.css'
import First from './form/First';
import Second from './form/Second';
import Third from './form/Third';
import axiosClient from '../../axios-client';
import Forth from './form/Forth';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'
import {MdDone} from 'react-icons/md'
import Room from './form/Room';
const ListProperty = () => {
    const user=useSelector(state=>state.auth.user)
    const navigate=useNavigate();
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },)


    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        city: "",
        address: "",
        center: 0,
        beach: 0,
        subtitle: "",
        description: "",
        min_price: 0,
        rooms: 0,
        rate: 0,
        images:[],


        room_number:0,
        max_people: 1,
        price_night:0,
        details:''





    });

    const FormTitles = ["Get started with the basics :", "Tell us about your property :","Get us more informations:", "Take some images :",'Add room:'];

    const PageDisplay = () => {
        if (page === 0) {
        return <First formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
        return <Second formData={formData} setFormData={setFormData} />;
        } else if(page==2) {
        return <Third formData={formData} setFormData={setFormData} />;
        }
        else if(page==3) {
            return <Forth formData={formData} setFormData={setFormData} />;
            }
        else{
        return <Room formData={formData} setFormData={setFormData} />;
        }
    };



const [load,setLoad]=useState(false);
const [success,setSuccess]=useState(false)

const nextHandel=() => {
    if (page === FormTitles.length - 1) {
        setLoad(true)
        axiosClient.post('/hotel', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(({data}) => {
            setLoad(false)
            setSuccess(true)
        })
        .catch(err => {
            setLoad(false)
        })
    } else {
        setPage((currPage) => currPage + 1);
    }
    }


    return (
        <div>
            <Navbar/>
            <Header page='hotels'/>
            <div className="path-container">
                <div className="path-hotels">
                    <span>Home </span>
                    <code>{'>'} </code>
                    <span className='path-resluts'>Listing Property</span>
                </div>
            </div>
            {success?
            <Fade>
                <div className='success-container'>
                <div className='success'>
                    <h1>
                        <MdDone />
                    </h1>
                    <h2>Success</h2>
                    <div>
                        Your item has been posted successfully
                    </div>
                    <Link to='/'>Home</Link>
                </div>
                </div>
            </Fade>
            :
            <div className="form">
                <div className="form-container">
                    <div class="progress-container">
                        <div class="pro-container">
                            <div id="progress-bar" style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "60%" : page == 3 ? '80%':'100%' }}></div>
                            <div class={page >= 0 ? "cirxle active":'cirxle'}>1</div>
                            <div class={page >= 1 ? "cirxle active":'cirxle'}>2</div>
                            <div class={page >= 2 ? "cirxle active":'cirxle'}>3</div>
                            <div class={page >= 3 ? "cirxle active":'cirxle'}>4</div>
                            <div class={page == 4 ? "cirxle active":'cirxle'}>5</div>
                        </div>
                    </div>
                    <div className="header-form">
                        <h1>{FormTitles[page]}</h1>
                    </div>
                    <div className="body-form">
                        {PageDisplay()}
                    </div>
                    <div className="footer-form">
                        <button
                            class="btn" id="prev"
                            disabled={page == 0}
                            onClick={() => {
                            setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            class="btn" id="next"
                            onClick={nextHandel}
                            disabled={load}
                        >
                            {load?'submiting...':<span>{page === FormTitles.length - 1 ? "Submit" : "Next"}</span>}

                        </button>
                    </div>
                </div>
            </div>

            }
        </div>
     );
}

export default ListProperty;
