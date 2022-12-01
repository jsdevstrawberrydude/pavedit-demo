import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import RecruiterJobPanel from './RecruiterJobPanel';
import RecruiterProfilePage from './RecruiterProfilePage';
import RecruiterTrackedJobsPage from './RecruiterTrackedJobsPage';
import RecruiterJobDetails from './RecruiterJobDetails';
function RecruiterContent() {
    const context = useContext(AppContext);
    const onChangeHandler = (event) => {
        context.setState({ ...context.state, profile: { ...context.state.profile, [event.target.name]: event.target.value } })
    }
    return (
        <div className="RecruiterContent">
            {context.state.recruiterView === "about" ? <><p>
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
            {context.state.recruiterView === "jobs" ? <>
                <RecruiterTrackedJobsPage />
            </> : null}
            {context.state.recruiterView === "jobdetail" ? <>
                <RecruiterJobDetails job={context.state.selectedJob} />
            </> : null}
            {context.state.recruiterView === "profile" ? <>
                <RecruiterProfilePage />
            </> : null}
        </div>
    );
}

export default RecruiterContent;
