import { AppContext } from "../context/AppContext";
import { useContext } from 'react';
function NavBar() {
    const context = useContext(AppContext);
    const onClickHandler = (param) => {
        context.setState({ ...context.state, currentView: param })
    }
    const ronClickHandler = (param) => {
        context.setState({ ...context.state, recruiterView: param })
    }
    return (
        <div className="NavBar">
            <h1><span className="orange">&lt;/</span>pavedit<span className="orange">&gt;</span></h1>
            {context.state.currentUser === "candidate" ? <>
                <button className={context.state.currentView === "about" ? "header selected" : "header"} onClick={() => onClickHandler("about")}>About</button>
                <button className={context.state.currentView === "explore" ? "header selected" : "header"} onClick={() => onClickHandler("explore")}>Explore</button>
                <button className={context.state.currentView === "matched jobs" ? "header selected" : "header"} onClick={() => onClickHandler("matched jobs")}>Matched Jobs</button>
                <button className={context.state.currentView === "profile" ? "header selected" : "header"} onClick={() => onClickHandler("profile")}>Profile</button>
            </> : <>
                <button className={context.state.recruiterView === "about" ? "header selected" : "header"} onClick={() => ronClickHandler("about")}>About</button>
                <button className={context.state.recruiterView === "jobs" ? "header selected" : "header"} onClick={() => ronClickHandler("jobs")}>Jobs</button>
                <button className={context.state.recruiterView === "profile" ? "header selected" : "header"} onClick={() => ronClickHandler("profile")}>Profile</button>
            </>}

        </div>
    );
}

export default NavBar;
