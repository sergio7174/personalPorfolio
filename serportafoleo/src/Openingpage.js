import './css/openingpage.css'
import Navbar from './Navbar';
import fotomia from './imgs/FOTOMOD002.jpg';


function Openingpage()
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                <Navbar></Navbar>
                
                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                    Hi, <br /> I'm Sergio Moncada,
                    <div class="morph_cont">
                        <div class="morph_word">Full Stack Developer</div>
                        <div class="morph_word">Front End Developer</div>
                        <div class="morph_word">Back End Developer</div>
                        <div class="morph_word">Desktop Developer</div>
                        <div class="morph_word">Graphic Designer</div>
                        <div class="morph_word">Content Creator video </div>
                        <div class="morph_word">Content Creator audio </div>
                       
                    </div>
                    <p>I build interactive websites that run <br /> across platforms & devices.</p>
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

export default Openingpage;