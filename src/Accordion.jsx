import './Accordion.css';
import { useState } from 'react';
import ProjectList from './Projects.js';

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  }

  const displayDescription = isOpen ? "appear" : "disappear";
  const displayStack = buttonClicked ? "appear" : "disappear";

  const list = ProjectList.map(
    (item, index) => {
      return (
        <div className="accordion">
          <div key={index} className="accordion-header" onClick={handleClick}>
            {item.title}
            <span>{isOpen ? "-" : "+"}</span>
          </div>
          <div className={`accordion-content ${displayDescription}`}>
            {item.description}
            <button className="accordion-button" onClick={handleButtonClick} aria-label="accordion-heading">
              <span>{buttonClicked ? "Show less" : "Read more.."}</span>
            </button>
            <ul className={`accordion-list ${displayStack}`}>
              <h4>
                Tech Stack 
              </h4>
              {item.techStack.map((item, index) => (
                <li key={index} className="accordion-list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  )

  return (
    <div className="accordion-holder">
      {list}
    </div>
  );

}

export default Accordion;
