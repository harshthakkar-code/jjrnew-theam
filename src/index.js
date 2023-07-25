import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './component/header/header.tsx';
import Footer from './component/footer/footer.tsx';
import Home from './component/home/home.tsx';
import About from './component/about/about.tsx';
import SoftTech from './component/home/software-technology/softTech.tsx';
import StartUp from './component/home/startup/startup.tsx';
import Itagency from './component/home/it-agency/itagency.tsx';
import Itsolution from './component/home/itsolution/itsolution.tsx';
import Machinelerning from './component/home/machinelearning/machinelearning.tsx';
import Moderncomp from './component/home/modernitcompany/modernitcomp.tsx';
import Softinovation from './component/home/softwareinovation/softinovatio.tsx';
import Itservice from './component/home/itservices/itservice.tsx';
import Cybersecurity from './component/home/cybersecurity/cybersecurity.tsx';
import Leadership from './component/company/leadership/leadership.tsx';
import Whychooseus from './component/company/whychooseus/whychooseus.tsx';
import Careers from './component/company/careers/career.tsx';
import Businesssolution from './component/itsolution/businesssolution/businesssolution.tsx';
import Industries from './component/itsolution/industries/industries.tsx';
import Manageitservice from './component/itsolution/manageitservices/manageitservices.tsx';
import Itservices from './component/itsolution/itservices/itservices.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/soft&tech" element={<SoftTech />} />
          <Route path="/startup" element={<StartUp />} />
          <Route path="/itagency" element={<Itagency />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/itsolution" element={<Itsolution />} />
          <Route path="/machinelerning" element={<Machinelerning />} />
          <Route path="/moderncompany" element={<Moderncomp />} />
          <Route path="/softinovation" element={<Softinovation />} />
          <Route path="/itservice" element={<Itservice />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/whychooseus" element={<Whychooseus />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/itservice" element={<Itservices />} />
          <Route path="/manageitservice" element={<Manageitservice />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/businesssolution" element={<Businesssolution />} /> 
          {/* <Route path="*" element={<NoPage />} /> */}   
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
