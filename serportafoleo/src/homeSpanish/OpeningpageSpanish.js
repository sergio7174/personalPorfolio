import './../css/openingpage.css'
import NavbarSpanish from './navbarSpanish';
import fotomia from './../imgs/FOTOMOD002.jpg';


const OpeningpageSpanish = () =>
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                
          <NavbarSpanish/>

                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                    Hola, <br /> Soy Sergio Moncada.
                    <div class="morph_cont">
                        <div class="morph_word">Desarrollador Full Stack</div>
                        <div class="morph_word">Desarrollador Front End</div>
                        <div class="morph_word">Desarrollador Back End</div>
                        <div class="morph_word">Desarrollador de Aplicaciones de Escritorio</div>
                        <div class="morph_word">Diseñador Grafico</div>
                        <div class="morph_word">Creador de Contenido en formato video </div>
                        <div class="morph_word">Creador de Contenido en formato audio </div>
                       
                    </div>
                    <p>Construyo sitios web interactivos que se ejecutan <br /> en plataformas y dispositivos.</p>
                    
                </div>

                {/*<div className="col-md-4  mb-5 text-center offset-md-1 mx-auto">
                <img src={ fotomia } alt="" className="mifoto_size img-fluid"/>
                <h4 style={{color:"white"}}>System Eng. Sergio G. Moncada</h4>
    </div>*/}
                </div>

                 {/* wave start */}

                <div className="row">

                <div className="wave_anim" style={{"height": 250}}>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </div>

                </div>

                {/* wave end */}

            </div>

        </>
    )
}    

export default OpeningpageSpanish;