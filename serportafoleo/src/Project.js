import swal from "sweetalert"; //for alert box

import './css/project.css'

import p_img1 from './imgs/p1.png';
import p_img2 from './imgs/p2.png';
import p_img3 from './imgs/p3.png';
import ReduxToolkit from './imgs/redux-toolkit.png';
import Express from './imgs/express.png';
import Angular from './imgs/angular.png'; 
import MongoDB from './imgs/mongo.png';
import Project003React from './imgs/project 003 - pizza FLEET.jpg';
import Project002React from './imgs/project002.jpg';
import Project004React from './imgs/project004ReactYoutubeclone.jpg';
import Project005React from './imgs/project005ReactTour.jpg';
import Project006React from './imgs/project006ProShop.jpg';
import Project007Angular from './imgs/project007Angular.jpg';
import Project008Angular from './imgs/project008AngularFurnitureShop.jpg';
import Project009Angular from './imgs/project009AngularPhotoGallery.jpg';
import Project010Angular from './imgs/project0010AngularHUstleFitness.jpg';
import Project011Nodejs from './imgs/project0011nodejsBookAdits.jpg';
import Project012Nodejs from './imgs/project0012nodejsCookingBlog.jpg';
import Project013Nodejs from './imgs/project0013nodejsFibonnacci.jpg';
import Project014Nodejs from './imgs/project014NodejsSerFoundation.jpg';
import Project015Nodejs from './imgs/project015NodejsSerFoundation.jpg';
import Project016Nodejs from './imgs/project016NodejsSalad.jpg';
import Project017Nodejs from './imgs/project004ReactYoutubeclone.jpg';





function Project()
{

    function message()
    {
        swal({
            title: "Hey !! ",
            text: 'You are already on this project.',
            icon: "warning",
        })
    } 

    return(
        <>
            <div className="container-fluid project_container" style={{"overflowX":"hidden"}}>

                {/* project heading */}
                <div className="row project_hding ">
                    <h4 className="mt-5" id="project"> CASES STUDIED </h4> <br />
                    <h1><b> Projects Worked </b></h1>
                </div>

                <div className="row py-5">

                    {/* project 1 */}
                    <div className="col-md-3 py-3 mt-3 project_card mx-auto" id="project3">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img3} alt="" className="project_img_size" />   
                        </div>

                        <div className="project_intro mt-4">
                            <h3>E-COMMERCE WEBSITE</h3> 
                            <h4>MERN Stack e-commerce Dynamic Website</h4>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>

                        <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li>Incorporated all the key features of an e-commerce website in a dynamic manner.</li>
                                    <li>Created multiple custom API using Nodejs and integrated it with a React setup.</li>
                                    <li>Followed best code practices while developing dynamic and reusable code.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technology Used</h6>
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
                            <h2>PORTFOLIO WEBSITE</h2>
                            <h3>React Based Portfolio Website</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                        <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive front end, back end web page setup along with integrated database setup.</li>
                                    <li>Created all the components from scratch using react and java script.</li>
                                    <li>Hand coded custom amination using css and Jquery and making the website interactive.</li>
                                    <li>Worked on how to deploy a live website.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technology Used</h6>
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
                            <h2>PIZZA FLEET</h2>
                            <h3> A pizza delivery web application - MERN STACK</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using React-Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> This is a YouTube Clone that implements the main features of YouTube - MERN STACK</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using React-Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> This project aimed to develop a dynamic and user-friendly web application that facilitates travel enthusiasts in planning and managing their trips effectively. - MERN STACK</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using React-Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> eCommerce platform built with the MERN stack & Redux-Toolkit</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using React-Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> Allows customers to register and reserve rooms online and for the company to effectively manage their room rental business. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> Is a portal which helps users buy furniture online. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> Is a complete photo gallery website online. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> A movie streaming website like YouTube. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using Angular - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h2>BOOK ADDICTS - NODEJS - EJS</h2>
                            <h3> A website for Bibliophiles. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h2>COOKING BLOG - NODEJS EJS</h2>
                            <h3> Recipe website on which user can see recipes of different countries. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> Simplifies learning and makes education accessible for everyone. </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> The website consists of a portal for keeping people updated about the latest opportunities in different fields.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h3> This application has lots of features including sales, expenses, returns, servicing and many more. There are lots of common features like pagination, searching, api for reading data for auto-completion on the form fields, PDF generations on sales or servicing.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h2> REAL TIME SALAD- NODEJS EJS</h2>
                            <h3> Real-time Salad order tracker application.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                            <h2>VIDEO STREAMMING WEBSIDE - NODEJS EJS</h2>
                            <h3> Streaming website, video tube, upload GIFs too.  </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily  - Nodejs - Express java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
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
                             and More...
                        </a>
                    </h4>

                </div>

            </div>

        </>
    )
}

export default Project;