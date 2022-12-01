import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import RecruiterApplicantRow from "./RecruiterApplicantRow";
function RecruiterJobDetails(props) {
    const context = useContext(AppContext);
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        setCandidates(context.state.people.filter(p => props.job.candidates.includes(p.id)))
    }, [context.state])
    return (
        <div className="RecruiterJobDetails">
            <h1>{props.job.title}</h1>
            <h2>{props.job.company}</h2>
            <p>{props.job.location}</p>
            <p>{props.job.description}</p>
            <h2>Qualified Applicants for this Job :</h2>
            <div className="applicant-container">
                {candidates.map((v, i) => (
                    <RecruiterApplicantRow key={i} applicant={v} job={props.job} />
                ))}

            </div>


        </div>
    )
}
export default RecruiterJobDetails;