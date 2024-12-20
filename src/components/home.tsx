import me from "../assets/images/Me.png"
import "../assets/styles/font.css";
import "../assets/styles/color.css";

function Home() {
    return (
        <>
            <div className="container-xl mx-40 mt-24 grid grid-cols-12 items-center gap-4" id="home">
                <div className="me col-span-4">
                    <img src={me} alt="erik-machado-lopes" />
                </div>
                <div className="col-span-7 col-start-6">
                    <div className="my-name">
                        <p className="text-color-terniary subtitle-montserrat">OLÁ, MEU NOME É...</p>
                        <p className="text-white title-montserrat" >ERIK MACHADO LOPES</p>
                    </div>
                    <div className="content mt-6">
                        <p className="text-color-primary text-inter">Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.</p>
                    </div>

                    <div className="button mt-14">
                        <a className="px-12 py-5 rounded-2xl background-quaternary text-montserrat text-white" href="#">Entre em Contato</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;