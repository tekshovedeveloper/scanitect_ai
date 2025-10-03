import React from 'react';
import Image from "next/image";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import HomeBanner from '@/app/pages_component/home_page_component/home_banner_section/page'
import AboutUs from '@/app/pages_component/home_page_component/about_us_section/page'
import PowerfulIntelligent from '@/app/pages_component/home_page_component/powerful_intelligent_section/page'
import SmartAiTravel from '@/app/pages_component/home_page_component/smart_AI_travel/page'
import SmartAIBuiltSection from '@/app/pages_component/home_page_component/smart_Ai_built_section/page'
import LandmarkDetails from '@/app/pages_component/home_page_component/landmark_details/page'
import ContactUs from './pages_component/home_page_component/contact_us/page';
import SubscribeForm from '@/app/pages_component/home_page_component/SubscribeForm/page'

import Footer from './components/footer';
import BackgroundVideo from './components/BackgroundVideo';




export default function Home() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;
  return (
 <div className="homeWrapper">
      {/* Background Video */}
      {/* <video
        className="backgroundVideo"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/Bg With Lines.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <BackgroundVideo />



      {/* Page Content */}
      <div className="content">
        <HomeBanner /> 
        <AboutUs /> 
        <PowerfulIntelligent />
         <SmartAiTravel />
       <SmartAIBuiltSection />
        <LandmarkDetails /> 
          <SubscribeForm />
         <ContactUs />
         <Footer />
       
      </div>
    </div>
  );
}

