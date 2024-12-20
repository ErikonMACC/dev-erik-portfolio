import "../assets/styles/font.css";
import "../assets/styles/color.css";
import "../assets/styles/container-style.css";
import MeAgain from "../assets/images/MeAgain.png";

import IconYoutube from "../assets/images/IconYoutube.png";
import IconInstagram from "../assets/images/IconInstagram.png";
import IconLinkedin from "../assets/images/IconLinkedin.png";
import IconGithub from "../assets/images/IconGithub.png";

function AboutMe() {
    return (
        <>
            <div className="container-xl mx-40 mt-24 grid grid-cols-12 items-center gap-4 align-middle" id="aboutMe">
                <div className="text-container col-span-7">
                    <p className="title-montserrat text-white">
                        SOBRE MINHA <span className="text-color-secondary">CARREIRA</span>
                    </p>
                    <p className="text-inter text-color-primary mt-9">
                        Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.
                    </p>
                    <p className="text-inter text-color-primary mt-4">
                        Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.
                    </p>
                    <div className="buttons flex gap-3 mt-10">
                        <a href="#"><img src={IconYoutube} alt="youtube" /></a>
                        <a href="#"><img src={IconInstagram} alt="instagram" /></a>
                        <a href="#"><img src={IconLinkedin} alt="linkedin" /></a>
                        <a href="#"><img src={IconGithub} alt="github" /></a>
                    </div>
                </div>
                <div className="image col-start-9 col-span-4"><img className="w-full" src={MeAgain} alt="erik-machado-lopes-again" /></div>
            </div>
        </>
    );
}

export default AboutMe;