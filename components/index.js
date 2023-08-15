// Layout
import Header from "./Layout/Header";
import { Navigation } from "./Layout/Navigation";
import { Menu } from "./Layout/Menu";
import Footer from "./Layout/Footer";

// Sections
import HeroContent from './Sections/HeroContent';
import TextWithSliderSection from './Sections/TextWithSliderSection';

// Home Section
import HomeServices from "./Sections/HomeSections/HomeServices";
import HomeOffer from "./Sections/HomeSections/HomeOffer";
import HomePart from "./Sections/HomeSections/HomePart";
import HomePlans from "./Sections/HomeSections/HomePlans";
import HomeGallery from "./Sections/HomeSections/HomeGallery";
import HomeEvents from "./Sections/HomeSections/HomeEvents";
import HomeManagers from "./Sections/HomeSections/HomeManagers";
import HomeConsultation from "./Sections/HomeSections/HomeConsultation";
import HomeSocial from "./Sections/HomeSections/HomeSocial";

//Plans
import PlansIncluded from "./Sections/PlansSections/PlansIncluded";
import PlansGallery from "./Sections/PlansSections/PlansGallery";
import PlansMembership from "./Sections/PlansSections/PlansMembership";
import PlansPart from "./Sections/PlansSections/PlansPart";
import PlansChoose from "./Sections/PlansSections/PlansChoose";
import PlansQuestions from "./Sections/PlansSections/PlansQuestions";

//Gallery
import GalleryMain from "./Sections/GallerySection/GalleryMain";

//About
import AboutGallery from "./Sections/AboutSection/AboutGallery";
import AboutWho from "./Sections/AboutSection/AboutWho";
import AboutWhy from "./Sections/AboutSection/AboutWhy";
import AboutContact from "./Sections/AboutSection/AboutContact";

//Contacts
import GetSocial from "./Sections/Contacts/GetSocial";

//Services
import ServicesHero from "./Sections/ServicesSection/ServicesHero";
import ServicesGallery from "./Sections/ServicesSection/ServicesGallery";
import ServicesEvents from "./Sections/ServicesSection/ServicesEvents";
import CardWithInfo from "./component/CardWithInfo";

//ServiceInner
import ServiceInnerHero from "./Sections/ServicesSection/ServicesInner/ServiceInnerHero";
import ServiceInnerMore from "./Sections/ServicesSection/ServicesInner/ServiceInnerMore";
import ServiceInnerIncluded from "./Sections/ServicesSection/ServicesInner/ServiceInnerIncluded";
import ServiceInnerInfo from "./Sections/ServicesSection/ServicesInner/ServiceInnerInfo";

//Component
import FilterServicesCards from "./component/FilterServicesCards";
import { FilterGallery } from "./component/FilterGallery";
import { ServicesFilters } from "./UI/ServicesFilters";
import  ServicesCards from "./component/ServicesCards";
import PhotoGallery from "./component/PhotoGallery";
import {FooterLinks} from "./component/FooterLinks";
import { PartSectionItem } from './component/PartSectionItem';
import { PlanSectionItem } from './component/PlanSectionItem';
import { Questions } from './component/Questions';
import { Gallery } from "./component/Gallery";
import { FullScreenSlider } from './component/FullScreenSlider';
import AboutWhyText from "./component/AboutWhyText";
import { PaginationSlider } from "./component/PaginationSlider";
import SliderWithoutText from "./component/SliderWithoutText";
import SocialAll from "./component/SocialAll";
import ContactSocial from "./component/ContactsSocial";
import { ServicesEventsList } from "./component/ServicesEventsList";
import SliderWithText from "./component/SliderWithText";
import ServiceInfo from "./component/ServiceInfo";

//Form
import { ConsultationForm } from "./component/ConsultationForm";
import { FullForm } from "./component/FullForm";
import { FirstStep } from "./component/FormSteps/FirstStep";
import { SecondStep } from "./component/FormSteps/SecondStep";

// UI elements
import { Button } from "./UI/Button";
import { PlayButton } from "./UI/PlayButton";
import { Selector } from "./UI/Selector";
import SectionTitle from './UI/SectionTitle';
import SectionText from './UI/SectionText';
import { Slider } from "./component/Slider";
import { LoadMore } from "./UI/LoadMore";
import { SocialLink } from "./UI/SocialLink";
import Burger from "./UI/Burger";
import { SlideBar } from "./Layout/SlideBar";
import { FollowLink } from "./UI/FollowLink";
import { SliderArrows } from "./UI/SliderArrow";
import { ServicesGalleryFilters } from "./UI/ServicesGalleryFilters";

export {
    //Layout
    Header,
    Navigation,
    Menu,
    SlideBar,
    Footer,

    //Section
    HeroContent,
    TextWithSliderSection,

    //Home
    HomeServices,
    HomeOffer,
    HomePart,
    HomePlans,
    HomeGallery,
    HomeEvents,
    HomeManagers,
    HomeConsultation,
    HomeSocial,

    //Plans
    PlansIncluded,
    PlansGallery,
    PlansMembership,
    PlansPart,
    PlansChoose,
    PlansQuestions,

    //Gallery
    GalleryMain,

    //About
    AboutContact,
    AboutWho,
    AboutWhy,
    AboutGallery,

    //Contacts
    GetSocial,

    //Services
    ServicesHero,
    ServicesEvents,
    CardWithInfo,
    ServicesGallery,

    //ServiceInner
    ServiceInnerHero,
    ServiceInnerMore,
    ServiceInnerIncluded,
    ServiceInnerInfo,
    
    //Components
    Burger,
    Selector,
    ServicesFilters,
    FilterServicesCards,
    FilterGallery,
    FullScreenSlider,
    ServicesCards,
    Slider,
    PhotoGallery,
    Questions,
    Gallery,
    AboutWhyText,
    PaginationSlider,
    SliderWithoutText,
    SocialAll,
    ContactSocial,
    ServicesGalleryFilters,
    ServicesEventsList,
    SliderWithText,
    ServiceInfo,

    //Form
    ConsultationForm,
    FullForm,
    FirstStep,
    SecondStep,

    //UI
    Button,
    PlayButton,
    SectionTitle,
    SectionText,
    PartSectionItem,
    PlanSectionItem,
    SliderArrows,
    FollowLink,
    LoadMore,
    SocialLink,
    FooterLinks,
}