import CitiesList from '../../components/citiesList/citiesList';
import Email from '../../components/email/Email';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import Offers from '../../components/offers/Offers';
import PropertyList from '../../components/propertyList/PropertyList';
import TopList from '../../components/topeList/TopeList';
import './Home.css'
const Home = () => {
    return (
        <div>
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

            </div>
        </div>
     );
}

export default Home;
