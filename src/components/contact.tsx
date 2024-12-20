import "../assets/styles/font.css";
import "../assets/styles/color.css";
import "../assets/styles/container-style.css";
import "../assets/styles/animations.css"

import IconTelephone from "../assets/images/IconTelephone.png";
import IconEmail from "../assets/images/IconEmail.png";
import IconLocation from "../assets/images/IconLocation.png";
import FormsContact from "./formsContact";


function Contact() {
    const copiarParaClipboard = (texto: string) => {
        navigator.clipboard
            .writeText(texto)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
            })
            .catch((err) => {
                console.error("Erro ao copiar texto: ", err);
            });
    };
    return (
        <>
            <div className="container-xl mx-40 mt-20 grid grid-cols-1 items-center gap-4" id="contact">
                <div className="title-montserrat text-white text-center col-span-1 mb-12">
                    <p>ENTRE EM CONTATO <span className="text-color-secondary">COMIGO</span></p>
                </div>
                <div className="content col-span-1 grid grid-cols-12 gap-4 items-center">
                    <div className="text-content col-span-7">
                        <p className="subtitle-inter text-white">
                            Me mande uma mensagem!
                        </p>
                        <p className="text-poppins text-color-primary mt-4">
                            Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At.
                        </p>
                        <div className="contacts mt-12">
                            <div className="telephone flex items-center mb-7" onClick={() => copiarParaClipboard("+55 (15) 92000-7681")}>
                                <img className="mr-5" src={IconTelephone} alt="telephone" />
                                <p className="subtitle-poppins text-white telephone-content">+55 (15) 92000-7681</p>
                            </div>
                            <div className="email flex items-center mb-7" onClick={() => copiarParaClipboard("erikmachado2008@gmail.com")}>
                                <img className="mr-5" src={IconEmail} alt="email" />
                                <p className="subtitle-poppins text-white email-content">erikmachado2008@gmail.com</p>
                            </div>
                            <div className="location flex items-center" onClick={() => copiarParaClipboard("Quadra-SP, 18255-000")}>
                                <img className="mr-5" src={IconLocation} alt="location" />
                                <p className="subtitle-poppins text-white location-content">Quadra-SP, 18255-000</p>
                            </div>
                        </div>
                    </div>
                    <FormsContact />
                </div>
            </div>
        </>
    );
}

export default Contact;