import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import CertificateCard from "./CertificateCard";
const offset = 5;

function ProfilePage() {
    const context = useContext(AppContext);
    const [car, setCar] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        setCar([...context.state.certificates.filter(c => context.state.profile.certificates.includes(c.id)).slice(page * offset, page * offset + 5)])
    }, [page])
    const movePage = (direction) => {
        if (direction === -1) {
            if (page !== 0) {
                setPage(page + direction);
            }
        } else {
            if (page !== Math.floor(context.state.profile.certificates.length / offset)) {
                setPage(page + direction);
            }
        }
    }
    return (
        <div className="ProfilePage">
            <h1>{context.state.profile.firstName} {context.state.profile.lastName}</h1>
            <h3>Job Preference:</h3>
            <input type="text" name="position" placeholder={context.state.profile.position} />
            <h3>Location Preference:</h3>
            <input type="text" name="location" placeholder={context.state.profile.location} />
            <br />
            <br />
            <button>Upload Resume</button>
            <h1>Completed Certificates</h1>
            <div className="certificate-carousel">
                <button onClick={() => movePage(-1)}>&lt;</button>
                <div className="actual-car">
                    {car.map((v, i) => (
                        <CertificateCard key={i} cert={v} />
                    ))}
                </div>
                <button onClick={() => movePage(1)}>&gt;</button>
            </div>
        </div>
    )
}
export default ProfilePage;