import Mailto from "../EventPage/Mailto";
import "./Footer.scss";
import logo from "../../images/WTD-logo-color.png";

export default function Footer(){

    return(
        <div className="footer">
            <div className="container">
              
                <div className="contact">
                    <p className="contact-whattodo">Contact WHATTODO</p>
                    <hr className="line" />
                    <Mailto email="info@whattodo.de" body="Hello!" className="whattodo-email">
                      <p>info@whattodo.de</p> 
                    </Mailto>
                    <p>+4916783830918</p>
                    <hr className="line" />
                </div>  
                <div className="links-copyright">
                    <p>Disclaimer</p>
                    <hr className="line" />
                    <p>Privacy</p>
                    <hr className="line" />
                    <p className="copyright">	&copy; 2021 WHATTODO</p>
                </div>
                <div className="logo-footer">
                    <img src={logo} alt ="Logo WhatToDo" />
                </div>
                </div>
        </div>
    );
}