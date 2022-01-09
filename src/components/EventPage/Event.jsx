import Header from "../NavBar/NavBar"
import SearchNav from "../SearchNav/SearchNav";
import EventPage from "./EventPage";
import Footer from "../Footer/Footer";

export default function Event(){

    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <SearchNav />
                
            </div>
            <EventPage />
            <Footer />
            
        </div>
    )
}