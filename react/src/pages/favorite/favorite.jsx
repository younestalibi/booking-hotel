import Navbar from '../../components/navbar/navbar'
import Email from '../../components/email/Email'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/header'
import { useDispatch, useSelector } from 'react-redux';
import { deletefavorite } from '../../data/favoriteSlice';
import {BsSearch} from 'react-icons/bs'
import './favorite.css'
import { Link } from 'react-router-dom';
const Favorite = () => {
    const selectedHotels = useSelector((state) => state.favorite.selectedHotels)
    const dispatch=useDispatch()

    return (
        <div>
            <Navbar/>
            <Header page='hotels'/>
            <div className='table-wrapper'>
                {selectedHotels.length==0?
                    <div className='savednotfound'>
                        <BsSearch size={30}/>
                        <h3>No saved hotels found  </h3>
                        <div>There are no saved hotels. Try searching for new hotels to save.</div>
                    </div>
                    :
                    <div className='table-container'>
                        <h1>Saved Hotels</h1>
                        <table className="favorite-table">
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Delete</th>

                        </tr>
                        {
                        selectedHotels.map((e,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{e.name}</td>
                                    <td>
                                        <img style={{width:'70px'}} src={e.images[0].image} alt="image" />
                                    </td>
                                    <td>{`${e.min_price} MAD`}</td>
                                    <td>
                                        <Link to={`/hotels/${e.id}`} className="btn" >
                                        Visit
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn delete" onClick={()=>{dispatch(deletefavorite(e.id))}}>
                                        delete
                                        </button>
                                    </td>

                                </tr>
                            )
                        })
                        }
                        </table>
                    </div>
                }
            </div>
            <Email/>
            <Footer/>

        </div>
     );
}

export default Favorite;
