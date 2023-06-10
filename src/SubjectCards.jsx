import "./SubjectCards.css";
import SubjectList from "./SubjectList.js";

function SubjectCards({ type }) {
    const list = SubjectList.map(
        (item, index) => {
            return (
                type === "Masters" ?
                    item.group === "Masters" &&
                    <div className="card" key={index}>
                        <span className="card-title">{item.title}</span><br />
                        <span className="card-text">{item.text}</span>
                    </div> :
                    item.group === "Bachelors" &&
                    <div className="card" key={index}>
                        <span className="card-text">{item.text}</span>
                    </div>
            );
        }
    )
    return (
        <>
            {list}
        </>
    );
}

export default SubjectCards;