import Cards from "./Card";

const Services = () => {
    return(
        <div className="container-bg" id="t3">
            <div className="block">
                <h2 className="title-block">
                    Послуги
                </h2>

                <p className="about-text">
                    Друк, палітурка, оздоблення та все інше із захоплюючого світу друку!  Ми експерти!  Ми говоримо це не тому, що вміємо друкувати майже все, але ми накопичили багаторічний досвід і можемо допомогти вам вибрати найкращий спосіб втілити вашу роботу в життя!  Ми тут, щоб запропонувати вам послуги друку найвищої якості та найкращі поради від наших експертів!  Від нашого краківського офісу до нашого магазину, куди ми щойно повернулися у Львові, ми можемо надрукувати та закінчити все, від візитки до повної виставки.
                </p>

                <Cards />

            </div>
        </div>
    )
}

export default Services;
