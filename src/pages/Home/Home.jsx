
import './Home.css'
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from '/hero_banner.jpg';
import hero_title from './../../assets/hero_title.png';
import play_icon from './../../assets/Play_icon.png';
import info_icon from './../../assets/info_icon.png';
import TitleCard from '../../components/TitleCard/TitleCard';


const Home = () => {
  return (
    <div>
        <Navbar />

        <div className="hero">
          <img src={hero_banner} alt="" className='banner_img'/>
          <div className='hero-caption'>
            <img src={hero_title} alt="" className='caption-img'/>
            <p>Discovering his ties to a secret ancient order, 
              a young man living in modern Istanbul embarks on
               a quest to save the city from an immortal enemy. </p>
               <div className='hero-btns'>
                <button className='btn'><img src={play_icon} alt=""/>Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
               </div>
               <TitleCard />
          </div>
        </div>
    </div>
  )
}

export default Home