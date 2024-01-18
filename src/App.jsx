import { BrowserRouter, Routes, Route } from "react-router-dom";

import Help from "./pages/Help";
import Landing from "./pages/Landing";

import Anwesh from "./pages/Anwesh";
import Ahwan from "./pages/Ahwan";
import Akanksha from "./pages/Akanksha";
import About from "./pages/About";
import Coordinators from "./pages/Coordinators";
import EventDetails from "./pages/EventDetails";

import AhwanEventBoys from "./pages/AhwanEventBoys";
import AhwanEventGirls from "./pages/AhwanEventGirls";

import RoboticsDetails from "./pages/RoboticsDetails";
import CreditsPage from "./pages/CreditsPage";
import Gallery from "./pages/Gallery/Gallery";
import Photoes from "./pages/Gallery/Photoes";
import Videos from "./pages/Gallery/Videos";
import AkankshaRegistrationPage from "./pages/Input/AkankshaRegistrationPage";
import Shedules from "./pages/Shedules";
import TechFestEvents from "./pages/TechFestEvents";
import BridgeDesign from "./pages/Registration page/BridgeDesign";
import PaperCrafting from "./pages/Registration page/PaperCrafting";
import CircuitDesign from "./pages/Registration page/CircuitDesign";
import FacePainting from "./pages/Registration page/FacePainting";
import Quiz from "./pages/Registration page/Quiz";
import FunWithCoding from "./pages/Registration page/FunWithCoding";
import Jam from "./pages/Registration page/Jam";
import OnlineGaming from "./pages/Registration page/OnlineGaming";
import PosterPainting from "./pages/Registration page/PosterPainting";
import TreasureHunt from "./pages/Registration page/TreasureHunt";
import PaperPresentation from "./pages/Registration page/PaperPresentation";
import FunWithWelding from "./pages/Registration page/FunWithWelding";
import Rangoli from "./pages/Registration page/Rangoli";
import MathOlympiad from "./pages/Registration page/MathOlympiad";
import Robotics from "./pages/Registration page/Robotics";
import Feedback from "./pages/Input/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/coordinators" element={<Coordinators />} />

        <Route path="/eventDetails" element={<EventDetails />} />

        <Route path="/schedules" element={<Shedules />} />

        <Route path="/anwesh" element={<Anwesh />} />
        <Route path="/ahwan" element={<Ahwan />} />
        <Route path="/akanksha" element={<Akanksha />} />
        <Route
          path="/akanksha/registrationPage"
          element={<AkankshaRegistrationPage />}
        />
        <Route path="/help" element={<Help />} />
        
        <Route path="/ahwanBoys" element={<AhwanEventBoys />} />
        <Route path="/ahwanGirls" element={<AhwanEventGirls />} />

        
        <Route path="/roboticsDetails" element={<RoboticsDetails/>} />
        <Route path="/anwesh/techEvents" element={<TechFestEvents/>}/>

       
        <Route path="/fest/CreditsPage" element={<CreditsPage />} />
        <Route path="/feedback" element={<Feedback/>}/>

        {/* Gallery  */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/Photoes" element={<Photoes />} />
        <Route path="/gallery/Videos" element={<Videos />} />

        <Route path="/anwesh/registration/PaperCrafting" element={<PaperCrafting/>}/>
        <Route path="/anwesh/registration/CircuitDesign" element={<CircuitDesign/>}/>
        <Route path="/anwesh/registration/BridgeDesign" element={<BridgeDesign/>}/>
        <Route path="/anwesh/registration/FacePainting" element={<FacePainting/>}/>
        <Route path="/anwesh/registration/Quiz" element={<Quiz/>}/>
        <Route path="/anwesh/registration/FunWithCoding" element={<FunWithCoding/>}/>
        <Route path="/anwesh/registration/Jam" element={<Jam/>}/>
        <Route path="/anwesh/registration/OnlineGaming" element={<OnlineGaming/>}/>
        <Route path="/anwesh/registration/PosterPainting" element={<PosterPainting/>}/>
        <Route path="/anwesh/registration/TeasureHunt" element={<TreasureHunt/>}/>
        <Route path="/anwesh/registration/PaperPresentation" element={<PaperPresentation/>}/>
        <Route path="/anwesh/registration/FunWithWelding" element={<FunWithWelding/>}/>
        <Route path="/anwesh/registration/Rangoli" element={<Rangoli/>}/>
        <Route path="/anwesh/registration/MathOlympiad" element={<MathOlympiad/>}/>
        <Route path="/anwesh/registration/Robotics" element={<Robotics/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
