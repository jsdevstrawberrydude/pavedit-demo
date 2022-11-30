import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import CertificateCard from "./CertificateCard";
const offset = 5;
function JobDetails(props) {
    const context = useContext(AppContext);
    const [car, setCar] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        setCar([...context.state.certificates.slice(page * offset, page * offset + 5)])
    }, [page])

    const movePage = (direction) => {
        if (direction === -1) {
            if (page !== 0) {
                setPage(page + direction);
            }
        } else {
            if (page !== Math.floor(context.state.certificates.length / offset)) {
                setPage(page + direction);
            }
        }
    }
    const och = () => {
        context.setState({ ...context.state, profile: { ...context.state.profile, appliedJobs: [...context.state.profile.appliedJobs, props.job.id] } })
    }
    return (
        <div className="JobDetails">
            <h1>{props.job.title}</h1>
            <h2>{props.job.company}</h2>
            <p>{props.job.location}</p>
            <p>{props.job.description}</p>
            <h2>Recommended Certifications for this job</h2>
            <div className="certificate-carousel">
                <button onClick={() => movePage(-1)}>&lt;</button>
                <div className="actual-car">
                    {car.map((v, i) => (
                        <CertificateCard key={i} cert={v} />
                    ))}
                </div>
                <button onClick={() => movePage(1)}>&gt;</button>
            </div>

            {context.state.profile.appliedJobs.includes(props.job.id) ?
                <div className="applied"><span class="material-symbols-outlined green">
                    done
                </span><p className="green">Applied!</p></div> : <button className="blue-button" onClick={och}>Apply</button>}

        </div>
    )
}
export default JobDetails;