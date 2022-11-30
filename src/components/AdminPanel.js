import { AppContext } from "../context/AppContext";
import { useContext, useState } from 'react';
function AdminPanel() {
    const context = useContext(AppContext);
    const [slide, setSlide] = useState(1);
    const switchView = (param) => {
        context.setState({ ...context.state, currentUser: param })
    }
    const onChangeHandler = (event) => {
        setSlide(parseInt(event.target.value))
    }
    const addCert = () => {
        const temp = { ...context }
        const tempCertificates = new Set([...context.state.profile.certificates]);
        tempCertificates.add(slide)
        const tempAppliedJobs = new Set();
        const tempJobs = [...context.state.jobs]
        for (let job of tempJobs) {
            if (tempCertificates.has(job.certId)) {
                tempAppliedJobs.add(job.id);
                job.candidates.push(context.state.profile)
            }
        }
        context.setState({ ...context.state, jobs: [...tempJobs], profile: { ...context.state.profile, appliedJobs: [...Array.from(tempAppliedJobs)], certificates: [...Array.from(tempCertificates)] } })
    }
    return (
        <div className="AdminPanel">
            <p>Admin Controls</p>
            <input type="number" min="1" max="10" onChange={onChangeHandler} />
            <button onClick={addCert}>Add Certificate</button>
            <br></br>
            {/* <button onClick={() => switchView("candidate")}>Switch to Candidate</button>
            <br></br> */}
            {/* <button onClick={() => switchView("recruiter")}>Switch to Recruiter</button> */}
        </div>
    );
}

export default AdminPanel;
