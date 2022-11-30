import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import JobListItem from "./JobListItem";

function MatchesPage() {
    const context = useContext(AppContext);
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        setJobs([...context.state.jobs.filter(j => context.state.profile.appliedJobs.includes(j.id))])
    }, [
        context.state.profile.appliedJobs
    ])
    return (
        <div className="MatchesPage">
            <h1>Here are the jobs you applied or have been applied for :</h1>
            <div className="results">
                {jobs.map((job, index) => (
                    <JobListItem job={job} key={index} />
                ))}
            </div>
        </div>
    )
}
export default MatchesPage;