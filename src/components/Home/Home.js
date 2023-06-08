import React from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

//importing compoonents
import Sidebar from '../Sidebar/Sidebar';
import Uploadlogo from '../Uploadlogo/Uploadlogo';
import Selectactivity from '../Selectactivity/Selectactivity';
import Adminlogin from '../Adminlogin/Adminlogin';



export default function Home() {
    return (
      <>
        <Router>

           {/* side bar and routing its components */}
            <Sidebar />
            <Routes>
            <Route path="/Adminlogin" element={<Adminlogin/>} />
            </Routes>
            <Routes>
            <Route path="/Uploadlogo" element={<Uploadlogo/>} />
            </Routes>
            <Routes>
            <Route path="/Selectactivity" element={<Selectactivity/>} />
            </Routes>


        </Router>
      </>
    );
  }