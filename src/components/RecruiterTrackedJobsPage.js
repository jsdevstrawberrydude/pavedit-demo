import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import RecruiterJobListItem from "./RecruiterJobListItem";

function RecruiterTrackedJobsPage() {
    const context = useContext(AppContext);
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        setJobs([...context.state.jobs.filter(j => context.state.recruiterProfile.trackedJobs.includes(j.id))])
    }, [
        context.state.recruiterProfile.trackedJobs
    ])
    return (
        <div className="RecruiterTrackedJobsPage">
            <h1>Here are the jobs you are tracking :</h1>
            <div className="results">
                {jobs.map((job, index) => (
                    <RecruiterJobListItem job={job} key={index} />
                ))}
            </div>
        </div>
    )
}
export default RecruiterTrackedJobsPage;