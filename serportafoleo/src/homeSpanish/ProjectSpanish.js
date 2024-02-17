import swal from "sweetalert"; //for alert box

import './../css/project.css'


import p_img3 from './../imgs/p3.png';
import ReduxToolkit from './../imgs/redux-toolkit.png';
import Express from './../imgs/express.png';
import Angular from './../imgs/angular.png'; 
import MongoDB from './../imgs/mongo.png';
import Project003React from './../imgs/project 003 - pizza FLEET.jpg';
import Project002React from './../imgs/project002.jpg';
import Project004React from './../imgs/project004ReactYoutubeclone.jpg';
import Project005React from './../imgs/project005ReactTour.jpg';
import Project006React from './../imgs/project006ProShop.jpg';
import Project007Angular from './../imgs/project007Angular.jpg';
import Project008Angular from './../imgs/project008AngularFurnitureShop.jpg';
import Project009Angular from './../imgs/project009AngularPhotoGallery.jpg';
import Project010Angular from './../imgs/project0010AngularHUstleFitness.jpg';
import Project011Nodejs from './../imgs/project0011nodejsBookAdits.jpg';
import Project012Nodejs from './../imgs/project0012nodejsCookingBlog.jpg';
import Project013Nodejs from './../imgs/project0013nodejsFibonnacci.jpg';
import Project014Nodejs from './../imgs/project014NodejsSerFoundation.jpg';
import Project015Nodejs from './../imgs/project015NodejsSerFoundation.jpg';
import Project016Nodejs from './../imgs/project016NodejsSalad.jpg';
import Project017Nodejs from './../imgs/project004ReactYoutubeclone.jpg';





function ProjectSpanish()
{

    function message()
    {
        swal({
            title: "Hey !! ",
            text: 'Ya estás en este proyecto.',
            icon: "warning",
        })
    } 

    return(
        <>
            <div className="container-fluid project_container" style={{"overflowX":"hidden"}}>

                {/* project heading */}
                <div className="row project_hding ">
                    <h4 className="mt-5" id="project"> CASOS ESTUDIADOS </h4> <br />
                    <h1><b> Proyectos trabajados </b></h1>
                </div>

                <div className="row py-5">

                    {/* project 1 */}
                    <div className="col-md-3 py-3 mt-3 project_card mx-auto" id="project3">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img3} alt="" className="project_img_size" />   
                        </div>

                        <div className="project_intro mt-4">
                            <h3>E-COMMERCE WEBSITE</h3> 
                            <h4>MERN Stack e-comercio Website Dínamico</h4>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>

                        <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li>Incorporación de todas las características clave de un sitio web de comercio electrónico de forma dinámica.</li>
                                    <li>Creé múltiples API personalizadas usando Nodejs y las integré con una configuración de React.</li>
                                    <li>Seguí las mejores prácticas de código mientras desarrollaba código dinámico y reutilizable.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>

                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <img src={ReduxToolkit} alt="" style={{width:"1.8em",height:"auto"}} />
                            <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                            <img src={MongoDB} alt="" style={{width:"1.6em",height:"auto"}} />
                        </h3>
                            
                    </div>





                    {/* project 2 */}
                    <div className="col-md-3 p-2 mt-3 project_card mx-auto" id="project2">
                        
                        <div className="project_img text-center ">
                            <img src= {Project002React} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>PORTAFOLIO PERSONAL WEBSITE</h2>
                            <h3>PORTAFOLIO PERSONAL - REACT</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                        <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                    <li>Creé todos los componentes desde cero usando react y java script.</li>
                                    <li>Aminación personalizada codificada usando CSS y Jquery y haciendo que el sitio web sea interactivo.</li>
                                    <li>Trabajé en cómo implementar un sitio web en vivo.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                           
                            <i class="fa-brands fa-npm mx-2"></i>
                           
                            <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                            <img src={MongoDB} alt="" style={{width:"1.6em",height:"auto"}} />
                        </h3>

                     

                    </div>

                    {/* project 3  */}
                    <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project003React} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>PIZZA FLEET </h2>
                            <h3>Una aplicación web de entrega de pizzas - MERN STACK</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                    <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                    <li>Animación personalizada  y validación de formularios principalmente utilizando el script Java React-Express.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                      
                        <i class="fa-brands fa-react mx-2"></i>
                        <img src={ReduxToolkit} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.6em",height:"auto"}} />
                        </h3>

                            

                    </div>


                   {/* project 4  */}
                   <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project004React} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>YOUTUBE Clone</h2>
                            <h3> Este es un clon de YouTube que implementa las características principales de YouTube - MERN STACK</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando el script Java React-Express.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-react mx-2"></i>
                        <img src={ReduxToolkit} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.6em",height:"auto"}} />
                        </h3>
                              </div>
                       {/***End Block, project 4 */}

{/* project 5  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project005React} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>TOUR MERN</h2>
                            <h3> Este proyecto tuvo como objetivo desarrollar una aplicación web dinámica y fácil de usar que facilite a los entusiastas de los viajes planificar y gestionar sus viajes de forma eficaz. - MERN STACK</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando el script Java React-Express.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                       
                        <i class="fa-brands fa-react mx-2"></i>
                        <img src={ReduxToolkit} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.6em",height:"auto"}} />
                        </h3>
                              </div>
                       {/***End Block, project 5 */}
{/* project 6  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project006React} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>PROSHOP MERN</h2>
                            <h3> e-Plataforma de comercio construido con MERN stack & Redux-Toolkit</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando el script Java React-Express.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-react mx-2"></i>
                        <img src={ReduxToolkit} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.6em",height:"auto"}} />
                        </h3>
                              </div>
                       {/***End Block, project 6 */}

{/* project 7  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project007Angular} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>E-RENTING SYSTEM MEAN</h2>
                            <h3> Permite a los clientes registrarse y reservar habitaciones online y a la empresa gestionar eficazmente su negocio de alquiler de habitaciones.</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando Angular - Nodejs - Express java script.</li>
                                    
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                      
                        <i class="fa-brands fa-node mx-2"></i>
                        <img src={Angular} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 7 */}


{/* project 8  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project008Angular} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>FURNITURE SHOP SYSTEM MEAN</h2>
                            <h3> Es un portal que ayuda a los usuarios a comprar muebles online. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        <img src={Angular} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 8 */}

{/* project 9  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project009Angular} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>PHOTO GALLERY SYSTEM MEAN</h2>
                            <h3> Es un sitio web completo de galería de fotos en línea. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        <img src={Angular} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 9 */}

{/* project 10  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project010Angular} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>GYM APPLICATION MEAN</h2>
                            <h3> Web Aplication to manage instructors and members of a gym. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        <img src={Angular} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 10 */}

{/* project 11  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project004React} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>HYPERTUBE MEAN</h2>
                            <h3> Un sitio web de transmisión de películas como YouTube. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        <img src={Angular} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 11 */}

{/* project 12  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project011Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>BOOK ADDICTS- NODEJS - EJS</h2>
                            <h3> Un sitio web para bibliófilos. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 12 */}

{/* project 12  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project012Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>COOKING BLOCG- NODEJS EJS</h2>
                            <h3> Sitio web de recetas en el que el usuario puede ver recetas de diferentes países. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                       
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 12 */}

{/* project 13  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project013Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>FIBONACCI - NODEJS EJS</h2>
                            <h3> Simplifica el aprendizaje y hace que la educación sea accesible para todos. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                       
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 13 */}

{/* project 14  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project014Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>SERFOUNDATION - NODEJS EJS</h2>
                            <h3> El sitio web consiste en un portal para mantener a las personas actualizadas sobre las últimas oportunidades en diferentes campos. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 14 */}

{/* project 15  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project015Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>MAKTRO - NODEJS EJS</h2>
                            <h3> Esta aplicación tiene muchas funciones que incluyen ventas, gastos, devoluciones, servicios y muchas más. Hay muchas características comunes como paginación, búsqueda, API para leer datos para autocompletar en los campos del formulario, generaciones de PDF sobre ventas o servicios.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 15 */}

{/* project 16  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project016Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>REAL TIME SALAD - NODEJS EJS</h2>
                            <h3> Aplicación de seguimiento de pedidos de ensaladas en tiempo real.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 16 */}

{/* project 17  */}
<div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {Project017Nodejs} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>VIDEO STREAMING WEBSITE - NODEJS EJS</h2>
                            <h3> Sitio Web Para Videos como YOUTUBE, video tube, subir GIFs tambien.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Características clave</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                <li> Configuración de página web de front-end y back-end totalmente responsive junto con configuración de base de datos integrada.</li>
                                <li>Me encargué de toda la composición, el color, la ilustración, la tipografía y la marca.</li>
                                <li>Animación personalizada  y validación de formularios principalmente utilizando - Nodejs - Ejs - Express - Multer.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Tecnología utilizada</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        
                        <i class="fa-brands fa-node mx-2"></i>
                        
                        <img src={Express} alt="" style={{width:"1.8em",height:"auto"}} />
                        <img src={MongoDB} alt="" style={{width:"1.8em",height:"auto"}} />
                        
                        </h3>
                              </div>
                       {/***End Block, project 17 */}

{/**************************************************************************************** */}
                    <h4 className='mt-4 pe-4 text-end andmore'>
                        <a href='#' target='_blank'>
                             y Mas...
                        </a>
                    </h4>

                </div>

            </div>

        </>
    )
}

export default ProjectSpanish;