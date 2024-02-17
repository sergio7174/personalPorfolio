import './css/bio.css'

import bio_img from './imgs/bio_img.png'

import cv from './pdf_files/cur_sergio_eng.pdf'

function Bio()
{
    return(
        <>
        
            <div className="container-fluid p-0 bio_text_cont" style={{"overflowX":"hidden"}}>

                <div className="row cutout_box">
                    <h1 className="cutout_text" id="bio">MY BIO</h1>
                </div>

                <div className="row p-5">

                    <div className="col-lg-6 mx-auto text-center bio1_container bio_text" id="biotext_1">
                        
                                <h2><mark>Web</mark> 
                                <mark>Developer</mark> <br /> 
                                <mark>Front End Developer - </mark> 
                                <mark>Back End Developer</mark>
                                
                                </h2>

                        <div className="text-center py-0"><img src={ bio_img } alt="" className="bio_img_size" /></div>

                    </div>

                    <div className="col-lg-5 mx-auto bio_text_2 text-center" id="biotext_2">
                        
                    <h4 className="tag_name mb-3"> bio</h4>

                        I'm a <b>Full Stack web developer</b> based in <b>Valencia, Venezuela.</b> With a speciality in <b>Front End Development</b>. I possess a vast array of knowledge in many different front end,back end  and desktop languages, responsive frameworks and databases management systems. My objective is simply to be the best web developer that I can be and to contribute to the technology industry. <br /><br />

                        Although I'm very familiar with using frameworks, my websites are primarily hand-coded using <b>HTML5, CSS3, Bootstrap, JavaScript: React,  Redux, Angular & Jquery, for FrontEnd, and NodeJS, Express for Backend .</b> <br /><br /> 

                        With a strong emphasis on <b>"Progressive Enhancement"</b>, I look for creative ways to push the boundaries of website development without compromising on browser support while following best code practices. <br /><br />

                        In a quest for always keeping <b>myself updated</b>, I read books and attend seminars & meetups.

                    <h4 className="tag_name mb-3"> /bio </h4>

                    <button type="button" className="cv_button w-75 mt-4" 
                    title="SHOW CV">
                            <a href= {cv} target = "_blank">  
                                Curriculum Vitae (PDF) <i className="fa-solid fa-download ms-2"></i>
                            </a>
                    </button>
                    
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bio;