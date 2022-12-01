import { AppContext } from "../context/AppContext";
import { useContext } from 'react';
function NavBar() {
    const context = useContext(AppContext);
    const onClickHandler = (param) => {
        if (param === "search") {
            context.setState({ ...context.state, currentView: param, atHome: true })
        } else {
            context.setState({ ...context.state, currentView: param })
        }
    }
    const ronClickHandler = (param) => {

        context.setState({ ...context.state, recruiterView: param })
    }
    return (
        <div className="NavBar">
            <h1><span className="orange">&lt;/</span>pavedit<span className="orange">&gt;</span></h1>
            {context.state.currentUser === "candidate" ? <>
                <button className={context.state.currentView === "search" ? "header selected" : "header"} onClick={() => onClickHandler("search")}>Search</button>
                <button className={context.state.currentView === "about" ? "header selected" : "header"} onClick={() => onClickHandler("about")}>About</button>
                <button className={context.state.currentView === "explore" ? "header selected" : "header"} onClick={() => onClickHandler("explore")}>Explore</button>
                <button className={context.state.currentView === "matches" ? "header selected" : "header"} onClick={() => onClickHandler("matches")}>Matches</button>
                <button className={context.state.currentView === "profile" ? "header selected" : "header"} onClick={() => onClickHandler("profile")}>Profile</button>
            </> : <>
                <button className={context.state.recruiterView === "about" ? "header selected" : "header"} onClick={() => ronClickHandler("about")}>About</button>
                <button className={context.state.recruiterView === "jobs" ? "header selected" : "header"} onClick={() => ronClickHandler("jobs")}>Tracked Jobs</button>
                <button className={context.state.recruiterView === "profile" ? "header selected" : "header"} onClick={() => ronClickHandler("profile")}>Profile</button>
            </>}

        </div>
    );
}

export default NavBar;
