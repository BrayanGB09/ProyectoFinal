import React from "react";
import "../styles/Home.css"
import Banner from "./Banner";

function PageHome() {
    return (
        <div className="contenedorPageHome">
            
                    <br />
                    <br />

                <h2 className="esloganHome">
                    Soluciones eléctricas precisas, confiables y seguras para su tranquilidad
                </h2>

                        <br />
                        <br />

                <div className="contenedorHome">
                <div className="contenedorValores">
                <div>
                <div className="infoValores">
                <h1 className="valores">
                    Nuestros Valores   
                </h1>
                </div>

                <h3 className="textoValores">
                    <b className="negrita">Honestidad:</b> Realizamos nuestro trabajo con total transparencia, <br /> ética y lealtad, asegurando así la confianza y satisfacción de nuestros clientes.
                        <br />
                        <br />
                    <b className="negrita">Calidad:</b> Nuestros productos y servicios son 100% confiables, lo que nos permite garantizar el óptimo desempeño y éxito en cada <br /> proyecto.
                        <br />
                        <br />
                    <b className="negrita">Responsabilidad:</b> Nos comprometemos con nuestros clientes a <br /> cumplir nuestras tareas con eficiencia, asegurando resultados dentro del tiempo establecido.
                        <br />
                        <br />
                    <b className="negrita">Excelencia:</b> Ponemos todo nuestro empeño en cada labor, siempre buscando el beneficio y la satisfacción de nuestros clientes.
                        <br />
                        <br />
                    <b className="negrita">Superación:</b> Somos una empresa con un deseo constante de mejorar <br /> y crecer, tanto estructural como profesionalmente.
                        <br />
                        <br />
                    <b className="negrita">Buen servicio:</b> Nos distinguimos por ofrecer un trato siempre amable <br /> y cortés a todos nuestros clientes.
                        <br />
                        <br />
                    <b className="negrita">Respeto:</b> El respeto es el valor fundamental en nuestra empresa, que debe prevalecer en todas nuestras relaciones, ya sea entre jefes y colaboradores, o hacia nuestros clientes.
                </h3>

                    <Banner />
                </div>
                </div>
                <div className="contenedorVariado">
                <div className="contenedorMision">
                    <div>
                    <div className="infoMision">
                    <h1 className="mision">
                        Misión
                    </h1>
                    </div>
                  
                    <h3 className="textoMision">
                        Nosara Power Solution se fundó con el propósito de satisfacer las necesidades de nuestros clientes, fomentar un crecimiento estructural y financiero sólido, y asegurar nuestra permanencia en el mercado a <br /> lo largo del tiempo.
                    </h3>
                    </div>
                    </div>
                        
                        <br />
                    <div className="contenedorVision">
                    <div>
                    <div className="infoVision">
                        <h1 className="vision">
                            Visión
                    </h1>
                    </div>
                    <h3 className="textoVision">
                        Ser reconocidos como líderes en el sector de reparación e instalación eléctrica, ofreciendo soluciones innovadoras, seguras y eficientes. Nos enfocamos en brindar un servicio de excelencia que garantice la satisfacción de nuestros clientes, impulsando el crecimiento sostenible y estableciendo estándares de calidad y confianza en el mercado.
                    </h3>
                    </div>
                    </div>

                        <br />

                    <div className="contenedorFinalHome">
                    <div>
                        <br />
                        <h3 className="textoFinalHome">
                            Además de los valores que nuestra empresa representa, debemos continuar manteniendo, como lo hemos hecho a lo largo del tiempo, el valor de la CONFIANZA. Este es un aspecto fundamental que hemos ganado gracias a la calidad y al buen servicio que brindamos. <br /> Nuestros clientes confían en nosotros para abrir las puertas de sus hogares y negocios sin ningún temor.
                        </h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default PageHome