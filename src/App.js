import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './Components /HomePage';
import MOU from './Components /MOU';
import COE from './Components /COE';
import Consultancy from './Components /Consultancy';
import ResearchActivities from './Components /ResearchActivities';
import COECECASE from './Components /COECECASE';
import COEManufacturing from './Components /COEManufacturing';
import COEAutomation from './Components /COEAutomation';
import COETransportation from './Components /COETransportation';
import COEHarvesting from './Components /COEHarvesting';
import COEMachineLearning from './Components /COEMachineLearning';
import COECombustion from './Components /COECombustion';
import COEElectronics from './Components /COEElectronics';
import COEResponse from './Components /COEResponse';
import COESupercomputing from './Components /COESupercomputing';
import COENDRC from './Components /COENDRC';
import COESIF from './Components /COESIF';
import MOUProjects from './Components /MOUProjects';
import SPARC from './Components /SPARC';
import GIAN from './Components /GIAN';
import Contact from './Components /Contact';
import FundingAgenices from './Components /FundingAgenices';
import FundingProjects from './Components /FundingProjects';
import DepartmentArchitecture from './Components /DepartmentArchitecture';
import DepartmentChemical from './Components /DepartmentChemical';
import DepartmentCA from './Components /DepartmentCA';
import DepartmentCivil from './Components /DepartmentCivil';
import DepartmentChemistry from './Components /DepartmentChemistry';
import DepartmentCSE from './Components /DepartmentCSE';
import DepartmentECE from './Components /DepartmentECE';
import DepartmentEEE from './Components /DepartmentEEE';
import DepartmentEnergy from './Components /DepartmentEnergy';
import DepartmentHumanities from './Components /DepartmentHumanities';
import DepartmentICE from './Components /DepartmentICE';
import DepartmentMME from './Components /DepartmentMME';
import DepartmentManagement from './Components /DepartmentManagement';
import DepartmentMath from './Components /DepartmentMath';
import DepartmentMech from './Components /DepartmentMech';
import DepartmentPhysics from './Components /DepartmentPhysics';
import DepartmentProd from './Components /DepartmentProd';
import IPR from './Components /IPR';
import CEDI from './Components /CEDI';
import SkillHub from './Components /SkillHub';
import MSME from './Components /MSME';
import IIC from './Components /IIC';


const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, [navigate]);
  
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MoU" element={<MOU />} />
          <Route path="/CenterOfExcellence" element={<COE />} />
          <Route path="/coeCECASE" element={<COECECASE />} />
          <Route path="/coeManufacturing" element={<COEManufacturing />} />
          <Route path="/coeAutomation" element={<COEAutomation />} />
          <Route path="/coeTransportation" element={<COETransportation />} />
          <Route path="/coeHarvesting" element={<COEHarvesting />} />
          <Route path="/coeML" element={<COEMachineLearning />} />
          <Route path="/coeCombustion" element={<COECombustion />} />
          <Route path="/coeElectronics" element={<COEElectronics />} />
          <Route path="/coeResponse" element={<COEResponse />} />
          <Route path="/coeComputing" element={<COESupercomputing />} />
          <Route path="/coeSIF" element={<COESIF />} />
          <Route path="/coeNDRC" element={<COENDRC />} />
          <Route path="/IPR" element={<IPR />} />

          <Route path="/Consultancy" element={<Consultancy />} />
          <Route path="/ResearchActivities" element={<ResearchActivities />} />
          <Route path="/Projects" element={<MOUProjects />} />
          <Route path="/SPARC" element={<SPARC />} />
          <Route path="/GIAN" element={<GIAN />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FundingAgencies" element={<FundingAgenices />} />
          <Route path="/FundingProjects" element={<FundingProjects />} />
          <Route path="/DepartmentArchitecture" element={<DepartmentArchitecture />} />
          <Route path="/DepartmentChemical" element={<DepartmentChemical />} />
          <Route path="/DepartmentCA" element={<DepartmentCA />} />
          <Route path="/DepartmentCivil" element={<DepartmentCivil />} />
          <Route path="/DepartmentChemistry" element={<DepartmentChemistry />} />
          <Route path="/DepartmentCSE" element={<DepartmentCSE />} />
          <Route path="/DepartmentECE" element={<DepartmentECE />} />
          <Route path="/DepartmentEEE" element={<DepartmentEEE />} />
          <Route path="/DepartmentEnergy" element={<DepartmentEnergy />} />
          <Route path="/DepartmentHumanities" element={<DepartmentHumanities />} />
          <Route path="/DepartmentICE" element={<DepartmentICE />} />
          <Route path="/DepartmentMME" element={<DepartmentMME />} />
          <Route path="/DepartmentManagement" element={<DepartmentManagement />} />
          <Route path="/DepartmentMath" element={<DepartmentMath />} />
          <Route path="/DepartmentMech" element={<DepartmentMech />} />
          <Route path="/DepartmentPhysics" element={<DepartmentPhysics />} />
          <Route path="/DepartmentProd" element={<DepartmentProd />} />
          <Route path="/CEDI" element={<CEDI />} />
          <Route path="/SkillHub" element={<SkillHub />} />
          <Route path="/IIC" element={<IIC />} />
          <Route path="/MSME" element={<MSME />} />
         


        </Routes>
      </div>
    </>
  );
};

export default App;
