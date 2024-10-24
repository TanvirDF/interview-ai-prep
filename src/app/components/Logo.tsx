import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons"

export const Logo = () => { 
    return (
        <div className="text-2xl text-center py-4 font-heading">
            Ai-Interview Prep
            <FontAwesomeIcon icon={faHandshakeAngle} className="text-2xl text-slate-400 pl-2"/>
        </div>
    );
}