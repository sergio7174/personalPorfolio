import swal from "sweetalert"; //for alert box

import './../css/navbar.css';

import nav_logo from './../imgs/logo.jpg'; 
import Venezuela_Flat from './../imgs/Flag_of_Venezuela.png';
import EEUU_Flat from './../imgs/EEUU FLAT.png';
import {Link, NavLink } from "react-router-dom";


 const NavbarSpanish=()=>
                              {

        function openNav() { document.getElementById("myNav").style.width = "100%";}
      
        function closeNav() { document.getElementById("myNav").style.width = "0%";}

        function contact_alert() {
            swal({
                

                title: "ATENCIÓN !!",
                text: "¡¡Gracias por mostrar interés!! (^‿^) \n \n No podré recibir su mensaje desde el siguiente formulario de contacto debido a las limitaciones del levantamiento de dominio gratuito de código abierto y su limitación para alojar un sitio web dinámico. Sin embargo puedes contactarme usando cualquiera de los enlaces sociales adjuntos, correo electrónico o número de contacto.  \n \n Gracias!! (❛‿❛)",
                icon: "warning",})



        }

    return(
        <>
            <div className="row" id="page_top" style={{"overflowX":"hidden"}}>
                <div className="col-md-10 offset-md-1 mt-3 navbar_bg">
                    <nav className="navbar navbar-expand-lg w-100">
                    <div className="container-fluid">
                        <a href="#"> <img src={ nav_logo } alt="" className="logo_size img-fluid"/> </a>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<h5 style={{color:"white"}}>  Seleccione Idioma: </h5>
                        &nbsp; &nbsp; 
                       
                        <NavLink to="/homeSpanish" style={{ textDecoration: "none", color: "inherit",   
                               }}>
                            <img className="logo_size img-fluid flat_icons border border-light border-4" src={Venezuela_Flat} alt="" style={{cursor:"pointer"}}/>
                        </NavLink>
                        &nbsp; &nbsp;
                        
                        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <img className="logo_size img-fluid flat_icons" src={EEUU_Flat} alt="" style={{cursor:"pointer" }} />
                        </NavLink>
                        &nbsp; &nbsp; &nbsp;

                        <h5 className="text-center mt-3" style={{color: "white"}}>Español</h5>

                        
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                        
                        <span> <i onClick={openNav} className="fa-solid fa-bars-staggered nav_toggler"> </i> </span>
                        </button>

                            <div className="collapse offset-md-4 navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#abt_me"> Acerca de Mi </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#"  onClick={contact_alert}> Contacta Me </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#project"> Mis Proyectos </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </nav>
                </div>
            </div>

            {/* responsive navbar start */}

            <div id="myNav" className="overlay">

               <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                <div className="overlay-content">
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal" className="btn_effect">Contacta Me</a>
                <a href="#abt_me" className="btn_effect">Acerca de Mí</a>
                <a href="#project" className="btn_effect">Proyectos</a>
                </div>

            </div>

            {/* responsive navbar end */}
        </>
    );
}

export default NavbarSpanish;