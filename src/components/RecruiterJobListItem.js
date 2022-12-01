import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function RecruiterJobListItem(props) {
    const context = useContext(AppContext);
    const och = () => {
        context.setState({ ...context.state, selectedJob: props.job, recruiterView: "jobdetail" })
    }
    return (
        <div className="RecruiterJobListItem" onClick={och}>
            <h2>{props.job.title}</h2>
            <p>{props.job.company}</p>
        </div>
    )
}
export default RecruiterJobListItem;