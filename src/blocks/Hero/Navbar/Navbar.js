import {useState} from "react";
import MenuBurger from "./MenuBurger";
import logo from "../../img/logo.png"

const Navbar = () =>{


    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {value:"ПРО НАС", href: '#t2'},
        {value:"ПОСЛУГИ", href: '#t3'},
        {value:"КОНТАКТИ", href: '#t5'}
    ]

    return(
        <div className="navigation">
            <img src={logo} alt="logo" className="logo-fst" />
            <div className="nav-items">
                <a href="#t2" className="nav-item">ПРО НАС</a>
                <a href="#t3" className="nav-item">ПОСЛУГИ</a>
                <a href="#t5" className="nav-item">КОНТАКТИ</a>
            </div>

           <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span />
           </div>

           <MenuBurger active={menuActive} setActive={setMenuActive} items={items}/>

        </div>
    )
 }

 export default Navbar;
