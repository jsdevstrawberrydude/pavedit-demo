import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Dummy() {
    const context = useContext(AppContext);
    return (
        <div className="Dummy">

        </div>
    )
}
export default Dummy;