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
<Route path="/portfolio/border/:username" element={<BorderHighlightPortfolioPage/>} />
<Route path="/portfolio/modern/:username" element={<ModernTemplatePortfolioPage/>} />
<Route path="/portfolio/fresher/:username" element={<FresherTemplatePortfolioPage/>} />
<Route path="/portfolio/experienced/:username" element={<ExperiencedTemplatePortfolioPage/>} />
<Route path="/portfolio/creative/:username" element={<CreativeTemplatePortfolioPage/>} />
<Route path="/portfolio/Black_and_Gold/:username" element={<BlackGoldResumefolioPage/>} />
<Route path="/portfolio/green_and_yellow/:username" element={<GreenYellowPortfolioPage/>} />
        <Route path="/editor/simple" element={<SimpleResumeEditor />} />
        <Route path="/editor/border_highlight" element={<BorderHighlightEditor />} />
        <Route path="/editor/fresher" element={<FresherResumeEditor />} />
        <Route path="/editor/modern" element={<ModernResumeEditor />} />
        <Route path="/editor/experienced" element={<ExperiencedResumeEditor />} />
        <Route path="/editor/creative" element={<CreativeResumeEditor />} />
        <Route path="/editor/Black_and_Gold" element={<BlackGoldResumeEditor/>} />
        <Route path="/editor/green_and_yellow" element={<GreenYellowResumeEditor/>} />
        <Route path="/editor/wedding1" element={<InvitationEditor/>} />
        <Route path="/editor/birthday1" element={<BirthdayInvitationEditor/>} />
        <Route path="/editor/engagement1" element={<EngagementInvitationEditor/>} />
        <Route path="/editor/kittyparty1" element={<KittypartyInvitationEditor/>} />
        <Route path="/editor/haldi1" element={<HaldiInvitationEditor/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;