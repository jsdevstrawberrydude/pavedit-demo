import { useState } from 'react';
import CandidateCard from './CandidateCard';
function RecruiterJobPanel(props) {
    const [state, setState] = useState(false);
    const openCard = () => {
        setState(!state);
    }
    return (
        <div className="RecruiterJobPanel" onClick={openCard}>
            <a href={props.job.link}><h3>{props.job.title}</h3></a>
            <p>{props.job.company}</p>
            {state === true ? <>
                {props.job.candidates.map((candidate, index) => (
                    <CandidateCard candidate={candidate} key={index} />
                ))}
            </> : null}
        </div>
    );
}

export default RecruiterJobPanel;
