import "./FirstSection.css"
import logo from "../img/logo1.png"

const FirstSection = () => {
    return(
        <div className="container" id="t2">
            <img src={logo} alt="logo" className='logo'/>
            <p className="text-first-section one">
                Від надання друку книг, звітів про посібники та курсів до пропозиції рішень для освітніх заходів, таких як лекції та презентації,
                де ми можемо постачати плакати, банери, ярлики з іменами тощо.
            </p>

            <p className="text-first-section two">
                Ми надаємо матеріали, які допоможуть вам у вашій роботі та тому, чого ви прагнете досягти.
                Окрім промоції навчальних закладів, ми тут і для їхніх учнів.  Ми маємо давню традицію друкувати дисертації, звіти та портфоліо на замовлення.
            </p>
        </div>
    )
}
export default FirstSection;
