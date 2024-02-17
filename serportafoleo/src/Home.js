
//sweetalert-react is a wrapped sweetalert implement with declarative React style component api. There is a show prop on it to determinate that alert should be displayed or not, and onConfirm, onCancel, onClose, onEscapeKey and onOutsideClick props to have more controls on alert element event.
import swal from "sweetalert"; //for alert box

import './css/common_css.css'
import './css/button.css'

import './js/fullpage_anim.js'

import Progressbar from './Progressbar';
import Floating_social from './Floating_social';
import Openingpage from './Openingpage';
import Counter from './Counter';
import Bio from './Bio';
import Abtme from './Abtme';
import Marquee from './Marquee';
import Contactme from './Contactme';
import Totop from './Totop';
import Project from './Project';
import Footer from './Footer';
import Float_contact from './Floating_contact';

function App()
{

    window.onload = function(){
        swal({
            title: "HELLO !! (^‿^)✌",
            text: "This website has been Designed & Developed independently by Sergio Moncada. \n \n  THANK YOU!! (^‿^)",
            icon: "success",})
    }

    return(
        <>
            <Openingpage />
            <Counter />
            <Bio />
            <Abtme />
            <Marquee />
            <Project />
            <Footer />

{/* -------------------------------------------------------------- */}

            <Progressbar />
            <Floating_social />
            <Totop />
          {/*  <Float_contact />
            <Contactme />*/}


        </>
    )
}

export default App;