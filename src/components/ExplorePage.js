import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import CertificateCard from "./CertificateCard";
const offset = 5;

function ExplorePage() {
    const context = useContext(AppContext);
    const [car, setCar] = useState([]);
    const [page, setPage] = useState(0);
    const [save, setSave] = useState(0);
    const [saveCar, setSaveCar] = useState([]);
    useEffect(() => {
        setCar([...context.state.certificates.slice(page * offset, page * offset + 5)])
    }, [page])
    useEffect(() => {
        const temp = context.state.certificates.filter(c => context.state.profile.savedCerts.includes(c.id))
        setSaveCar([...temp.slice(save * offset, save * offset + 5)])
    }, [save, context.state.profile.savedCerts])

    const movePage = (direction) => {
        if (direction === -1) {
            if (page !== 0) {
                setPage(page + direction);
            }
        } else {
            if (page !== Math.floor(context.state.certificates.length / offset)) {
                setPage(page + direction);
            }
        }
    }
    const moveSave = (direction) => {
        if (direction === -1) {
            if (save !== 0) {
                setSave(save + direction);
            }
        } else {
            if (save !== Math.floor(context.state.profile.savedCerts.length / offset)) {
                setSave(save + direction);
            }
        }
    }
    return (
        <div className="ExplorePage">
            <h1>Here are some certificates required for : {context.state.profile.position} jobs </h1>
            <div className="certificate-carousel">
                <button onClick={() => movePage(-1)}>&lt;</button>
                <div className="actual-car">
                    {car.map((v, i) => (
                        <CertificateCard key={i} cert={v} />
                    ))}
                </div>
                <button onClick={() => movePage(1)}>&gt;</button>
            </div>

            {context.state.profile.savedCerts.length ? <><h1>Your Saved Certificates</h1><div className="certificate-carousel">
                <button onClick={() => moveSave(-1)}>&lt;</button>
                <div className="actual-car">
                    {saveCar.map((v, i) => (
                        <CertificateCard key={i} cert={v} />
                    ))}
                </div>
                <button onClick={() => moveSave(1)}>&gt;</button>
            </div></> : null}
        </div>
    )
}
export default ExplorePage;