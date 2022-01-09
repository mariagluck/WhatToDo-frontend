import RegNavBar from "./RegNavBar";
import MainRegistration from "./MainRegistration"
import Footer from "../Footer/Footer";
import "./RegistrationPage.scss"


export default function RegistrationPage(){

    return(
        <div>
            <div className="top">
            <RegNavBar />
                <MainRegistration />
            </div>
            <Footer />
        </div>
    )
}