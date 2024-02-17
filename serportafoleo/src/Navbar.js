import swal from "sweetalert"; //for alert box

import './css/navbar.css';

import nav_logo from './imgs/logo.jpg'; 
import Venezuela_Flat from './imgs/Flag_of_Venezuela.png';
import EEUU_Flat from './imgs/EEUU FLAT.png';
import {Link, NavLink} from "react-router-dom";

export default function Navbar()
{

        function openNav() { document.getElementById("myNav").style.width = "100%";}
      
        function closeNav() { document.getElementById("myNav").style.width = "0%";}

        function contact_alert() {
            swal({
                title: "ATTENTION !!",
                text: "Thank you for showing interest !! (^‿^) \n \n I will not be able to get your message from the following contact form because of limitations of open source free domain hoisting and it's limitation to host a dynamic website. However you can contact me using any of the attached social link, mail or contact number. You can access the source code of the dynamic components of this very website on my GitHub account. \n \n THANK YOU!! (❛‿❛)",
                icon: "warning",})
        }

    return(
        <>
            <div className="row" id="page_top" style={{"overflowX":"hidden"}}>
                <div className="col-md-10 offset-md-1 mt-3 navbar_bg">
                    <nav className="navbar navbar-expand-lg w-100">
                    <div className="container-fluid">
                        <a href="#"> <img src={ nav_logo } alt="" className="logo_size img-fluid"/> </a>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<h5 style={{color:"white"}}>  Select Lenguage: </h5>

                        {/*<a href="#"> <img src={ Venezuela_Flat } alt="" className="logo_size img-fluid"/> </a>*/}
                        &nbsp; &nbsp;
                        
                        <NavLink to="/homeSpanish" style={{ textDecoration: "none", color: "inherit",   
                               }}>
                            <img className="logo_size img-fluid flat_icons" src={Venezuela_Flat} alt="" style={{cursor:"pointer"}}/>
                        </NavLink>
                        
                        &nbsp; &nbsp;
                        
                        
                       {/* <a href="#"> <img src={ EEUU_Flat } alt="" className="logo_size img-fluid"/> </a>*/}
                       
                       <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <img className="logo_size img-fluid flat_icons border border-light border-4" src={EEUU_Flat} alt="" style={{cursor:"pointer" }} />
                        </NavLink>
                        
                        &nbsp; &nbsp;
                        <h5 className="text-center mt-3" style={{color: "white"}}>English</h5>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                        
                        <span> <i onClick={openNav} className="fa-solid fa-bars-staggered nav_toggler"> </i> </span>
                        </button>

                            <div className="collapse offset-md-4 navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#abt_me"> About Me </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#" data-bs-toggle="modal" data-bs-target="#contactModal" onClick={contact_alert}> Contact Me </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#project"> My Projects </a>
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
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal" className="btn_effect">Contact Me</a>
                <a href="#abt_me" className="btn_effect">About Me</a>
                <a href="#project" className="btn_effect">Projects</a>
                </div>

            </div>

            {/* responsive navbar end */}
        </>
    );
}