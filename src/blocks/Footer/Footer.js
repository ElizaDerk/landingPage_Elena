import "./Footer.css"
import sign from "../img/next.svg";
import briefcase from "../img/briefcase.svg";
import mail from "../img/mail.svg";
import facebook from "../img/facebook-logo-in-circular-button-outlined-social-symbol.svg";
import twitter from "../img/twitter-circular-button.svg";


const Footer = () => {
    return(
        <div>
            <div className="contact-block" id="t5">
                <div className="contact-item white">
                    <img src={briefcase} alt="sign"/>
                    <h3 className="footer-title">Хочеш працювати з нами?</h3>
                    <p className="card-text">Дивовижно! Розкажіть нам про свій проект!</p>
                    <a href="mailto:oleg_makarenko@sovaprintua.com"><img src={sign} alt="sign"/></a>
                </div>
                <div className="contact-item green">
                    <img src={mail} alt="sign"/>
                    <h3 className="footer-title white-text">Дізнатися більше інформації</h3>
                    <p className="card-text" style={{color: "#373737"}}>Зателефонуйте нам!</p>
                    <a href="tel:+3590123456789"><img src={sign} alt="sign"/></a>
                </div>
            </div>
            <div className="footer">
                <p className="card-text">3rd Floor, Santa Monica Beach, CA, San Francisco</p>
                <div className="footer-address">
                    <a href="tel:+3590123456789">(359) 0 123 456 789</a>
                    <a href="mailto:oleg_makarenko@sovaprintua.com">info@yourmail.com</a>
                </div>
                {/*<div className="footer-contacts">*/}
                {/*    <a><img src={facebook} alt="sign"/></a>*/}
                {/*    <a><img src={twitter} alt="sign"/></a>*/}
                {/*</div>*/}
            </div>
        </div>
    )

}

export default Footer;
