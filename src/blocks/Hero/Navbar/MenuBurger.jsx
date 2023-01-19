import "./MenuBurger.css"

const MenuBurger = ({items, active, setActive}) => {
    return(
        <div onClick={() => setActive(false)} className={active ? 'menu active' : 'menu'}>
            {/*<div className="blur"></div>*/}
            <div className="menu__content">
                <ul>
                    {items.map(item =>
                        <li><a href={item.href}>{item.value}</a></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default MenuBurger;
