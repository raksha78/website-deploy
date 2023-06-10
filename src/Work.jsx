import Accordion from './Accordion.jsx';
import Gallery from './Gallery.jsx';
import './Work.css';
import SubjectCards from "./SubjectCards.jsx"

function Work() {
     return (
          <div className="work-sample">
               <div className="course-work">
                    <div className="description">
                         <span className="title">Studies</span>
                         <br />
                         <span className="text">Relevent Coursework</span>
                    </div>
                    <div className="main-card"><span className="main-card-title">Master of Science in Computer Software Engineering</span>
                         <div className="card-holder">
                              <SubjectCards type="Masters" />
                         </div>
                    </div>
                    <div className="main-card"><span className="main-card-title">Bachelor of Engineering in Information Science</span>
                         <div className="card-holder">
                              <SubjectCards type="Bachelors" />
                         </div>
                    </div>
               </div>
               <div className="projects">
                    <div className="description">
                         <span className="title">Work</span>
                         <br />
                         <span className="text">Projects</span>
                    </div>
                    <Accordion />
               </div>
               <div className="description">
                    <span className="title">Tech Stack</span>
               </div>
               <Gallery />
          </div>
     );
}

export default Work;