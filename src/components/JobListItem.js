import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function JobListItem(props) {
    const context = useContext(AppContext);
    const och = () => {
        context.setState({ ...context.state, selectedJob: props.job, currentView:"jobdetail" })
    }
    return (
        <div className="JobListItem" onClick={och}>
            <h2>{props.job.title}</h2>
            <p>{props.job.company}</p>
        </div>
    )
}
export default JobListItem;