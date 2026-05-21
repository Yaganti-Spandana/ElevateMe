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
import AtsexperiencedResumeEditor from "./templates/AtsexperiencedResumeEditor";
import AtsexperiencedPortfolioPage from "./portfolios/AtsexperiencedPortfolioPage";
import HeadinghighlightprofessionalResumeEditor from "./templates/HeadinghighlightprofessionalResumeEditor";
import HeadinghighlightprofessionalPortfolioPage from "./portfolios/HeadinghighlightprofessionalPortfolioPage";
import HeadinghighlightfresherresumeEditor from "./templates/HeadinghighlightfresherResumeEditor";
import HeadinghighlightfresherPortfolioPage from "./portfolios/HeadinghighlightfresherPortfolioPage";
import Lifeoperatingsystem from "./Navbar/Lifeoperatingsystem";
import Lifedashboard from "./lifeoperatingsystem/Lifedashboard";
import Decisionmaking from "./lifeoperatingsystem/Decisionmaking";
import Weeklyplanner from "./lifeoperatingsystem/Weeklylifeplanner";
import Goalssystem from "./lifeoperatingsystem/Goalssystem";
import HabitsRoutinetracker from "./lifeoperatingsystem/Habit&routinetracker";
import Financeoverview from "./lifeoperatingsystem/Finanaceoverview";
import Lifedashboard1 from "./lifeoperatingsystem/Lifedashboard1";
import Decisionmaking1 from "./lifeoperatingsystem/Decisionmaking1";
import Weeklyplanner1 from "./lifeoperatingsystem/Weeklylifeplanner1";
import Goalssystem1 from "./lifeoperatingsystem/Goalssystem1";
import HabitsRoutinetracker1 from "./lifeoperatingsystem/Habit&routinetracker1";
import Financeoverview1 from "./lifeoperatingsystem/Finanaceoverview1";
import Lifedashboard2 from "./lifeoperatingsystem/Lifedashboard2";
import Decisionmaking2 from "./lifeoperatingsystem/Decisionmaking2";
import Weeklyplanner2 from "./lifeoperatingsystem/Weeklylifeplanner2";
import Goalssystem2 from "./lifeoperatingsystem/Goalssystem2";
import HabitsRoutinetracker2 from "./lifeoperatingsystem/Habit&routinetracker2";
import Financeoverview2 from "./lifeoperatingsystem/Finanaceoverview2";
import TwosidedexperiencedResumeEditor from "./templates/TwosidedexperiencedResumeEditor";
import TwosidedexperiencedPortfolioPage from "./portfolios/TwosidedexperiencedPortfolioPage";
import PremiumfresherResumeEditor from "./templates/PremiumfresherResumeEditor";
import PremiumfresherportfolioPage from "./portfolios/PremiumfresherPortfolioPage";
import ScrollToTop from "./ScrollToTop";
import Wedding1InvitationEditor from "./invitations/Wedding1InvitationEditor";
import MehandiInvitationEditor from "./invitations/MehandiInvitationEditor";
import NetworkingeventInvitationEditor from "./invitations/NetworkingeventInvitationEditor";
import ArtexhibitionInvitationEditor from "./invitations/ArtexhibitionInvitationEditor";
import BussinessmeetingInvitationEditor from "./invitations/BussinessmeetingInvitationEditor";
import BoardmeetingInvitationEditor from "./invitations/BoardmeetingInvitationEditor";
import AnnualgeneralmeetingInvitationEditor from "./invitations/AnnualgeneralmeetingInvitationEditor";
import ShareholdersmeetingInvitationEditor from "./invitations/ShareholdermeetingInvitation";
import StrategymeetingeventInvitationEditor from "./invitations/StrategymeetingInvitationEditor";
import CompanyanniversaryInvitationEditor from "./invitations/CompanyanniversaryInvitationEditor";
import OfficeopeningceremonyeventInvitationEditor from "./invitations/OfficeopeningceremonyInvitationEditor";
import SuccesscelebrationInvitationEditor from "./invitations/SuccesscelebrationInvitationEditor";
import TeamachievementeventInvitationEditor from "./invitations/TeamachievementeventInvitationEditor";
import EmployeeappreciationeventInvitationEditor from "./invitations/EmployeeappreciationeventInvitationEditor";
import BussinessmixersInvitationEditor from "./invitations/BussinessmixersInviationEditor";
import LeadershipmeetupsInvitationEditor from "./invitations/LeadershipmeetupsInvitationEditor";
import IndustryroundtableseventInvitationEditor from "./invitations/IndustryroundtablesInvitationEditor";
import ExecutivegatheringsInvitationEditor from "./invitations/ExecutivegatheringsInvitationEditor";
import ConferencesInvitationEditor from "./invitations/ConferencesInvitationEditor";
import PaneldiscussionsInvitationEditor from "./invitations/PaneldiscussionsInvitationEditor";
import GuestspeakersessionseventInvitationEditor from "./invitations/GuestspeakersessionsInvitationEditor";
import CorporatetrainingprogramsInvitationEditor from "./invitations/CorporatetrainingprogramsInvitationEditor";
import SkilldevelopmentsessionsInvitationEditor from "./invitations/SkilldevelopmentsessionsInvitationEditor";
import LeadershiptrainingInvitationEditor from "./invitations/LeadershiptrainingInvitationEditor";
import ConcertInvitationEditor from "./invitations/ConcertInvitationEditor";
import TheatredramaInvitationEditor from "./invitations/TheatredramaInvitationEditor";
import KidsentertainmenteventsInvitationEditor from "./invitations/KidsentertainmenteventsInvitationEditor";
import CarnivalInvitationEditor from "./invitations/CarnivalInvitationEditor";
import FunfaireventsInvitationEditor from "./invitations/FunfaireventsInvitationEditor";
import CommunityculturaleventsInvitationEditor from "./invitations/CommunityculturaleventsInvitationEditor";
import MoviescreeningsInvitationEditor from "./invitations/MoviescreeningsInvitationEditor";
import GamingeventsInvitationEditor from "./invitations/GamingeventsInvitationEdidor";
import EsportstournamentsInvitationEditor from "./invitations/EsportstournamnetsInvitationEditor";
import ContentcreatoreventsInvitationEditor from "./invitations/ContentcreatoreventsInvitationEditor";
import AwardnightsInvitationEditor from "./invitations/AwardnightsInvitationEditor";
import CharityentertainmentshowsInvitationEditor from "./invitations/CharityentertainmentshowsInvitationEditor";
import PubliclauncheventsInvitationEditor from "./invitations/PubliclauncheventsInvitationEditor";
import GrandopeningeventsInvitationEditor from "./invitations/GrandopeningeventsInvitationEditor";
import SatyanarayanapoojaInvitationEditor from "./invitations/SatyanarayanapoojaInvitationEditor";
import Gruhapravesham1InvitationEditor from "./invitations/Gruhapravesham1InvitationEditor";
import Namingceremony1InvitationEditor from "./invitations/Namingceremony1InvitationEditor";
import AnnaprasanaInvitationEditor from "./invitations/AnnaprasanaInvitationEditor";
import UpanayanamInvitationEditor from "./invitations/upanayanamInvitationEditor";
import AksharabhyasamInvitationEditor from "./invitations/AksharabhyasamInvitationEditor";
import EidInvitationEditor from "./invitations/EidInvitationEditor";
import RamadaniftarInvitationEditor from "./invitations/RamadaniftarInvitationEditor";
import NikahInvitationEditor from "./invitations/NikahInvitationEditor";
import MiladeventsInvitationEditor from "./invitations/MiladeventsInvitationEditor";
import Christmas1InvitationEditor from "./invitations/Christmas1InvitationEditor";
import ChurcheventsInvitationEditor from "./invitations/ChurcheventsInvitationEditor";
import BaptismInvitationEditor from "./invitations/BaptismInvitationEditor";
import EastergatheringsInvitationEditor from "./invitations/EastergatheringsInvitationEditor";

function App() {
  useGA();
  return (
    <>
    
    <Router>
      <ScrollToTop/>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/privacy" element={<PrivacyPolicy/>} />
<Route path="/terms" element={<Terms/>} />
<Route path="/resumetemplates" element={<ResumeTemplates/>} />
<Route path="/invitations" element={<Invitations/>} />
<Route path="/life" element={<Lifeoperatingsystem/>} />




<Route path="/editor/simple" element={<SimpleResumeEditor />} />
<Route path="/editor/twosidedsimple" element={<TwosidedResumeEditor/>} />
<Route path="/editor/yellowbasic" element={<YellowbasicResumeEditor/>} />
<Route path="/editor/border_highlight" element={<BorderHighlightEditor />} />
<Route path="/editor/fresher" element={<FresherResumeEditor />} />
<Route path="/editor/modern" element={<ModernResumeEditor />} />
<Route path="/editor/experienced" element={<ExperiencedResumeEditor />} />
<Route path="/editor/twosidedexperienced" element={<TwosidedexperiencedResumeEditor/>} />
<Route path="/editor/creative" element={<CreativeResumeEditor />} />
<Route path="/editor/Black_and_Gold" element={<BlackGoldResumeEditor/>} />
<Route path="/editor/premiumfresher" element={<PremiumfresherResumeEditor/>} />
<Route path="/editor/green_and_yellow" element={<GreenYellowResumeEditor/>} />
<Route path="/editor/internship" element={<InternshipResumeEditor/>} />
<Route path="/editor/career" element={<CareerChangeResumeEditor/>} />
<Route path="/editor/atsprofessional" element={<AtsprofessionalResumeEditor/>} />
<Route path="/editor/atsfresher" element={<AtsfresherResumeEditor/>} />
<Route path="/editor/atsexperienced" element={<AtsexperiencedResumeEditor/>} />
<Route path="/editor/headinghighlightprofessional" element={<HeadinghighlightprofessionalResumeEditor/>} />
<Route path="/editor/headinghighlightfresher" element={<HeadinghighlightfresherresumeEditor/>} />




<Route path="/portfolio/simple/:username" element={<SimpleTemplatePortfolioPage/>} />
<Route path="/portfolio/twosidedsimple/:username" element={<TwosidedsimpleTemplatePortfolioPage/>} />
<Route path="/portfolio/border/:username" element={<BorderHighlightPortfolioPage/>} />
<Route path="/portfolio/modern/:username" element={<ModernTemplatePortfolioPage/>} />
<Route path="/portfolio/fresher/:username" element={<FresherTemplatePortfolioPage/>} />
<Route path="/portfolio/experienced/:username" element={<ExperiencedTemplatePortfolioPage/>} />
<Route path="/portfolio/twosidedexperienced/:username" element={<TwosidedexperiencedPortfolioPage/>} />
<Route path="/portfolio/creative/:username" element={<CreativeTemplatePortfolioPage/>} />
<Route path="/portfolio/Black_and_Gold/:username" element={<BlackGoldResumefolioPage/>} />
<Route path="/portfolio/premiumfresher/:username" element={<PremiumfresherportfolioPage/>} />
<Route path="/portfolio/green_and_yellow/:username" element={<GreenYellowPortfolioPage/>} />
<Route path="/portfolio/internship/:username" element={<InternshipPortfolioPage/>} />
<Route path="/portfolio/career/:username" element={<CareerChangePortfolioPage/>} />
<Route path="/portfolio/yellowbasic/:username" element={<YellowbasicPortfolioPage/>} />
<Route path="/portfolio/atsprofessional/:username" element={<AtsprofessionalPortfolioPage/>} />
<Route path="/portfolio/atsfresher/:username" element={<AtsfresherPortfolioPage/>} />
<Route path="/portfolio/atsexperienced/:username" element={<AtsexperiencedPortfolioPage/>} />
<Route path="/portfolio/headinghighlightprofessional/:username" element={<HeadinghighlightprofessionalPortfolioPage/>} />
<Route path="/portfolio/headinghighlightfresher/:username" element={<HeadinghighlightfresherPortfolioPage/>} />



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
<Route path="/editor/temple_wedding" element={<Wedding1InvitationEditor/>} />
<Route path="/editor/mehandi" element={<MehandiInvitationEditor/>} />
<Route path="/editor/networkingevent" element={<NetworkingeventInvitationEditor/>} />
<Route path="/editor/artexhibition" element={<ArtexhibitionInvitationEditor/>} />
<Route path="/editor/bussinessmeeting" element={<BussinessmeetingInvitationEditor/>} />
<Route path="/editor/boardmeeting" element={<BoardmeetingInvitationEditor/>} />
<Route path="/editor/Annualgeneralmeeting" element={<AnnualgeneralmeetingInvitationEditor/>} />
<Route path="/editor/shareholdersmeeting" element={<ShareholdersmeetingInvitationEditor/>} />
<Route path="/editor/strategymeeting" element={<StrategymeetingeventInvitationEditor/>} />
<Route path="/editor/companyanniversary" element={<CompanyanniversaryInvitationEditor/>} />
<Route path="/editor/officeopeningceremony" element={<OfficeopeningceremonyeventInvitationEditor/>} />
<Route path="/editor/successcelebration" element={<SuccesscelebrationInvitationEditor/>} />
<Route path="/editor/teamachievementevent" element={<TeamachievementeventInvitationEditor/>} />
<Route path="/editor/employeeappreciationevent" element={<EmployeeappreciationeventInvitationEditor/>} />
<Route path="/editor/bussinessmixers" element={<BussinessmixersInvitationEditor/>} />
<Route path="/editor/leadershipmeetups" element={<LeadershipmeetupsInvitationEditor/>} />
<Route path="/editor/industryroundtables" element={<IndustryroundtableseventInvitationEditor/>} />
<Route path="/editor/executivegatherings" element={<ExecutivegatheringsInvitationEditor/>} />
<Route path="/editor/conferences" element={<ConferencesInvitationEditor/>} />
<Route path="/editor/paneldiscussions" element={<PaneldiscussionsInvitationEditor/>} />
<Route path="/editor/guestspeakersessions" element={<GuestspeakersessionseventInvitationEditor/>} />
<Route path="/editor/corporatetrainingprograms" element={<CorporatetrainingprogramsInvitationEditor/>} />
<Route path="/editor/skilldevelopmentsessions" element={<SkilldevelopmentsessionsInvitationEditor/>} />
<Route path="/editor/leadershiptraining" element={<LeadershiptrainingInvitationEditor/>} />
<Route path="/editor/concert" element={<ConcertInvitationEditor/>} />
<Route path="/editor/theatredrama" element={<TheatredramaInvitationEditor/>} />
<Route path="/editor/kidsentertainmentevents" element={<KidsentertainmenteventsInvitationEditor/>} />
<Route path="/editor/carnival" element={<CarnivalInvitationEditor/>} />
<Route path="/editor/funfairevents" element={<FunfaireventsInvitationEditor/>} />
<Route path="/editor/communityculturalevents" element={<CommunityculturaleventsInvitationEditor/>} />
<Route path="/editor/moviescreenings" element={<MoviescreeningsInvitationEditor/>} />
<Route path="/editor/gamingevents" element={<GamingeventsInvitationEditor/>} />
<Route path="/editor/esportstournaments" element={<EsportstournamentsInvitationEditor/>} />
<Route path="/editor/contentcreatorevents" element={<ContentcreatoreventsInvitationEditor/>} />
<Route path="/editor/awardnights" element={<AwardnightsInvitationEditor/>} />
<Route path="/editor/charityentertainmentshows" element={<CharityentertainmentshowsInvitationEditor/>} />
<Route path="/editor/publiclaunchevents" element={<PubliclauncheventsInvitationEditor/>} />
<Route path="/editor/grandopeningevents" element={<GrandopeningeventsInvitationEditor/>} />
<Route path="/editor/satyanarayanapooja" element={<SatyanarayanapoojaInvitationEditor/>} />
<Route path="/editor/gruhapravesham_1" element={<Gruhapravesham1InvitationEditor/>} />
<Route path="/editor/namingceremony_1" element={<Namingceremony1InvitationEditor/>} />
<Route path="/editor/annaprasana" element={<AnnaprasanaInvitationEditor/>} />
<Route path="/editor/upanayanam" element={<UpanayanamInvitationEditor/>} />
<Route path="/editor/aksharabhyasam" element={<AksharabhyasamInvitationEditor/>} />
<Route path="/editor/eid" element={<EidInvitationEditor/>} />
<Route path="/editor/ramadaniftar" element={<RamadaniftarInvitationEditor/>} />
<Route path="/editor/nikah" element={<NikahInvitationEditor/>} />
<Route path="/editor/miladevents" element={<MiladeventsInvitationEditor/>} />
<Route path="/editor/christmas1" element={<Christmas1InvitationEditor/>} />
<Route path="/editor/churchevents" element={<ChurcheventsInvitationEditor/>} />
<Route path="/editor/baptism" element={<BaptismInvitationEditor/>} />
<Route path="/editor/eastergatherings" element={<EastergatheringsInvitationEditor/>} />


<Route path="/editor/lifedashboard" element={<Lifedashboard/>} />
<Route path="/editor/lifedashboard1" element={<Lifedashboard1/>} />
<Route path="/editor/lifedashboard2" element={<Lifedashboard2/>} />
<Route path="/editor/decisionmaking" element={<Decisionmaking/>} />
<Route path="/editor/decisionmaking1" element={<Decisionmaking1/>} />
<Route path="/editor/decisionmaking2" element={<Decisionmaking2/>} />
<Route path="/editor/weeklyplanner" element={<Weeklyplanner/>} />
<Route path="/editor/weeklyplanner1" element={<Weeklyplanner1/>} />
<Route path="/editor/weeklyplanner2" element={<Weeklyplanner2/>} />
<Route path="/editor/goalssystem" element={<Goalssystem/>} />
<Route path="/editor/goalssystem1" element={<Goalssystem1/>} />
<Route path="/editor/goalssystem2" element={<Goalssystem2/>} />
<Route path="/editor/habits_routinetracker" element={<HabitsRoutinetracker/>} />
<Route path="/editor/habits_routinetracker1" element={<HabitsRoutinetracker1/>} />
<Route path="/editor/habits_routinetracker2" element={<HabitsRoutinetracker2/>} />
<Route path="/editor/financeoverview" element={<Financeoverview/>} />
<Route path="/editor/financeoverview1" element={<Financeoverview1/>} />
<Route path="/editor/financeoverview2" element={<Financeoverview2/>} />



      </Routes>
    </Router>
    </>
  );
}

export default App;