import Navbar from '../../components/navbar/navbar'
import Email from '../../components/email/Email'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/header'
import { Link, useNavigate } from 'react-router-dom'
import './Posts.css'
import { format } from "date-fns";
import {BsSearch} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client'
import { useSelector } from 'react-redux'
const Posts = () => {
    const [posts,setPosts]=useState([])
    const [load,setLoad]=useState(true)
    const user=useSelector(state=>state.auth.user)
    const navigate=useNavigate();
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },)
    useEffect(() => {
        async function test(e){
            axiosClient.get('/posts')
            .then(({data})=>{
                setPosts(data.hotels)
                setLoad(false)
            })
            .catch(({response})=>{
                setLoad(false)
            })
        }
        test();
      },[]);

    return (
        <div>
            <Navbar/>
            <Header page='hotels'/>
            <div className="path-container">
                <div className="path-hotels">
                    <span>Home </span>
                    <code>{'>'} </code>
                    <span className='path-resluts'>My-posts</span>
                </div>
            </div>
            {
                load?
                <div class="loader-posts"></div>
                :
                posts.length>0?
                <div className='posts-container'>
                <div className='posts-wrapper'>
                    <div className='posts-header'>
                        <div>Items</div>
                        <Link className='add-item' to='/list-property'>Add item</Link>
                    </div>

                    <div className='posts-body'>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Total rooms</th>
                            <th>Posted at</th>
                            <th>Add room</th>
                        </tr>
                        {posts.length>0 &&
                            posts.map((e,i)=>{
                                return (
                                    <tr key={i}>
                                        <td>
                                            <img className='post-image' src={`http://127.0.0.1:8000/storage/${e.images.length>0 ? e.images[0].image:'notExist'}`} alt="image" />
                                        </td>
                                        <td>{e.name}</td>
                                        <td>{e.type}</td>
                                        <td>{`${e.rooms.length} - rooms`}</td>
                                        <td>{format(new Date(e.created_at), "MM/dd/yyyy")}</td>
                                        <td>
                                            <Link className='add-room' to={`/addroom/${e.id}`}>Add room</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    </div>

                </div>
                </div>
                :
                <div className='posts-not-found'>
                    <BsSearch size={60}/>
                    <h3>You havent posted anything yet</h3>
                    <div>There are no posts. Try publish a new item.</div>
                    <Link className='add-item' to='/list-property'>Add item</Link>
                </div>
            }

            <Email/>
            <Footer/>
        </div>
     );
}

export default Posts;
