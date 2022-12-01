import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function RecruiterApplicantRow(props) {
    const context = useContext(AppContext);
    const [check, setCheck] = useState(0);
    const removeApplicant = () => {
        const job = props.job;
        job.candidates = job.candidates.filter(c => c !== props.applicant.id)
        context.setState({ ...context.state, jobs: [...context.state.jobs.filter(j => j.id !== props.job.id), job] })
    }
    const checkApplicant = () => {
        setCheck(!check);
    }
    return (
        <div className="RecruiterApplicantRow">
            <a href={props.applicant.resumeLink} target="_blank"><h4>{props.applicant.firstName} {props.applicant.lastName}</h4></a>
            <div className="buttons">
                <button onClick={checkApplicant}>
                    {check ?
                        <span className="material-symbols-outlined green">
                            done
                        </span> :
                        <span className="material-symbols-outlined gray">
                            done
                        </span>}
                </button>
                <button onClick={removeApplicant}>
                    <span className="material-symbols-outlined red">
                        close
                    </span>
                </button>
            </div>
        </div>
    )
}
export default RecruiterApplicantRow;