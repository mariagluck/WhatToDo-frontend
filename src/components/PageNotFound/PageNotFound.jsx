import React from "react";
import NavBarBroken from "./NavBarBroken";
import MainPageNotFound from "./MainPageNotFound";
import Footer from "../Footer/Footer";
import "./PageNotFound.scss";


export default function PageNotfound(){

    return(
        <div>
            <div className="page-not-found">
                <NavBarBroken />
                <MainPageNotFound />
            </div>
            <Footer />
        </div>
    )
}