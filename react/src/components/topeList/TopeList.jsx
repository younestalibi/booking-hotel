import "./TopList.css";

const TopList = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
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
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
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
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
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
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1"
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
