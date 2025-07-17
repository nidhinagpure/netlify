import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Home from './../Home/Home';


const player = () => {

   const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setAipData] = useState({
    key: "",
    type: "",
    name: "",
    published_at: "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjIxZTI0MjNlMGRlNmFmZmQzZWMxYmI4NWJiN2RlMiIsIm5iZiI6MTc1MjY4OTg4Mi45NjgsInN1YiI6IjY4NzdlY2RhYjE1NzZjZWYyMGJhMWJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8gQ57AtoouVGfexMKG3xGxA88U1nQFvg9K3o-Sm9rU'
    }
  };

  useState(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setAipData(res.results[0]))
      .catch(err => console.error(err));
  }, [])



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={()=>{navigate('/')}} />
      <iframe width='80%' height='80%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default player