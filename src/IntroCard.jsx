import rak from './images/rak1.png';
import './IntroCard.css';

function IntroCard() {
    return (
        <div className="intro-card">
            <img className="intro-card-image" src={rak} alt='Rakshitha'></img>
            <h3 className="intro-card-title">
                Live. Love. Learn. Repeat.
            </h3>
            <span className="intro-card-text">
                <p>
                    My name is Rakshitha Gururaj, and I am a graduate student at Northeastern
                    university in Seattle with my major in Information Systems. For the past three years,
                    I have been working as a Software Engineer. I have strong skills in software
                    development with expertise in both front end and back end technologies.
                </p>
                <p>
                    In my free time, I enjoy hiking and exploring the outdoors. I am an avid reader
                    of science fiction and fantasy novels and also enjoy playing video games,
                    particularly those that involve strategy and problem-solving.
                    Additionally, I participate in coding challenges and hackathons, and enjoy
                    contributing to open-source software projects.
                </p>
            </span>
        </div>
    );
}

export default IntroCard;
