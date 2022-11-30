import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProfilePage() {
    const context = useContext(AppContext);
    return (
        <div className="ProfilePage">
            <h1>{context.state.profile.firstName} {context.state.profile.lastName}</h1>
            <h3>I want to be a:</h3>
            <input type="text" name="position" placeholder={context.state.profile.position} />
            <h3>I am looking for jobs in:</h3>
            <input type="text" name="location" placeholder={context.state.profile.location} />
            <br />
            <br />
            <button>Upload Resume</button>
        </div>
    )
}
export default ProfilePage;