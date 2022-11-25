import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import JobPanel from './JobPanel';
import RecruiterContent from './RecruiterContent';
function Content() {
    const context = useContext(AppContext);
    const onChangeHandler = (event) => {
        context.setState({ ...context.state, profile: { ...context.state.profile, [event.target.name]: event.target.value } })
    }
    return (
        <div className="Content">
            {context.state.currentUser === "candidate" ? <>
                {context.state.currentView === "about" ? <><p>
                    PavedIt is a platform designed to make the job search easier for those starting out
                    and getting into the job market. Job hunting is daunting especially for those that
                    may not have had opportunities to learn and grow with a steady career path. Life can
                    often be random and strewn with obstacles, but PavedIt is here to help.
                </p>
                    <p>
                        Often times when applying for jobs, there is some research involved to determine
                        which skills one may need to increase the chances of landing a job. PavedIt can
                        show what kind of certificates are required by jobs to help users target a specific skillset
                        and streamline the process of finding which certifications to acquire for jobs.
                    </p>
                    <p>
                        Once a user obtains a certificate and adds it to his/her/their profile, PavedIt will automatically
                        use the preferences of the user to apply to jobs requiring the certificate. This way the user
                        can focus more on obtaining the certificates and spend less time on having to apply to different jobs.
                        In the same regard, recruiters will be able to quickly see a pool of candidates that are automatically
                        matched via the certificate requirements and not have to go searching so much for candidates.
                    </p></> : null}
                {context.state.currentView === "explore" ? <>
                    <h1>Here are some certificates required for : {context.state.profile.position} jobs </h1>
                    <div className="certificate-list">
                        <ol>
                            {context.state.certificates.map((cert, index) => (
                                <li key={index}><a className="course-link" href={cert.link} >{cert.link}</a></li>
                            ))}
                        </ol>
                    </div>
                </> : null}
                {context.state.currentView === "matched jobs" ? <>
                    <h1>Here are the jobs you have been applied for:</h1>
                    {context.state.profile.matchedJobs.map((job, index) => (
                        <JobPanel job={job} key={index} />
                    ))}

                </> : null}
                {context.state.currentView === "profile" ? <>
                    <img src={context.state.profile.picture} alt="" />
                    <h1>{context.state.profile.firstName} {context.state.profile.lastName}</h1>
                    <h3>I want to be a:</h3>
                    <input type="text" name="position" placeholder={context.state.profile.position} />
                    <h3>I am looking for jobs in:</h3>
                    <input type="text" name="location" placeholder={context.state.profile.location} />
                    <br />
                    <br />
                    <button>Upload Resume</button>
                </> : null}
            </> : <RecruiterContent />}

        </div>
    );
}

export default Content;
