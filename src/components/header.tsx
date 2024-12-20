import logoimage from "../assets/images/Logo.png"
import "../assets/styles/font.css";
import "../assets/styles/color.css";

function Header() {
    return (
        <>
            <div className="container-xl mx-40 mt-8 grid grid-cols-12 items-center gap-4" id="header">
                <div className="col-span-2">
                    <a href="/"><img src={logoimage} alt="logo-website" /></a>
                </div>
                <div className="navbar col-start-4 col-span-6 flex items-center justify-between">
                    <a className="text-montserrat text-white" href="#home">Início</a>
                    <a className="text-montserrat text-white" href="#specialty">Especialidades</a>
                    <a className="text-montserrat text-white" href="#aboutMe">Sobre mim</a>
                    <a className="text-montserrat text-white" href="#portfolio">Projetos</a>
                </div>
                <div className="col-start-11 col-span-2">
                    <a className="px-9 py-4 rounded-2xl background-quaternary text-montserrat text-white" href="#contact">Contato</a>
                </div>
            </div>
        </>
    );
}

export default Header;