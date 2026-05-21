import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import invitation1 from "../images/wedding/invitation1.png";
import birthday_invitation1 from "../images/birthday/birthday_invitation1.png";
import micky_mouse_birthday from "../images/micky_mouse/micky_mouse_birthday.png";
import collage_invitation from "../images/collage/collage_invitation.png";
import unicorn_invitation from "../images/unicorn/unicorn_invitation.png";
import engagement_invitation1 from "../images/engagement/engagement_invitation1.png";
import kittyparty1 from "../images/kitty_party/kittyparty1.png";
import haldi_invitation1 from "../images/haldi/haldi_invitation1.png";
import namingceremony_invitation1 from "../images/naming_ceremony/namingceremony_invitation1.png";
import gruha_pravesham1 from "../images/gruhapravesham/gruha_pravesham1.png";
import diwali_invitation1 from "../images/diwali/diwali_invitation1.png";
import productlaunch_invitation1 from "../images/product_lauch/productlaunch_invitation1.png";
import musicevent_invitation1 from "../images/music_event/musicevent_invitation1.png";
import wedding_invitation1 from "../images/wedding1/wedding_invitation1.png";
import collegefest1 from "../images/college_fest/collegefest1.png";
import collegefest2 from "../images/college_fest/collegefest2.png";
import collegefest3 from "../images/college_fest/collegefest3.png";
import cricketsports_invitation from "../images/cricket_sports/cricketsports_invitation.png";
import seminar_invitation from "../images/seminar/seminar_invitation.png";
import graduation_invitation from "../images/graduation/graduation_invitation.png";
import jobfair_invitation from "../images/job_fair/jobfair_invitation.png";
import culturalfestival_invitation from "../images/cultural_festival/culturalfestival_invitation.png";
import sankranti1 from "../images/sankranti/sankranti1.png";
import sankranti2 from "../images/sankranti/sankranti2.png";
import cradle_invitation from "../images/cradle_ceremony/cradle_invitation.png";
import babyannouncement_invitation from "../images/baby_announcement/babyannouncement_invitation.png"; 
import farewell_invitation1 from "../images/farewell/farewell_invitation1.png"; 
import farewell_invitation2 from "../images/farewell/farewell_invitation2.png"; 
import techfest_invitation from "../images/techfest/techfest_invitation.png"; 
import officeparty_invitation1 from "../images/officeparty/officeparty_invitation1.png"; 
import officeparty_invitation2 from "../images/officeparty/officeparty_invitation2.png";
import fashionshow_invitation1 from "../images/fashionshow/fashionshow_invitation1.png"; 
import fashionshow_invitation2 from "../images/fashionshow/fashionshow_invitation2.png";
import christmas_invitation from "../images/christmas/christmas_invitation.png";
import ugadi_invitation1 from "../images/ugadi/ugadi_invitation1.png"; 
import ugadi_invitation2 from "../images/ugadi/ugadi_invitation2.png";
import firstbirthday_invitation1 from "../images/firstbirthday/firstbirthday_invitation1.png"; 
import firstbirthday_invitation2 from "../images/firstbirthday/firstbirthday_invitation2.png";
import wedding2_invitation from "../images/wedding2/wedding2_invitation.png";
import mehandi_invitation from "../images/mehandi/mehandi_invitation.png";
import networkingevent_invitation from "../images/networkingevent/networkingevent_invitation.png";
import artexhibition_invitation from "../images/artexhibition/artexhibition_invitation.png";
import bussinessmeeting_invitation from "../images/bussinessmeeting/bussinessmeeting_invitation.png";
import boardmeeting_invitation from "../images/boardmeeting/boardmeeting_invitation.png";
import Annualgeneralmeeting_invitation1 from "../images/Annualgeneralmeeting/Annualgeneralmeeting_invitation1.png";
import Annualgeneralmeeting_invitation2 from "../images/Annualgeneralmeeting/Annualgeneralmeeting_invitation2.png";
import shakeholdersmeeting_invitation1 from "../images/shakeholdersmeeting/shakeholdersmeeting_invitation1.png";
import shakeholdersmeeting_invitation2 from "../images/shakeholdersmeeting/shakeholdersmeeting_invitation2.png";
import strategymeeting_invitation from "../images/strategymeeting/strategymeeting_invitation.png";
import companyanniversary_invitation from "../images/companyanniversary/companyanniversary_invitation.png";
import officeopeningceremony_invitation from "../images/officeopeningceremony/officeopeningceremony_invitation.png";
import successcelebration_invitation1 from "../images/successcelebration/successcelebration_invitation1.png";
import successcelebration_invitation2 from "../images/successcelebration/successcelebration_invitation2.png";
import teamachievementevent_invitation from "../images/teamachievementevent/teamachievementevent_invitation.png";
import employeeappreciationevent_invitation from "../images/employeeappreciationevent/employeeappreciationevent_invitation.png";
import bussinessmixers_invitation from "../images/bussinessmixers/bussinessmixers_invitation.png";
import leadershipmeetups_invitation from "../images/leadershipmeetups/leadershipmeetups_invitation.png";
import industryroundtables_invitation from "../images/industryroundtables/industryroundtables_invitation.png";
import executivegatherings_invitation from "../images/executivegatherings/executivegatherings_invitation.png";
import conferences_invitation1 from "../images/conferences/conferences_invitation1.png";
import conferences_invitation2 from "../images/conferences/conferences_invitation2.png";
import paneldiscussions_invitation1 from "../images/paneldiscussions/paneldiscussions_invitation1.png";
import paneldiscussions_invitation2 from "../images/paneldiscussions/paneldiscussions_invitation2.png";
import guestspeakersessions_invitation from "../images/guestspeakersessions/guestspeakersessions_invitation.png";
import corporatetrainingprograms_invitation1 from "../images/corporatetrainingprograms/corporatetrainingprograms_invitation1.png";
import corporatetrainingprograms_invitation2 from "../images/corporatetrainingprograms/corporatetrainingprograms_invitation2.png";
import skilldevelopmentsessions_invitation1 from "../images/skilldevelopmentsessions/skilldevelopmentsessions_invitation1.png";
import skilldevelopmentsessions_invitation2 from "../images/skilldevelopmentsessions/skilldevelopmentsessions_invitation2.png";
import leadershiptraining_invitation1 from "../images/leadershiptraining/leadershiptraining_invitation1.png";
import leadershiptraining_invitation2 from "../images/leadershiptraining/leadershiptraining_invitation2.png";
import concert_invitation from "../images/concert/concert_invitation.png";
import theatredrama_invitation from "../images/theatredrama/theatredrama_invitation.png";
import kidsentertainmentevents_invitation from "../images/kidsentertainmentevents/kidsentertainmentevents_invitation.png";
import carnival_invitation from "../images/carnival/carnival_invitation.png";
import funfairevents_invitation from "../images/funfairevents/funfairevents_invitation.png";
import communityculturalevents_invitation from "../images/communityculturalevents/communityculturalevents_invitation.png";
import moviescreenings_invitation from "../images/moviescreenings/moviescreenings_invitation.png";
import gamingevents_invitation from "../images/gamingevents/gamingevents_invitation.png";
import esportstournaments_invitation from "../images/esportstournaments/esportstournaments_invitation.png";
import contentcreatorevents_invitation from "../images/contentcreatorevents/contentcreatorevents_invitation.png";
import awardnights_invitation from "../images/awardnights/awardnights_invitation.png";
import charityentertainmentshows_invitation from "../images/charityentertainmentshows/charityentertainmentshows_invitation.png";
import publiclaunchevents_invitation from "../images/publiclaunchevents/publiclaunchevents_invitation.png";
import grandopeningevents_invitation from "../images/grandopeningevents/grandopeningevents_invitation.png";
import satyanarayanapooja_invitation from "../images/satyanarayanapooja/satyanarayanapooja_invitation.png";
import gruhapravesham_invitation from "../images/gruhapravesham/gruhapravesham_invitation.png";
import namingceremony1_invitation from "../images/naming_ceremony/namingceremony1_invitation.png";
import annaprasana_invitation1 from "../images/annaprasana/annaprasana_invitation1.png";
import annaprasana_invitation2 from "../images/annaprasana/annaprasana_invitation2.png";
import upanayanam_invitation from "../images/upanayanam/upanayanam_invitation.png";
import aksharabhyasam_invitation from "../images/aksharabhyasam/aksharabhyasam_invitation.png";
import eid_invitation from "../images/eid/eid_invitation.png";
import ramadaniftar_invitation from "../images/ramadaniftar/ramadaniftar_invitation.png";
import nikah_invitation from "../images/nikah/nikah_invitation.png";
import miladevents_invitation from "../images/miladevents/miladevents_invitation.png";
import christmas1_invitation from "../images/christmas/christmas1_invitation.png";
import churchevents_invitation from "../images/churchevents/churchevents_invitation.png";
import baptism_invitation from "../images/baptism/baptism_invitation.png";
import eastergatherings_invitation from "../images/eastergatherings/eastergatherings_invitation.png";
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

import "../Home.css";
const templates = [
  {
    id: "techfest",
    name: "Tech Fest Invitation",
    dname: "Tech Fest Invitation",
    images: [techfest_invitation], 
    categories: ["Education & Student Events"]
  },
  {
    id: "culturalfestival",
    name: "Cultural Festival Invitation",
    dname: "Cultural Festival Invitation",
    images: [culturalfestival_invitation], 
    categories: ["Entertainment & Public Events"],
  },
   {
    id: "ugadi",
    name: "Ugadi Invitation",
    dname: "Ugadi Invitation",
    images: [ugadi_invitation1,ugadi_invitation2], 
    categories: ["Festivals & Religious","Trending / Modern"],
  },
  {
    id: "sankranti1",
    name: "Sankranti/Pongal Invitation",
    dname: "Sankranti/Pongal Invitation",
    images: [sankranti1,sankranti2], 
    categories: ["Festivals & Religious","Trending / Modern"],
  },
  {
    id: "collegefest",
    name: "College Fest Invitation",
    dname: "College Fest Invitation",
    images: [collegefest1,collegefest2,collegefest3], 
    categories: ["Education & Student Events","Trending / Modern"]
  },
  {
    id: "fashionshow",
    name: "Fashion Show Invitation",
    dname: "Fashion Show Invitation",
    images: [fashionshow_invitation1,fashionshow_invitation2],
    categories: ["Entertainment & Public Events","Trending / Modern"], 
  },
  {
    id: "cricketsports",
    name: "Cricket Sports Invitation",
    dname: "Cricket Sports Invitation",
    images: [cricketsports_invitation], 
    categories: ["Entertainment & Public Events"],
  },
   {
    id: "seminar",
    name: "Seminar Invitation",
    dname: "Seminar Invitation",
    images: [seminar_invitation], 
    categories: ["Corporate & Professional"],
  },
  {
    id: "graduation",
    name: "Graduation Invitation",
    dname: "Graduation Invitation",
    images: [graduation_invitation], 
    categories: ["Education & Student Events"],
  },
  {
    id: "babyannouncement",
    name: "Baby Announcement Event Invitation",
    dname: "Baby Announcement Event Invitation",
    images: [babyannouncement_invitation], 
    categories: ["Baby & Family"],
  },
   {
    id: "kittyparty1",
    name: "Kitty Party Invitation",
    dname: "Kitty Party Invitation",
    categories: ["Personal Celebrations"],
    images: [kittyparty1],
  },
  {
    id: "cradle",
    name: "Cradle Ceremony Invitation",
    dname: "Cradle Ceremony Invitation",
    images: [cradle_invitation], 
    categories: ["Baby & Family"],
  },
  {
    id: "officeparty",
    name: "Office Party Invitation",
    dname: "Office Party Invitation",
    images: [officeparty_invitation1,officeparty_invitation2], 
    categories: ["Corporate & Professional","Trending / Modern"]
  },
  {
    id: "firstbirthday",
    name: "First Birthday Invitation",
    dname: "First Birthday Invitation",
    images: [firstbirthday_invitation1,firstbirthday_invitation2], 
    categories: ["Baby & Family","Trending / Modern"],
  },
  {
    id: "jobfair",
    name: "Job Fair Invitation",
    dname: "Job Fair Invitation",
    images: [jobfair_invitation], 
    categories: ["Corporate & Professional"],
  },
  {
    id: "christmas",
    name: "Christmas Invitation",
    dname: "Christmas Invitation",
    images: [christmas_invitation], 
    categories: ["Festivals & Religious"],
  },
  {
    id: "artexhibition",
    name: "Art Exhibition Invitation",
    dname: "Art Exhibition Event Invitation",
    images: [artexhibition_invitation], 
    categories: ["Education & Student Events"]
  },
   {
    id: "networkingevent",
    name: "Networking Event Invitation",
    dname: "Networking Event Invitation",
    images: [networkingevent_invitation], 
    categories: ["Education & Student Events"]
  },
  {
    id: "mehandi",
    name: "Mehandi Invitation",
    dname: "Mehandi Invitation",
    images: [mehandi_invitation], 
    categories: ["Wedding & Pre-Wedding"]
  },
  {
    id: "wedding1",
    name: "Wedding Invitation",
    dname: "Wedding Invitation",
    categories: ["Wedding & Pre-Wedding"],
    images: [invitation1],
  },
  {
    id: "birthday1",
    name: "Birthday Invitation",
    dname: "Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [birthday_invitation1],
  },
  {
    id: "engagement1",
    name: "Engagement Invitation",
    dname: "Engagement Invitation",
    categories: ["Wedding & Pre-Wedding"],
    images: [engagement_invitation1],
  },
  {
    id: "gruhapravesham1",
    name: "Gruhapravesham Invitation",
    dname: "Gruhapravesham House Warming Invitation",
    categories: ["Personal Celebrations"],
    images: [gruha_pravesham1],
  },
  {
    id: "haldi1",
    name: "Haldi Invitation",
    dname: "Haldi Invitation",
    categories: ["Wedding & Pre-Wedding"],
    images: [haldi_invitation1],
  },
  {
    id: "productlaunch1",
    name: "Product Launch Invitation",
    dname: "Product Launch Invitation",
    categories: ["Corporate & Professional"],
    images: [productlaunch_invitation1],
  },
  {
    id: "wedding2",
    name: "Wedding Invitation",
    dname: "Venkateswara swamy theme Wedding Invitation",
    categories:["Wedding & Pre-Wedding"],
    images: [wedding_invitation1], 
  },
  {
    id: "mickymousebirthday",
    name: "Birthday Invitation",
    dname: "Micky Mouse Theme Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [micky_mouse_birthday], 
  },
  {
    id: "collagebirthday",
    name: "Birthday Invitation",
    dname: "Photo Collage Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [collage_invitation], 
  },
  {
    id: "temple_wedding",
    name: "Wedding Invitation",
    dname: "Wedding Invitation",
    images: [wedding2_invitation], 
    categories: ["Wedding & Pre-Wedding"]
  },
  {
    id: "kidsentertainmentevents",
    name: "Kids Entertainment Events Invitation",
    dname: "Kids Entertainment Events Invitation",
    images: [kidsentertainmentevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "theatredrama",
    name: "Theatre & Drama Invitation",
    dname: "Theatre & Drama Invitation",
    images: [theatredrama_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "concert",
    name: "Concert Invitation",
    dname: "Concert Invitation",
    images: [concert_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "leadershiptraining",
    name: "Leadership Training Invitation",
    dname: "Leadership Training Invitation",
    images: [leadershiptraining_invitation1,leadershiptraining_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "skilldevelopmentsessions",
    name: "Skill Development Sessions Invitation",
    dname: "Skill Development Sessions Invitation",
    images: [skilldevelopmentsessions_invitation1,skilldevelopmentsessions_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "corporatetrainingprograms",
    name: "Corporate Training Programs Invitation",
    dname: "Corporate Training Programs Invitation",
    images: [corporatetrainingprograms_invitation1,corporatetrainingprograms_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "guestspeakersessions",
    name: "Guest Speaker Sessions Invitation",
    dname: "Guest Speaker Sessions Invitation",
    images: [guestspeakersessions_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "paneldiscussions",
    name: "Panel Discussions Invitation",
    dname: "Panel Discussions Invitation",
    images: [paneldiscussions_invitation1,paneldiscussions_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "conferences",
    name: "Conferences Invitation",
    dname: "Conferences Invitation",
    images: [conferences_invitation1,conferences_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "executivegatherings",
    name: "Executive Gatherings Invitation",
    dname: "Executive Gatherings Invitation",
    images: [executivegatherings_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "industryroundtables",
    name: "Industry Roundtables Invitation",
    dname: "Industry Roundtables Invitation",
    images: [industryroundtables_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "leadershipmeetups",
    name: "Leadership Meetups Invitation",
    dname: "Leadership Meetups Invitation",
    images: [leadershipmeetups_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "bussinessmixers",
    name: "Bussiness Mixers Invitation",
    dname: "Bussiness Mixers Invitation",
    images: [bussinessmixers_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "employeeappreciationevent",
    name: "Employee Appreciation Event Invitation",
    dname: "Employee Appreciation Event Invitation",
    images: [employeeappreciationevent_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "teamachievementevent",
    name: "Team Achievement Event Invitation",
    dname: "Team Achievement Event Invitation",
    images: [teamachievementevent_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "successcelebration",
    name: "Success Celebration Invitation",
    dname: "Success Celebration Invitation",
    images: [successcelebration_invitation1,successcelebration_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "officeopeningceremony",
    name: "Office Opening Ceremony Invitation",
    dname: "Office Opening Ceremony Invitation",
    images: [officeopeningceremony_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "companyanniversary",
    name: "Company Anniversary Invitation",
    dname: "Company Anniversary Invitation",
    images: [companyanniversary_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "strategymeeting",
    name: "Strategy Meeting Invitation",
    dname: "Strategy Meeting Invitation",
    images: [strategymeeting_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "shareholdersmeeting",
    name: "Share Holders Meeting Invitation",
    dname: "Share Holders Meeting Invitation",
    images: [shakeholdersmeeting_invitation1,shakeholdersmeeting_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "Annualgeneralmeeting",
    name: "Annual General Meeting Invitation",
    dname: "Annual General Meeting Invitation",
    images: [Annualgeneralmeeting_invitation1,Annualgeneralmeeting_invitation2], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "boardmeeting",
    name: "Board Meeting Invitation",
    dname: "Board Meeting Invitation",
    images: [boardmeeting_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "bussinessmeeting",
    name: "Bussiness Meeting Invitation",
    dname: "Bussiness Meeting Invitation",
    images: [bussinessmeeting_invitation], 
    categories: ["Corporate & Professional"]
  },
  {
    id: "grandopeningevents",
    name: "Grand Opening Events Invitation",
    dname: "Grand Opening Events Invitation",
    images: [grandopeningevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "publiclaunchevents",
    name: "Public Launch Events Invitation",
    dname: "Public Launch Events Invitation",
    images: [publiclaunchevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "charityentertainmentshows",
    name: "Charity Entertainment Shows Invitation",
    dname: "Charity Entertainment Shows Invitation",
    images: [charityentertainmentshows_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "awardnights",
    name: "Award Nights Invitation",
    dname: "Award Nights Invitation",
    images: [awardnights_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "contentcreatorevents",
    name: "Content Creator Events Invitation",
    dname: "Content Creator Events Invitation",
    images: [contentcreatorevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "esportstournaments",
    name: "Esports Tournaments Invitation",
    dname: "Esports Tournaments Invitation",
    images: [esportstournaments_invitation], 
    categories: ["Entertainment & Public Events"]
  },
   {
    id: "gamingevents",
    name: "Gaming Events Invitation",
    dname: "Gaming Events Invitation",
    images: [gamingevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "moviescreenings",
    name: "Movie Screenings Invitation",
    dname: "Movie Screenings Invitation",
    images: [moviescreenings_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "communityculturalevents",
    name: "Community Cultural Events Invitation",
    dname: "Community Cultural Events Invitation",
    images: [communityculturalevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "funfairevents",
    name: "Fun Fair Events Invitation",
    dname: "Fun Fair Events Invitation",
    images: [funfairevents_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "carnival",
    name: "Carnival Invitation",
    dname: "Carnival Invitation",
    images: [carnival_invitation], 
    categories: ["Entertainment & Public Events"]
  },
  {
    id: "eastergatherings",
    name: "Easter Gatherings Invitation",
    dname: "Easter Gatherings Invitation",
    images: [eastergatherings_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "baptism",
    name: "Baptism Invitation",
    dname: "Baptism Invitation",
    images: [baptism_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "churchevents",
    name: "Church Prayer Gathering Invitation",
    dname: "Church Prayer Gathering Invitation",
    images: [churchevents_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "christmas1",
    name: "Christmas Invitation",
    dname: "Christmas Invitation",
    images: [christmas1_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "miladevents",
    name: "Milad Events Invitation",
    dname: "Milad Events Invitation",
    images: [miladevents_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "nikah",
    name: "Nikah Invitation",
    dname: "Nikah Invitation",
    images: [nikah_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "ramadaniftar",
    name: "Ramadan Iftar Invitation",
    dname: "Ramadan Iftar Invitation",
    images: [ramadaniftar_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "eid",
    name: "Eid Invitation",
    dname: "Eid Invitation",
    images: [eid_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "aksharabhyasam",
    name: "Aksharabhyasam Ceremony Invitation",
    dname: "Aksharabhyasam Ceremony Invitation",
    images: [aksharabhyasam_invitation], 
    categories: ["Festivals & Religious","Baby & Family"]
  },
  {
    id: "upanayanam",
    name: "Upanayanam Ceremony Invitation",
    dname: "Upanayanam Ceremony Invitation",
    images: [upanayanam_invitation], 
    categories: ["Festivals & Religious","Baby & Family"]
  },
  {
    id: "annaprasana",
    name: "Annprasana Ceremony Invitation",
    dname: "Annprasana/Feeding Ceremony Invitation",
    images: [annaprasana_invitation1,annaprasana_invitation2], 
    categories: ["Festivals & Religious","Baby & Family"]
  },
  {
    id: "namingceremony_1",
    name: "Naming Ceremony Invitation",
    dname: "Naming Ceremony Invitation",
    images: [namingceremony1_invitation], 
    categories: ["Festivals & Religious","Baby & Family"]
  },
  {
    id: "gruhapravesham_1",
    name: "Gruhapravesham Invitation",
    dname: "Gruhapravesham Invitation",
    images: [gruhapravesham_invitation], 
    categories: ["Festivals & Religious","Personal Celebrations"]
  },
  {
    id: "satyanarayanapooja",
    name: "Satyanarayana Pooja Invitation",
    dname: "Satyanarayana Pooja Invitation",
    images: [satyanarayanapooja_invitation], 
    categories: ["Festivals & Religious"]
  },
  {
    id: "unicornbirthday",
    name: "Birthday Invitation",
    dname: "Unicorn Theme Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [unicorn_invitation], 
  },
  {
    id: "musicevent1",
    name: "Music Event Invitation",
    dname: "Music Event Invitation",
    categories: ["Entertainment & Public Events"],
    images: [musicevent_invitation1],
  },
   {
    id: "namingceremony1",
    name: "Naming Ceremony Invitation",
    dname: "Lord Krishna Naming Ceremony Invitation",
    categories: ["Baby & Family"],
    images: [namingceremony_invitation1],
  },
  {
    id: "farewell",
    name: "Farewell Invitation",
    dname: "Farewell Invitation",
    images: [farewell_invitation1,farewell_invitation2],
    categories: ["Education & Student Events","Trending / Modern"]
  },
  {
    id: "diwali1",
    name: "Diwali Invitation",
    dname: "Diwali Invitation",
    categories: ["Festivals & Religious"],
    images: [diwali_invitation1],
  },
];




const Invitations = () => {
  const categories = [
  "All",
  "Personal Celebrations",
  "Wedding & Pre-Wedding",
  "Education & Student Events",
  "Corporate & Professional",
  "Entertainment & Public Events",
  "Festivals & Religious",
  "Baby & Family",
  "Trending / Modern",
];
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
const filteredTemplates = templates.filter((tpl) => {
  const matchesSearch = tpl.dname.toLowerCase().includes(search.toLowerCase());
  const matchesCategory =
  category === "All" || tpl.categories?.includes(category);

  return matchesSearch && matchesCategory;
});
  useEffect(() => {
  const interval = setInterval(() => {
    setImageIndex((prev) => {
      const updated = { ...prev };

      templates.forEach((tpl) => {
        if (tpl.images.length > 1) {
          updated[tpl.id] =
            ((updated[tpl.id] || 0) + 1) % tpl.images.length;
        }
      });

      return updated;
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

const [hoveredId, setHoveredId] = useState(null);
const [slideIndex, setSlideIndex] = useState(0);


  // auto move every 1.5s
  useEffect(() => {
  const interval = setInterval(() => {
    moveRight();
  }, 1500);

  return () => clearInterval(interval);
}, [slideIndex]);
  const moveRight = () => {
    setSlideIndex((prev) => {
      if (prev + 1 >= templates.length) {
        return 0;
      }
      return prev + 1;
    });
  };

  
  return (
  <div className="page-wrapper">
    <Navbar />
    <div className="filters-bar">

  <input
    type="text"
    placeholder="Search invitation templates..."
    className="template-search"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
  />

  <div className="category-dropdown">
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-select"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>

</div>
      <h1 className="home-title1">Available: {filteredTemplates.length} templates. More will be added soon.
</h1>

      {/* Canva Style Results */}
      {search && (
        <SearchResults results={filteredTemplates}/>
      )}
    <div className="carousel-wrapper">

  

</div>
    <main className="page-content">
  <div className="home-container1">
    <h1 className="home-title4">Choose Your Template</h1>

    <div className="templates-grid4">
  {filteredTemplates.slice(0, visibleCount).map((tpl) => {
  const currentIndex = imageIndex[tpl.id] ?? 0;
  const currentImage = tpl.images[currentIndex];

  return (
    <div key={tpl.id} onClick={() => navigate(`/editor/${tpl.id}`)}>
      <div className="grid-card" onClick={() => navigate(`/editor/${tpl.id}`)}>

        <div className={`preview-container ${tpl.video ? "has-video" : ""}`}
  onMouseEnter={() => {
    if (tpl.video) setHoveredId(tpl.id);
  }}
  onMouseLeave={() => setHoveredId(null)}
>

  {tpl.video && hoveredId === tpl.id ? (
    <video
      className="preview-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={tpl.video} type="video/mp4" />
    </video>
  ) : (
    <img
      src={currentImage}
      alt={tpl.name}
      className="preview-image"
    />
  )}

</div>

        <p>{tpl.name}</p>

      </div>

      <div
        className="temp"
      >
        Use This Template
      </div>
    </div>
  );
})}
</div>
  </div>
</main>

{visibleCount < templates.length && (
  <div className="load-more-container">
    <button
      className="load-more-btn"
      onClick={() => setVisibleCount((prev) => prev + 12)}
    >
      Load More Templates
    </button>
  </div>
)}
<div style={{ marginTop: "60px" }} />
    <Footer />
  </div>
);
};

export default Invitations;