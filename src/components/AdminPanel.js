import { AppContext } from "../context/AppContext";
import { useContext, useState } from 'react';
function AdminPanel() {
    const context = useContext(AppContext);
    const [slide, setSlide] = useState(1);
    const switchView = (param) => {
        context.setState({ ...context.state, currentUser: param })
    }
    const onChangeHandler = (event) => {
        console.log(event.target.value)
        setSlide(parseInt(event.target.value))
    }
    const addCert = () => {
        const temp = { ...context.state }
        temp.profile.certificates.push(slide)
        temp.profile.matchedJobs = []
        for (let job of context.state.jobs) {
            if (context.state.profile.certificates.includes(job.certId)) {
                temp.profile.matchedJobs.push(job);
                job.candidates.push(context.state.profile)
            }
        }
        console.log(temp.profile.matchedJobs)
        context.setState({ ...temp })
    }
    return (
        <div className="AdminPanel">
            <p>Admin Controls</p>
            <input type="number" min="1" max="10" onChange={onChangeHandler} />
            <button onClick={addCert}>Add Certificate</button>
            <br></br>
            <button onClick={() => switchView("candidate")}>Switch to Candidate</button>
            <br></br>
            <button onClick={() => switchView("recruiter")}>Switch to Recruiter</button>
        </div>
    );
}

export default AdminPanel;
