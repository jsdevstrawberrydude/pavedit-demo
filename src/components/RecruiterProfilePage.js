import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function RecruiterProfilePage() {
    const context = useContext(AppContext);
    return (
        <div className="RecruiterProfilePage">
            <img className="profile-img" src={context.state.recruiterProfile.picture} alt="" />
            <h1>{context.state.recruiterProfile.firstName} {context.state.recruiterProfile.lastName}</h1>
            <h2>{context.state.recruiterProfile.company}</h2>
            <h3>{context.state.recruiterProfile.location}</h3>
            <br />
            <br />
        </div>
    )
}
export default RecruiterProfilePage;