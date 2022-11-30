import { AppContext } from "../context/AppContext";
import { useContext, useState } from 'react';
import AutoCompleter from "./AutoCompleter";
function Home() {
    const context = useContext(AppContext);
    const [state, setState] = useState("")

    const onChangeHandler = (event) => {
        context.setState({ ...context.state, searchParam: event.target.value })
    }
    const onClickHandler = (event) => {
        context.setState({ ...context.state, showAutoComplete: 0, currentView: "search", atHome:false })
    }
    return (
        <div className="Home">
            <h1><span className="orange">&lt;/</span>pavedit<span className="orange">&gt;</span></h1>
            <div className="inputs">
                <input type="text" onChange={onChangeHandler} value={context.state.searchParam} />
                <button onClick={onClickHandler}><span className="material-symbols-outlined" >
                    search
                </span></button>
            </div>
            <AutoCompleter />
        </div>
    );
}

export default Home;
