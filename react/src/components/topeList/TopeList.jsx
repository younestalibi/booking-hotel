import "./TopList.css";

const TopList = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">6 Continents Apartments by Prague Residences</span>
        <span className="fpCity">Prague 1, Czech Republic, Prague</span>
        <span className="fpPrice">Starting from <b>$120</b></span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
          <span> 250 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">3 Epoques Apartments by Prague Residences</span>
        <span className="fpCity">Prague 1, Czech Republic, Praha 1</span>
        <span className="fpPrice">Starting from <b>$140</b></span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
          <span> 240 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpPrice">Starting from <b>$99</b></span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
          <span> 350 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Centro, Spain, Madrid</span>
        <span className="fpPrice">Starting from <b>$105</b></span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
          <span> 210 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default TopList;
