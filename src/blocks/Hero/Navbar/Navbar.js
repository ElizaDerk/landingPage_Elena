import {useState} from "react";
import MenuBurger from "./MenuBurger";
import logo from "../../img/logo.png"

const Navbar = () =>{

    // const [navbarOpen, setNavbarOpen] = useState(false)
    // const handleToggle = () => {
    //     setNavbarOpen(!navbarOpen)
    // }

    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {value:"ПРО НАС", href: '#t2'},
        {value:"ПОСЛУГИ", href: '#t3'},
        {value:"КОНТАКТИ", href: '#t5'}
    ]

    return(
        <div className="navigation">
            <img src={logo} alt="logo" height="80px" />
            <div className="nav-items">
                <a href="#t2" className="nav-item">ПРО НАС</a>
                <a href="#t3" className="nav-item">ПОСЛУГИ</a>
                <a href="#t5" className="nav-item">КОНТАКТИ</a>
            </div>

           <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span />
           </div>

           <MenuBurger active={menuActive} setActive={setMenuActive} items={items}/>


            {/*<nav className="navBar">*/}
            {/*    <button onClick={handleToggle}>{navbarOpen ? "x" : "="}</button>*/}
            {/*    <ul className={`menuNav ${navbarOpen ? " showMenu" : " "}`}>*/}
            {/*        <a href="#t2" className="nav-item">ABOUT</a>*/}
            {/*        <a href="#t3" className="nav-item">SERVICES</a>*/}
            {/*        <a href="#t5" className="nav-item">CONTACT</a>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </div>
    )
 }

 export default Navbar;
