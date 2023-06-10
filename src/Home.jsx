import './Home.css';
import cover from './images/wave2.jpg';
import TextCarousel from './TextCarousel.jsx';
import IntroCard from './IntroCard.jsx';

function Home() {
    return (
        <div className="home">
            <div className="cover">
                <img className="cover-image" src={cover} alt='Waves'></img>
                <h2 className="cover-title fade-in-text centered ">
                    Hi, I am Rakshitha..
                </h2>
                <span className="cover-sub-title">
                    Software Engineer | Graduate Student | Tech Enthusiast { }
                </span>
            </div>
            <TextCarousel />
            <IntroCard />
        </div>
    );
}

export default Home;