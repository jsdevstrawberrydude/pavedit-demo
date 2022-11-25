import { useState } from 'react';
function CandidateCard(props) {
    return (
        <div className="CandidateCard">
            <a href={props.candidate.resumeLink}><h3>{props.candidate.firstName} {props.candidate.lastName}</h3></a>
        </div>
    );
}

export default CandidateCard;
