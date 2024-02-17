import { useState } from "react";
import './../css/abtme.css'
import MaterializeIcon from "./../imgs/materialize.png";
import JqueryIcon from "./../imgs/jquery.png";
import NextJsIcon from "./../imgs/next.png";
import Reduxtoolkit from './../imgs/redux-toolkit.png';
import Basic from "./../imgs/basic.png";
import VisualBasic from "./../imgs/visualBasic.png";
import Pascal from "./../imgs/pascal.png";
import Cobol from "./../imgs/cobol.png"
import UNA from "./../imgs/UNA.png";
import IUTPC from "./../imgs/IUTPC.jpg";



function AbtmeSpanish() {


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <>

    <div className="container-fluid abtme_bg pb-5" style={{"overflowX":"hidden"}}>

{/* ------------------------ heading start -------------------- */}
        <div class="row">
            <div class="col-md-5 mx-auto text-center abt_me_heading" id="abt_me">
                ACERCA DE MI
            </div>
        </div>
{/* ------------------------ heading end -------------------- */}

{/* ------------------- abt me complete sections start -------------------- */}

        <div className="container-fluid overflow-x-hidden">

            {/* about me on click tabs */}
            <div className="row">
                <div className="col-md-6 mx-auto d-flex flex-wrap mt-2 mb-4 justify-content-center bio_tabs">

                    <div className={toggleState === 1 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(1)}>
                    MIS HABILIDADES   
                    </div>

                    <div className={toggleState === 3 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(3)}>
                        EDUCACION   
                    </div>

                    <div className={toggleState === 4 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(4)}>
                        EXPERIENCIA  
                    </div>

                    <div className={toggleState === 2 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(2)}>
                        HABILIDADES ADICIONALES   
                    </div>

                </div>
            </div>
            {/* about me on click tabs end */}

    {/* about me tabs content start */}
    <div className="row">
                
    {/* skills start */}
<div className={toggleState === 1 ? "content_abtme  active-content_abtme" : "content_abtme"}>
                    
<div className="container-fluid">
  <div className="row">
     <div className="col-lg-8 mx-auto abt_cont pb-4">
        <div className="row d-flex flex-wrap">
                                    
            <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom": "10px     solid #CBB26A"}}>
                <h5 style={{"color": " #CBB26A"}}><b>MARKUP / LENGUAJES DE ESTILOS </b></h5>			
                
                 <div className="text-center px-4" style={{"float": "left"}}> 
                    <i className="fa-brands fa-html5" style={{"color": "rgba(255,103,57,.9)"}}></i> <h6>HTML</h6> 
                 </div> 
                
                <div className="text-center"> <i className="fa-brands fa-css3-alt" style={{"color": "#5DADE2"}}>
                    </i> <h6>CSS</h6> 
                </div> 
                
                <div className="text-center"> <i className="fa-brands fa-sass" style={{"color": "#5DADE2"}}>
               
                    </i> <h6>SASS</h6> 
                </div>


             </div>

<div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
    <h5 style={{"color": "#CBB26A"}}> <b>CSS FRAMEWORK</b></h5>	

        <div className="text-center"> 
        <i className="fa-brands fa-bootstrap" style={{"color": "#AF7AC5"}}></i> 
        <h6>BOOTSTRAP</h6> 
        </div> 

        <div className="text-center"> 
         
        <img src={ MaterializeIcon } alt="" className="materialize_size"/>
        <h6>MATERIALIZE</h6> 
        </div>
</div>

<div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
    <h5 style={{"color":"#CBB26A"}}>LENGUAJE DE PROGRAMACIÓN</h5>			
      <div className="text-center"> 
        <i className="fa-brands fa-js-square" style={{"color": "yellow"}}></i> 
          <h6>JAVA SCRIPT</h6> 
      </div> 
 </div>
   

<div className="row ">

    <div className="skill_boxtype1 mt-5 text-center mx-auto " style={{"borderBottom":"10px solid #CBB26A", width:"10em"}}>
        <h5 style={{"color": "#CBB26A"}}>JAVASCRIPT FRAMEWORK</h5>	

            <div className="d-flex flex-row justify-content-around">

            <div className="text-center"> 
            <i className="fa-brands fa-react" style={{"color": "#61dafb"}}></i> 
            <h6>REACT JS</h6> 
            </div> 
            &nbsp;
            <div className="text-center"> 
            <img src={Reduxtoolkit} alt="" style={{width:"2em", height:"auto"}} />
            <h6>REDUX-TOOLKIT</h6> 
            </div> 
            &nbsp;
            <div className="text-center"> 
            <i className="fa-brands fa-angular" style={{"color": "#61dafb"}}></i> 
            <h6>ANGULAR</h6> 
            </div>
            &nbsp;
            <div className="text-center"> 
            <img src={ JqueryIcon } alt="" className="materialize_size"/>
            <h6>JQUERY</h6> 
             </div>

             &nbsp;  
             <div className="text-center"> 
            <img src={ NextJsIcon } alt="" style={{width:"1.7em", height:"auto"}}/>
            <h6>NEXTJS</h6> 
             </div>

            </div> 
           </div>
           </div> 

<div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
    <h5 style={{"color": "#CBB26A"}}>GESTOR DE PAQUETES</h5>			
        
    <div className="d-flex flex-row justify-content-around"> 

        <div className="text-center"> 
        <i className="fa-brands fa-npm" style={{"color": "#cb0000"}}></i> 
          <h6>NPM</h6> 
        </div> 
        
        <div className="text-center"> 
        <i className="fa-brands fa-yarn" style={{"color": "#cb0000"}}></i> 
          <h6>YARN</h6> 
         
        </div> 
        
        </div>
        </div>

                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>GESTIÓN DE BASE DE DATOS</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-solid fa-database" style={{"color": "#3E6E93"}}></i> <h6>MY SQL</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-envira" style={{"color": "#82E0AA"}}></i> <h6>MONGO DB</h6> </div> 
                                    </div>
                                </div>

                                <div className="row d-flex flex-wrap">		
                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>VERSION CONTROL</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-brands fa-github" style={{"color": "black"}}></i> <h6>GIT HUB</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-git-alt" style={{"color": "#f14e32"}}></i> <h6>GIT</h6> </div> 
                                    </div>

<div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
   <h5 style={{"color": "#CBB26A"}}>BACKEND</h5>			
      <div className="text-center px-4" style={{"float": "left"}}> 
        <i className="fa-brands fa-node" style={{"color": "#27AE60"}}></i> 
         <h6>NODE JS</h6> 
                                       
      </div>
      <div className="text-center"> 
        <i className="fa-brands fa-node-js" style={{"color": "#259dff"}}></i> 
        <h6>EXPRESS JS</h6> 
      </div> 
      
      







        </div> {/**block end of backend */}


        <div className="row ">

<div className="skill_boxtype1 mt-5 text-center mx-auto" 
     style={{"borderBottom":"10px solid #CBB26A",width:"12em"}}>
   <h5 style={{"color":"#CBB26A"}}>LENGUAJES DE PROGRAMACIÓN DE ESCRITORIO</h5>			
                                        
   <div className="d-flex flex-row justify-content-around">

            <div className="text-center p-4"> 
            <img src={Basic} alt="" style={{width:"2em", height:"auto"}} />
            <h6>BASIC</h6> 
            </div> 

            <div className="text-center p-4"> 
            <img src={VisualBasic} alt="" style={{width:"2em", height:"auto"}} />
            <h6>VISUAL BASIC</h6> 
            </div>

            <div className="text-center p-4"> 
            <img src={Pascal} alt="" style={{width:"2em", height:"auto"}} />
            <h6>PASCAL</h6> 
            </div>

            <div className="text-center p-4"> 
            <img src={Cobol} alt="" style={{width:"2em", height:"auto"}} />
            <h6>COBOL</h6> 
            </div>



        </div>
        </div>
        </div>



                                </div>
                            </div>
                        </div>
                    </div>                    
                
                </div>
                {/* skills end */}

                {/* extra skills start */}
                <div className={toggleState === 2 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center">
                            <div className="col-md-6 mx-auto abt_cont extra_skill_text">
                                                
                                <h2 style={{"color": "#CBB26A", "lineHeight":1.5}}>HABILIDADES GENERALES</h2>
                                
                                <h4 className='text-start text-white'>
                                    <ul>
                                        <li>Habilidades de comunicación interpersonales.
                                            <h6 className='ms-5 mt-2'>Tengo la capacidad de comunicar el mensaje deseado de manera efectiva mientras mantiengo al oyente interesado.</h6>
                                        </li>

                                        <li>Habilidades para hablar en público.
                                            <h6 className='ms-5 mt-2'> Tengo una amplia experiencia en oratoria, organización de eventos y realización de presentaciones frente a una gran audiencia.
. </h6>
                                        </li>

                                        <li>Habilidades de liderazgo y gestión.


                                            <h6 className='ms-5 mt-2'> Hábil en organizar a otras personas para alcanzar una meta compartida y mantener al equipo motivado para alcanzar la meta deseada. Puedo organizarme y comunicarme claramente para apoyar a un equipo o proyecto.

</h6>
                                        </li>

                                        <li>Aprendo Rapidamente y visualmente.
                                            <h6 className='ms-5 mt-2'>Soy un aprendiz visual muy fuerte y estoy decidido a resolver problemas y encontrar rápidamente una solución efectiva.</h6>
                                        </li>

                                        <li> Solucionador eficaz de problemas
                                            <h6 className='ms-5 mt-2'> Tengo la capacidad de resolver problemas y determinar la causa del problema. Identificar, priorizar y seleccionar alternativas para una solución; e implementar una solución.

</h6>
                                        </li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
                {/* extra skills end */}

                {/* education start */}
<div className={toggleState === 3 ? "content_abtme  active-content_abtme" : "content_abtme"}>

   <div className="container-fluid abt_anim">
     <div className="row text-center justify-content-center">

      <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 me-2">
                                            
     <i className="fa-solid fa-user-graduate mt-2 mb-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
         <h5>1995</h5>
           <h4 className='text-white'>Ingeniero de Sistemas </h4>
              <h6>GPA - 8.5</h6>
                <h5>Universidad Nacional Abierta - Centro LOcal Carabobo</h5>
                <img src={UNA} alt="" style={{width:"6em",height:"6em"}} />
                  <h5 className='text-start text-light mt-2'>
                    <ul style={{"lineHeight":1.5}}>
                      </ul>
         </h5>
       </div>

    <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 ms-2">   

<i className="fa-solid fa-building-columns my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>	
      <h5>1987</h5>
        <h4 className='text-white'>Técnico Superior en Mecánica Industrial  </h4>
          <h6>Percentage - 75%</h6>
            <h5>INSTITUTO UNIVERSITARIO DE TECNOLOGÍA DE PUERTO CABELLO</h5>
             <h2></h2>
              <img src={IUTPC} alt="" style={{width:"6em",height:"auto"}} />
                  <h6 className='text-start text-white'>
                    <ul style={{"lineHeight":1.5}}>
                       </ul>
                         </h6>
                                            
                                        
    </div>



                        </div>
                    </div>

                </div>
                {/* education end */}

                {/* experience start */}
                <div className={toggleState === 4 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">

                    <div className="row text-center">
                        <div className="col-md-7 mx-auto abt_cont edu_cont">
                                        
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                        <h5>Enero 2019 - Actual (ahora)</h5>
                                        <h5>Actualización de conocimientos y desarrollador Libre.</h5>
                                        <h3 className="my-2">FULL STACK DEVELOPMENT</h3>
                                        <h5>Valencia, Venezuela</h5>

                                        <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
                                            <ul>
                                                <li> Obtuve una amplia formación y experiencia en diseño y desarrollo web utilizando la última tecnología.</li>
                                                <li> Aprendí a utilizar plataformas de código abierto de forma eficaz y rápida para resolver problemas y errores en el código. </li>
                                                <li> Adquirí experiencia trabajando en un entorno tecnológico de la vida real y trabajando junto a desarrolladores y profesionales experimentados. </li>
                                                <li> Trabajé en equipo junto con otros desarrolladores, así como a título individual en proyectos.</li>
                                                <li> Recibí comentarios y reseñas extremadamente positivos de todos los mentores.</li>
                                                <li> Diseño y desarrollo de más de 30 proyectos junto con múltiples proyectos menores desde cero como parte de la capacitación. </li>
                                            </ul>
                                        </h5>

                        </div>
                    </div>
                    </div>
                    <br/>
                    <br/>
{/*********** block added by me  ****************************************************/}

<div className="container-fluid abt_anim">

                    <div className="row text-center">
                        <div className="col-md-7 mx-auto abt_cont edu_cont">
                                        
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                        <h5>ENERO 2003 - ENERO 2019</h5>
                                        <h5>freehance development</h5>
         <h3 className="my-2">DESARROLLADOR DE SISTEMAS DE ESCRITORIO - INSTRUCTOR DE COMPUTACIÓN : SOFTWARE Y HARDWARE- SERVICIO TECNICO EN REPARACIÓN DE COMPUTADORAS Y COMPONENTES</h3>
                                <h5>Valencia, Venezuela</h5>

            <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
            <ul>
            <li> Servicio técnico de reparación (software y hardware) de ordenadores personales, PORTÁTILES, TABLETS Y Servicios de redes.</li>
            <li>Integración e instalación de Redes de COMPUTADORAS.</li>
            <li> Desarrollo de sistemas de control de producción y almacén de reservas, EN petroleos de venezuela. </li>

            <li>Trabajé en equipo junto con otros desarrolladores, así como a título individual en proyectos. </li>
            <li> Instructor of Cobol, Basic, Upset-Pascal, Dbase, Foxbase, MS-DOS, etc..  </li>
            
                                            </ul>
                                        </h5>

                        </div>
                    </div>
                    </div>







{/*********** block added by me  ****************************************************/}

                </div>    
                {/* experience end */}

            </div>
            {/* about me tabs content end */}

        </div>

{/* ------------------- abt me complete sections end -------------------- */}

    </div>
    
    </>
  )
}

export default AbtmeSpanish;