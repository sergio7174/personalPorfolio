import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSpanish from './homeSpanish/HomeSpanish';


function App()
{
    return(
        <>
           
        
         <BrowserRouter>
         
         <Routes>
           
            <Route exact path='/' element={<Home />} /> 
            <Route exact path='/homeSpanish' element={<HomeSpanish />} />
            {/*<Route exact path='*' element={<Home />} />*/}
          
            
            </Routes>
        </BrowserRouter>    
        </>
    )
}

export default App;