import { useState } from "react";
import './css/abtme.css'
import MaterializeIcon from "./imgs/materialize.png";
import JqueryIcon from "./imgs/jquery.png";
import NextJsIcon from "./imgs/next.png";
import Reduxtoolkit from './imgs/redux-toolkit.png';
import Basic from "./imgs/basic.png";
import VisualBasic from "./imgs/visualBasic.png";
import Pascal from "./imgs/pascal.png";
import Cobol from "./imgs/cobol.png"
import UNA from "./imgs/UNA.png";
import IUTPC from "./imgs/IUTPC.jpg";



function Abtme() {


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
                ABOUT ME
            </div>
        </div>
{/* ------------------------ heading end -------------------- */}

{/* ------------------- abt me complete sections start -------------------- */}

        <div className="container-fluid overflow-x-hidden">

            {/* about me on click tabs */}
            <div className="row">
                <div className="col-md-6 mx-auto d-flex flex-wrap mt-2 mb-4 justify-content-center bio_tabs">

                    <div className={toggleState === 1 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(1)}>
                        MY SKILLS   
                    </div>

                    <div className={toggleState === 3 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(3)}>
                        EDUCATION   
                    </div>

                    <div className={toggleState === 4 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(4)}>
                        EXPERIENCE   
                    </div>

                    <div className={toggleState === 2 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(2)}>
                        ADDITIONAL SKILLS   
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
                <h5 style={{"color": " #CBB26A"}}><b>MARKUP / STYLING LANGUAGE</b></h5>			
                
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
    <h5 style={{"color":"#CBB26A"}}>PROGRAMMING LANGUAGE</h5>			
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

            <div className="text-center"> 
            <img src={Reduxtoolkit} alt="" style={{width:"2em", height:"auto"}} />
            <h6>REDUX-TOOLKIT</h6> 
            </div> 

            <div className="text-center"> 
            <i className="fa-brands fa-angular" style={{"color": "#61dafb"}}></i> 
            <h6>ANGULAR</h6> 
            </div>
            
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

 <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"12px solid #CBB26A"}}>
    <h5 style={{"color": "#CBB26A"}}>PACKAGE MANAGER</h5>			
        
    <div className="d-flex flex-row justify-content-around">

        <div className="text-center"> 
        <i className="fa-brands fa-npm" style={{"color": "#cb0000"}}></i> 
          <h6>NPM</h6> 
        </div> 
        &nbsp;
        <div className="text-center"> 
        <i className="fa-brands fa-yarn" style={{"color": "#cb0000"}}></i> 
          <h6>YARN</h6> 
         
        </div> 
        
        </div>
        </div>

      <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>DATABASE MANAGEMENT</h5>			
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
   <h5 style={{"color":"#CBB26A"}}>PROGRAMMING DESKTOP LENGUAGES</h5>			
                                        
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
                                                
                                <h2 style={{"color": "#CBB26A", "lineHeight":1.5}}>SOFT SKILLS</h2>
                                
                                <h4 className='text-start text-white'>
                                    <ul>
                                        <li>Communication & Interpersonal  skills
                                            <h6 className='ms-5 mt-2'>Have the ability to communicate the desired message effectively while keeping the listener engaged.</h6>
                                        </li>

                                        <li>Public speaking skills
                                            <h6 className='ms-5 mt-2'> Have extensive experience of public speaking in the form of event hosting and delivering presentation in front of large audience. Also participated in in multiple debate and MUN competetions which further helped in developing these skills. </h6>
                                        </li>

                                        <li>Leadership & Management skills
                                            <h6 className='ms-5 mt-2'> Skilled in organising other people to reach a shared goal and keep the team motivated to reach the desired goal. Can organise and communicate clearly to support a team or project. </h6>
                                        </li>

                                        <li>Quick & Visual Learner
                                            <h6 className='ms-5 mt-2'>I am a very strong visual learner and am determined to solve problems and quickly find an effective solution.</h6>
                                        </li>

                                        <li> Effective Problem Solver
                                            <h6 className='ms-5 mt-2'> I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</h6>
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
           <h4 className='text-white'>ENGINEER of SYSTEMS </h4>
              <h6>GPA - 8.5</h6>
                <h5>NATIONAL OPEN UNIVERSITY CARABOBO STATE</h5>
                <img src={UNA} alt="" style={{width:"6em",height:"6em"}} />
                  <h5 className='text-start text-light mt-2'>
                    <ul style={{"lineHeight":1.5}}>
                      </ul>
         </h5>
       </div>

    <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 ms-2">   

<i className="fa-solid fa-building-columns my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>	
      <h5>1987</h5>
        <h4 className='text-white'>Industrial Mechanical Technician Superior </h4>
          <h6>Percentage - 75%</h6>
            <h5>UNIVERSITY INSTITUTE OF TECHNOLOGY OF PUERTO CABELLO</h5>
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
                                        <h5>Jenuary 2019 - Current (now)</h5>
                                        <h5>Updating Knowledge and freehance development</h5>
                                        <h3 className="my-2">FULL STACK DEVELOPMENT</h3>
                                        <h5>Valencia, Venezuela</h5>

                                        <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
                                            <ul>
                                                <li> Gained extensive training and experience in web designing and web development using latest technology.</li>
                                                <li> Learned how use open source platforms in an effective and quick way to resolve problems and bugs in code. </li>
                                                <li> Gained experience on working in a real life tech environment and working along side seasoned and experienced developers and professionals. </li>
                                                <li> Worked in Team along with other developers as well as in individual capacity on projects. </li>
                                                <li> Received extremely positive feedback and review from all the mentor. </li>
                                                <li> Designed and development of more than a 23 projects along with multiple minor projects from scratch as a part of training. </li>
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
                                        <h5>Jenuary 2003 - Jenuary 2019</h5>
                                        <h5>freehance development</h5>
         <h3 className="my-2">DESKTOP DEVELOPMENT - COMPUTER INSTRUCTOR - COMPUTER SERVICE FREEHANCE</h3>
                                <h5>Valencia, Venezuela</h5>

            <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
            <ul>
            <li> Technical service of repair (software and hardware) of personal computers, LAPTOPS, TABLETS, AND networking Services.</li>
            <li>Integration and installation of Nets of COMPUTERS. </li>
            <li> Development of production control systems and warehouse of reserves. </li>

            <li> Worked in Team along with other developers as well as in individual capacity on projects. </li>
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

export default Abtme;