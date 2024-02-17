import './../css/counter.css'

import counter_img from './../imgs/float_img1.png'

const CounterSpanish = () =>
{
    return(
        <>
            <div className="container-fluid py-3 counter_container" style={{"overflowX":"hidden"}}>

                <div className="row">

                    <div className='counter_img_cont mx-auto' id='counter_img_divSp'>
                        <img src={counter_img} alt='counter_image' className='counter_img_size' />
                    </div>

                    <div className='col-md-8 mx-auto d-flex flex-wrap' style={{"overflowY":"hidden"}}>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter1Sp'>
                           
                            <p> <i className="fa-solid fa-clock" style={{"fontSize":45}}></i> </p>
                            <h3 className="count counter_text">12,000+</h3> 
                            <p> Horas de Trabajo </p>
                        
                        </div>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter2'>

                            <p> <i className="fa-solid fa-code" style={{"fontSize":45}}></i> </p> 
                            <h3 className="count counter_text">55,000+</h3>
                            <p> Lineas de Codigo </p>

                        </div>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter3Sp'>

                            <p> <i className="fa-solid fa-mug-saucer" style={{"fontSize":45}}></i> </p>
                            <h3 className="count counter_text">500+</h3>
                            <p> Tasas de Café </p>

                        </div>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter4Sp'>

                            <p> <i className="fa-solid fa-cloud-moon" style={{"fontSize":45}}></i> </p>
                            <h3 className="count counter_text">600+</h3>
                            <p>  Noches sin dormir </p>

                        </div>

                    </div>                    

                </div>

            </div>
   
        </>
    )
}

export default CounterSpanish;