import RegistrationText from "./RegistrationText"
import RegistrationForm from "./RegistrationForm"
import "./MainRegistration.scss"


export default function RegistrationPage(){

    return(
        <div className="main">
            <RegistrationText />
            <RegistrationForm />
        </div>
    )
}


