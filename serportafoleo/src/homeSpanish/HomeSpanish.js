
//sweetalert-react is a wrapped sweetalert implement with declarative React style component api. There is a show prop on it to determinate that alert should be displayed or not, and onConfirm, onCancel, onClose, onEscapeKey and onOutsideClick props to have more controls on alert element event.
import swal from "sweetalert"; //for alert box

import './../css/common_css.css';
import './../css/button.css';

import './../js/fullpage_anim.js';

import Progressbar from './../Progressbar';
import FloatingSocial from './../Floating_social';
import OpeningpageSpanish  from './OpeningpageSpanish';
import CounterSpanish from './CounterSpanish';
import NavbarSpanish from "./navbarSpanish";
import BioSpanish from './BioSpanish';
import AbtmeSpanish from './AbtmeSpanish';
import Marquee from './../Marquee';
import Contactme from './../Contactme';
import Totop from './../Totop';
import ProjectSpanish from './ProjectSpanish';
import FooterSpanish from './FooterSpanish';


const HomeSpanish = () =>
{

    window.onload = function(){
        swal({
            title: "Hola !! (^‿^)✌",
            text: "Este sitio web ha sido diseñado y desarrollado de forma independiente por Sergio Moncada. \n \n  Gracias .!! (^‿^)",
            icon: "success",})
    }

    return ( 
        
        <>
          
           <OpeningpageSpanish/>
           <CounterSpanish/>

           <BioSpanish />
            
            <AbtmeSpanish />
            <Marquee />
            <ProjectSpanish />
           <FooterSpanish />

{/* -------------------------------------------------------------- */}

           <Progressbar />
           <FloatingSocial />
            <Totop />
          
            <Contactme /> 


            </>
    )
}

export default HomeSpanish;