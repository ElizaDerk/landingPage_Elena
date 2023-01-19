import Navbar from "./Navbar/Navbar";
import "./Hero.css";


const Hero = () => {
    return(
        <div className="first-block">
            <Navbar />
            <div className="hero-text">
                <h1>КОЖНА ДЕТАЛЬ МАЄ ЗНАЧЕННЯ</h1>
                <p> Sova робить все: експозиції, що вражають, інноваційне пакування, книги про мистецтво, відзначені нагородами, прямі розсилки, які дають результати, що завгодно — і наша команда завжди готова до нових викликів.</p>
            </div>
        </div>

    )

}

export default Hero;
