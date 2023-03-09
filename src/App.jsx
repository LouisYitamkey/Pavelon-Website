import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>

    </div>
 
      

        <Routes>
          <Route path="/" element={ <Home/> } />
        </Routes>

      
    
    </BrowserRouter>
  );
}

export default App;
