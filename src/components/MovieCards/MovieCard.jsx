import './MovieCards.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';


const MovieCard = ({ movieTitle, category }) => {

    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjIxZTI0MjNlMGRlNmFmZmQzZWMxYmI4NWJiN2RlMiIsIm5iZiI6MTc1MjY4OTg4Mi45NjgsInN1YiI6IjY4NzdlY2RhYjE1NzZjZWYyMGJhMWJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8gQ57AtoouVGfexMKG3xGxA88U1nQFvg9K3o-Sm9rU'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className='title-cards'>
            <h2>{movieTitle}</h2>
            <div className="card-list">
                <Slider {...settings}>
                    {apiData.map((cards, index) => {
                        return <div className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500`+cards.backdrop_path} alt="" />
                            <p>{cards.original_title}</p>
                        </div>
                    })}
                </Slider >
            </div>
        </div>

    );
};


export default MovieCard;