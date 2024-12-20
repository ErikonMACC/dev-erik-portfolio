import "../assets/styles/font.css";
import "../assets/styles/color.css";
import "../assets/styles/container-style.css";

import IconYoutube from "../assets/images/IconYoutube.png";
import IconInstagram from "../assets/images/IconInstagram.png";
import IconLinkedin from "../assets/images/IconLinkedin.png";
import IconGithub from "../assets/images/IconGithub.png";
import logoimage from "../assets/images/Logo.png"

function Footer() {
    return (
        <>
            <div className="container-box shadow-2xl">
                <div className="container-xl mx-40 mt-24 grid grid-cols-12 items-center gap-4 h-32" id="footer">
                    <div className="col-span-2">
                        <a href="#header"><img src={logoimage} alt="logo-website" /></a>
                    </div>
                    <div className="copyright col-start-4 col-span-6 text-center text-inter text-white">2024 - 2025 | Erik Machado Lopes© | All rights reserved</div>
                    <div className="col-start-10 col-span-3 align-middle">
                        <div className="buttons flex gap-3">
                            <a href="#"><img src={IconYoutube} alt="youtube" /></a>
                            <a href="#"><img src={IconInstagram} alt="instagram" /></a>
                            <a href="#"><img src={IconLinkedin} alt="linkedin" /></a>
                            <a href="#"><img src={IconGithub} alt="github" /></a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Footer;