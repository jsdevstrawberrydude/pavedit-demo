import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobListItem from "./JobListItem";


function JobPage() {
    const context = useContext(AppContext);
    return (
        <div className="JobPage">
            <h1>Search Results for {context.state.searchParam}</h1>
            <div className="results">
                {context.state.jobs.filter(j => j.title.toLowerCase().includes(context.state.searchParam.toLowerCase())).map((v, i) => (
                    <JobListItem key={i} job={v} />
                ))}
            </div>
        </div>
    );
};

export default JobPage;