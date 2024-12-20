import "../assets/styles/font.css";
import "../assets/styles/color.css";
import "../assets/styles/container-style.css";
import ProjectTest from "../assets/images/ProjectTest.png"

import { ArrowRight } from "@mynaui/icons-react"

function Portfolio() {
    return (
        <>
            <div className="container-box shadow-2xl">
                <div className="container-xl mx-40 mt-32 grid grid-cols-12 items-center gap-4" id="portfolio">
                    <div className="title-montserrat text-white text-center col-span-12 mt-20 mb-16">
                        <p>MEU <span className="text-color-secondary">PORTFÓLIO</span></p>
                    </div>
                    <div className="projects col-span-12 grid grid-cols-1 items-center">

                        <div className="project col-span-1 grid grid-cols-12 items-center gap-8 align-middle">
                            <img className="col-span-5 w-full" src={ProjectTest} alt="project" />
                            <div className="text-content col-start-6 col-span-7 pb-3">
                                <p className="text-poppins text-color-terniary legend-portfolio">PROJETO 1</p>
                                <p className="title-montserrat text-white">FINANVEST</p>
                                <p className="text-inter text-color-primary mt-1">
                                    Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.
                                </p>
                                <div className="button mt-14">
                                    <a className="px-8 py-4 rounded-2xl background-quaternary text-montserrat text-white shadow-xl" href="#">Visitar Website <ArrowRight className="inline-block ml-2.5"/></a>
                                </div>
                            </div>
                        </div>

                        <div className="project col-span-1 grid grid-cols-12 items-center gap-8 align-middle mt-28">
                            <div className="text-content col-span-7 pb-3">
                                <p className="text-poppins text-color-terniary legend-portfolio">PROJETO 2</p>
                                <p className="title-montserrat text-white">Jogo Corrida Feudal</p>
                                <p className="text-inter text-color-primary mt-1">
                                    Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.
                                </p>
                                <div className="button mt-14">
                                    <a className="px-8 py-4 rounded-2xl background-quaternary text-montserrat text-white shadow-xl" href="#">Visitar Website <ArrowRight className="inline-block ml-2.5"/></a>
                                </div>
                            </div>
                            <img className="col-start-8 col-span-5 w-full" src={ProjectTest} alt="project" />
                        </div>

                        <div className="project col-span-1 grid grid-cols-12 items-center gap-8 align-middle mt-28">
                            <img className="col-span-5 w-full" src={ProjectTest} alt="project" />
                            <div className="text-content col-start-6 col-span-7 pb-3">
                                <p className="text-poppins text-color-terniary legend-portfolio">PROJETO 3</p>
                                <p className="title-montserrat text-white">Technotec - Site de Artigo</p>
                                <p className="text-inter text-color-primary mt-1">
                                    Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.
                                </p>
                                <div className="button mt-14">
                                    <a className="px-8 py-4 rounded-2xl background-quaternary text-montserrat text-white shadow-xl" href="#">Visitar Website <ArrowRight className="inline-block ml-2.5"/></a>
                                </div>
                            </div>
                        </div>


                        <div className="project col-span-1 grid grid-cols-12 items-center gap-8 align-middle mt-28 mb-20">
                            <div className="text-content col-span-7 pb-3">
                                <p className="text-poppins text-color-terniary legend-portfolio">PROJETO 4</p>
                                <p className="title-montserrat text-white">Loja de Livros Harry Potter</p>
                                <p className="text-inter text-color-primary mt-1">
                                    Lorem ipsum dolor sit amet. Non ducimus voluptate non nobis maxime est facere accusantium aut illum commodi ut incidunt dolores ut nisi voluptatem. Est ullam quaerat ut voluptatum eaque ut culpa fuga At voluptatem alias. Eum voluptatem quis ab sequi sunt vel neque exercitationem et ipsa error.
                                </p>
                                <div className="button mt-14">
                                    <a className="px-8 py-4 rounded-2xl background-quaternary text-montserrat text-white shadow-xl" href="#">Visitar Website <ArrowRight className="inline-block ml-2.5"/></a>
                                </div>
                            </div>
                            <img className="col-start-8 col-span-5 w-full" src={ProjectTest} alt="project" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;