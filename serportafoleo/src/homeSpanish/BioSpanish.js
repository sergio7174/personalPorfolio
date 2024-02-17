import './../css/bio.css'

import bio_img from './../imgs/bio_img.png'

import cv from './../pdf_files/cur_sergio_eng.pdf'

function Bio()
{
    return(
        <>
        
            <div className="container-fluid p-0 bio_text_cont" style={{"overflowX":"hidden"}}>

                <div className="row cutout_box">
                    <h1 className="cutout_text" id="bio">Mi Biografía</h1>
                </div>

                <div className="row p-5">

                    <div className="col-lg-6 mx-auto text-center bio1_container bio_text" id="biotext_1">
                        
                                <h2><mark>Web</mark> 
                                <mark>Desarrollador</mark> <br /> 
                                <mark>Desarrollador FrontEnd - </mark> 
                                <mark>Desarrollador BackEnd</mark>
                                
                                </h2>

                        <div className="text-center py-0"><img src={ bio_img } alt="" className="bio_img_size" /></div>

                    </div>

                    <div className="col-lg-5 mx-auto bio_text_2 text-center" id="biotext_2">
                        
                    <h4 className="tag_name mb-3"> bio</h4>

                        Soy un <b>desarrollador web Full Stack </b> residenciado en  <b>Valencia, Venezuela.</b> especializado en <b>desarrollo FrontEnd</b>. Poseo una amplia gama de conocimientos en diferentes lenguajes de front-end, back-end y escritorio, marcos responsivos y sistemas de gestión de bases de datos. Mi objetivo es simplemente ser el mejor desarrollador web que pueda ser y contribuir a la industria tecnológica. <br /><br />

                        Tambien estoy muy familiarizado con el uso de frameworks, mis sitios web están principalmente codificados usando:

 <b>HTML5, CSS3, Bootstrap, JavaScript: React, NextJs,  Redux, Angular & Jquery, for FrontEnd, and NodeJS, Express for Backend .</b> <br /><br /> 

 Con un fuerte énfasis en <b>"Mejora progresiva"</b>, Busco formas creativas de ampliar los límites del desarrollo de sitios web sin comprometer la compatibilidad del navegador y al mismo tiempo sigo las mejores prácticas de código.<br /><br />

 Estoy en una búsqueda constante por mantenerme siempre <b>actualizado</b>, Leo libros y asisto a seminarios y reuniones.

                    <h4 className="tag_name mb-3"> /bio </h4>

                    <button type="button" className="cv_button w-75 mt-4" 
                    title="SHOW CV">
                            <a href= {cv} target = "_blank">  
                                Curriculum Vitae (PDF) <i className="fa-solid fa-download ms-2"></i>
                            </a>
                    </button>
                    
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bio;