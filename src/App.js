import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import useGA from "./useGA";
// Import all editors
import SimpleResumeEditor from "./templates/SimpleResumeEditor";
import FresherResumeEditor from "./templates/FresherResumeEditor";
import ModernResumeEditor from "./templates/ModernResumeEditor";
import ExperiencedResumeEditor from "./templates/ExperiencedResumeEditor";
import CreativeResumeEditor from "./templates/CreativeResumeEditor";
import BorderHighlightEditor from "./templates/HeadingHighlightEditor";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import PrivacyPolicy from "./Navbar/Privacypolicy";
import Terms from "./Navbar/Terms";
import SimpleTemplatePortfolioPage from "./portfolios/SimpleTemplatePortfolioPage";
import BorderHighlightPortfolioPage from "./portfolios/BorderHighlightPortfoliopage";
import ModernTemplatePortfolioPage from "./portfolios/ModernTemplatePortfolioPage";
import FresherTemplatePortfolioPage from "./portfolios/FresherTemplatePortfolioPage";
import ExperiencedTemplatePortfolioPage from "./portfolios/ExperiencedTemplatePortfolioPage";
import CreativeTemplatePortfolioPage from "./portfolios/CreativeTemplatePortfolioPage";
import BlackGoldResumeEditor from "./templates/Black_&_GoldResumeEditor";
import BlackGoldResumefolioPage from "./portfolios/Black_&_GoldPortfolioPage";
import GreenYellowPortfolioPage from "./portfolios/Green_&_YellowPortfolioPage";
import GreenYellowResumeEditor from "./templates/Green_&_YellowResumeEditor";
import InvitationEditor from "./invitations/InvitationEditor";
import BirthdayInvitationEditor from "./invitations/BirthdayInvitationEditor";
import EngagementInvitationEditor from "./invitations/EngagemntInvitationEditor";
import ResumeTemplates from "./Navbar/ResumeTemplates";
import Invitations from "./Navbar/Invitations";
import KittypartyInvitationEditor from "./invitations/kittypartyInvitationEditor";
import HaldiInvitationEditor from "./invitations/HaldiInvitationEditor";
import NamingCeremonyInvitationEditor from "./invitations/NamingCeremonyInvitationEditor";
import GruhapraveshamInvitationEditor from "./invitations/GruhapraveshamInvitationEditor";
import DiwaliInvitationEditor from "./invitations/DiwaliInvitationEditor";
import ProductlaunchInvitationEditor from "./invitations/ProductlaunchInvitationEditor";
import MusiceventInvitationEditor from "./invitations/MusiceventInvitationEditor";
import InternshipResumeEditor from "./templates/InternshipResumeEditor";
import InternshipPortfolioPage from "./portfolios/InternshipPortfolioPage";
import CareerChangeResumeEditor from "./templates/CareerChangeResumeEditor";
import CareerChangePortfolioPage from "./portfolios/CareerChangePortfolioPage";
import WeddingInvitationEditor from "./invitations/WeddingInvitationEditor";
import MickyMouseInvitationEditor from "./invitations/MickyMouseInvitationEditor";
import UnicornInvitationEditor from "./invitations/UnicornInvitationEditor";
import CollegefestInvitationEditor from "./invitations/CollegefestInvitationEditor";
import CollageInvitationEditor from "./invitations/CollageInvitationEditor";
import CricketsportsInvitationEditor from "./invitations/CricketsportsInvitationEditor";
import SeminarInvitationEditor from "./invitations/SeminarInvitationEditor";
import GraduationInvitationEditor from "./invitations/GraduationInvitationEditor";
import JobfairInvitationEditor from "./invitations/JobfairInvitationEditor";
import CulturalfestivalInvitationEditor from "./invitations/CulturalfestivalInvitationEditor";
import SankrantiInvitationEditor from "./invitations/SankrantiInvitationEditor";
import CradleInvitationEditor from "./invitations/CradleInvitationEditor";
import BabyannouncementInvitationEditor from "./invitations/BabyannouncementInvitationEditor";
import FarewellInvitationEditor from "./invitations/FarewellInvitationEditor";
import TechfesteventInvitationEditor from "./invitations/TechfestInvitationEditor";
import OfficepartyInvitationEditor from "./invitations/OfficepartyInvitationEditor";
import FashionshowInvitationEditor from "./invitations/FashionshowInvitationEditor";
import ChristmasInvitationEditor from "./invitations/ChristmasInvitationEditor";
import UgadiInvitationEditor from "./invitations/UgadiInvitationEditor";
import FirstbirthdayInvitationEditor from "./invitations/FirstbirthdayInvitationEditor";
import TwosidedResumeEditor from "./templates/TwosidedResumeEditor";
import TwosidedsimpleTemplatePortfolioPage from "./portfolios/TwosidedsimplePortfolioPage";
import YellowbasicResumeEditor from "./templates/YellowbasicResumeEditor";
import YellowbasicPortfolioPage from "./portfolios/YellowbasicPortfolioPage";
import AtsprofessionalResumeEditor from "./templates/AtsprofessionalResumeEditor";
import AtsprofessionalPortfolioPage from "./portfolios/AtsprofessionalPortfolioPage";
import AtsfresherResumeEditor from "./templates/AtsfresherResumeEditor";
import AtsfresherPortfolioPage from "./portfolios/AtsfresherPortfolioPage";

function App() {
  useGA();
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/resumetemplates" element={<ResumeTemplates/>} />
        <Route path="/invitations" element={<Invitations/>} />
        
        <Route path="/portfolio/simple/:username" element={<SimpleTemplatePortfolioPage/>} />
        <Route path="/portfolio/twosidedsimple/:username" element={<TwosidedsimpleTemplatePortfolioPage/>} />
<Route path="/portfolio/border/:username" element={<BorderHighlightPortfolioPage/>} />
<Route path="/portfolio/modern/:username" element={<ModernTemplatePortfolioPage/>} />
<Route path="/portfolio/fresher/:username" element={<FresherTemplatePortfolioPage/>} />
<Route path="/portfolio/experienced/:username" element={<ExperiencedTemplatePortfolioPage/>} />
<Route path="/portfolio/creative/:username" element={<CreativeTemplatePortfolioPage/>} />
<Route path="/portfolio/Black_and_Gold/:username" element={<BlackGoldResumefolioPage/>} />
<Route path="/portfolio/green_and_yellow/:username" element={<GreenYellowPortfolioPage/>} />
<Route path="/portfolio/internship/:username" element={<InternshipPortfolioPage/>} />
<Route path="/portfolio/career/:username" element={<CareerChangePortfolioPage/>} />
<Route path="/portfolio/yellowbasic/:username" element={<YellowbasicPortfolioPage/>} />
<Route path="/portfolio/atsprofessional/:username" element={<AtsprofessionalPortfolioPage/>} />
<Route path="/portfolio/atsfresher/:username" element={<AtsfresherPortfolioPage/>} />



        <Route path="/editor/simple" element={<SimpleResumeEditor />} />
        <Route path="/editor/twosidedsimple" element={<TwosidedResumeEditor/>} />
        <Route path="/editor/yellowbasic" element={<YellowbasicResumeEditor/>} />
        <Route path="/editor/border_highlight" element={<BorderHighlightEditor />} />
        <Route path="/editor/fresher" element={<FresherResumeEditor />} />
        <Route path="/editor/modern" element={<ModernResumeEditor />} />
        <Route path="/editor/experienced" element={<ExperiencedResumeEditor />} />
        <Route path="/editor/creative" element={<CreativeResumeEditor />} />
        <Route path="/editor/Black_and_Gold" element={<BlackGoldResumeEditor/>} />
        <Route path="/editor/green_and_yellow" element={<GreenYellowResumeEditor/>} />
        <Route path="/editor/internship" element={<InternshipResumeEditor/>} />
        <Route path="/editor/career" element={<CareerChangeResumeEditor/>} />
        <Route path="/editor/atsprofessional" element={<AtsprofessionalResumeEditor/>} />
        <Route path="/editor/atsfresher" element={<AtsfresherResumeEditor/>} />



        <Route path="/editor/wedding1" element={<InvitationEditor/>} />
        <Route path="/editor/birthday1" element={<BirthdayInvitationEditor/>} />
        <Route path="/editor/mickymousebirthday" element={<MickyMouseInvitationEditor/>} />
        <Route path="/editor/collegefest" element={<CollegefestInvitationEditor/>} />
        <Route path="/editor/collagebirthday" element={<CollageInvitationEditor/>} />
        <Route path="/editor/unicornbirthday" element={<UnicornInvitationEditor/>} />
        <Route path="/editor/engagement1" element={<EngagementInvitationEditor/>} />
        <Route path="/editor/kittyparty1" element={<KittypartyInvitationEditor/>} />
        <Route path="/editor/haldi1" element={<HaldiInvitationEditor/>} />
        <Route path="/editor/namingceremony1" element={<NamingCeremonyInvitationEditor/>} />
        <Route path="/editor/gruhapravesham1" element={<GruhapraveshamInvitationEditor/>} />
        <Route path="/editor/diwali1" element={<DiwaliInvitationEditor/>} />
        <Route path="/editor/sankranti1" element={<SankrantiInvitationEditor/>} />
        <Route path="/editor/productlaunch1" element={<ProductlaunchInvitationEditor/>} />
        <Route path="/editor/musicevent1" element={<MusiceventInvitationEditor/>} />
        <Route path="/editor/wedding2" element={<WeddingInvitationEditor/>} />
        <Route path="/editor/cricketsports" element={<CricketsportsInvitationEditor/>} />
        <Route path="/editor/seminar" element={<SeminarInvitationEditor/>} />
        <Route path="/editor/graduation" element={<GraduationInvitationEditor/>} />
        <Route path="/editor/jobfair" element={<JobfairInvitationEditor/>} />
        <Route path="/editor/culturalfestival" element={<CulturalfestivalInvitationEditor/>} />
        <Route path="/editor/cradle" element={<CradleInvitationEditor/>} />
        <Route path="/editor/babyannouncement" element={<BabyannouncementInvitationEditor/>} />
        <Route path="/editor/farewell" element={<FarewellInvitationEditor/>} />
        <Route path="/editor/techfest" element={<TechfesteventInvitationEditor/>} />
        <Route path="/editor/officeparty" element={<OfficepartyInvitationEditor/>} />
        <Route path="/editor/fashionshow" element={<FashionshowInvitationEditor/>} />
        <Route path="/editor/christmas" element={<ChristmasInvitationEditor/>} />
        <Route path="/editor/ugadi" element={<UgadiInvitationEditor/>} />
        <Route path="/editor/firstbirthday" element={<FirstbirthdayInvitationEditor/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;