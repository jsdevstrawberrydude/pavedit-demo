import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from 'react';
function AutoCompleter() {
    const context = useContext(AppContext);
    const [state, setState] = useState([])
    useEffect(() => {
        const jobSet = Array.from(new Set(context.state.jobs.map((v,i) => v.title)))

        if (context.state.searchParam !== "") {
            setState(jobSet.filter((j) => j.toLowerCase().includes(context.state.searchParam.toLowerCase())))
            if (context.state.showAutoComplete !== 2)
                context.setState({ ...context.state, showAutoComplete: 1 });
        } else {
            context.setState({ ...context.state, showAutoComplete: 0 });
        }
    }, [context.state.searchParam])
    const selectRow = (event) => {
        context.setState({ ...context.state, searchParam: event.target.innerText, showAutoComplete: 2 })
    }
    return (
        <div className="AutoCompleter">
            {context.state.showAutoComplete === 1 ? <>
                <div className="autocompleter-box">
                    {state.map((v, i) => (i < 5 ?
                        <div className="autocomplete-row" key={i} onClick={selectRow}>
                            {v}
                        </div> : null
                    ))}
                </div>
                <div className="placeholder"></div>
            </> : null}
        </div>
    );
}

export default AutoCompleter;
