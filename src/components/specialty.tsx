import "../assets/styles/font.css";
import "../assets/styles/color.css";
import "../assets/styles/container-style.css";
import iconWebsite from "../assets/images/IconWebsite.png"
import iconJS from "../assets/images/IconJS.png"
import iconPHP from "../assets/images/IconPHP.png"

function Specialty() {
    return (
        <>
            <div className="container-box shadow-2xl">
                <div className="container-xl mx-40 mt-24 grid grid-cols-12 items-center gap-4" id="specialty">
                    <div className="title-montserrat text-white text-center col-span-12 mt-20 mb-10">
                        <p>SOBRE MINHAS <span className="text-color-secondary">ESPECIALIDADES</span></p>
                    </div>
                    
                    <div className="col-span-4 container-main mb-20 rounded-2xl shadow-xl">
                        <div className="image flex justify-center my-8"><img src={iconWebsite} alt="website-icon" /></div>
                        <p className="subtitle-montserrat text-color-terniary mx-6 mb-5">Website</p>
                        <p className="text-inter text-color-primary mx-6 mb-16">Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab adisatipsa error.</p>
                    </div>

                    <div className="col-span-4 container-main mb-20 rounded-2xl shadow-xl">
                        <div className="image flex justify-center my-8"><img src={iconJS} alt="java-script-icon" /></div>
                        <p className="subtitle-montserrat text-color-terniary mx-6 mb-5">Javascript</p>
                        <p className="text-inter text-color-primary mx-6 mb-16">Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab adisatipsa error.</p>
                    </div>

                    <div className="col-span-4 container-main mb-20 rounded-2xl shadow-xl">
                        <div className="image flex justify-center my-8"><img src={iconPHP} alt="PHP-icon" /></div>
                        <p className="subtitle-montserrat text-color-terniary mx-6 mb-5">PHP</p>
                        <p className="text-inter text-color-primary mx-6 mb-16">Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab adisatipsa error.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Specialty;