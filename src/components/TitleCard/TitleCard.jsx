import './TitleCard.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cards_data from '../../assets/cards/Cards_data';



const TitleCard = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className='title-card'>
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        <Slider {...settings}>
        {cards_data.map((cards, index)=>{
          return <div className="card" key={index}>
            <img src={cards.image} alt="" />
            <p>{cards.name}</p>
          </div>
        })}
        </Slider >

      </div>
    </div>

  );
};

export default TitleCard;