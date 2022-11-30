import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import qr_code from '../assets/qr_code.png';
function CertificateCard(props) {
    const context = useContext(AppContext);
    const och = () => {
        window.open(props.cert.link, '_blank', 'noopener,noreferrer');
    }
    const saveCert = () => {
        context.setState({ ...context.state, profile: { ...context.state.profile, savedCerts: [...context.state.profile.savedCerts, props.cert.id] } })
    }
    const removeCert = () => {
        context.setState({ ...context.state, profile: { ...context.state.profile, savedCerts: context.state.profile.savedCerts.filter(c => c.id !== props.cert.id) } })
    }
    return (
        <div className="CertificateCard" >
            <img src={qr_code} alt="qr_code" onClick={och} />
            <h3>Certificate {props.cert.id}</h3>
            <div className="icons">
                {context.state.profile.certificates.includes(props.cert.id) ? <span class="material-symbols-outlined green">
                    done
                </span> : <span class="material-symbols-outlined white">
                    done
                </span>}
                {context.state.profile.savedCerts.includes(props.cert.id) ? <span class="material-symbols-outlined blue">
                    bookmark_added
                </span> : <span class="material-symbols-outlined gray" onClick={saveCert}>
                    bookmark
                </span>}
            </div>
        </div>
    )
}
export default CertificateCard;