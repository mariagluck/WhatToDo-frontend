import LoginNavBar from "./LoginNavBar";
import MainLogin from "./MainLogin";
import Footer from "../Footer/Footer";
import "./LoginPage.scss"


export default function LoginPage(){

    return(
        <div>
        <div className="top">
            <LoginNavBar />
            <MainLogin />
        </div>
        <Footer />
        </div>
    )
}