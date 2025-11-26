import Image from "next/image";
import DonationBanner from "./components/DonationBanner";
import WordFromMercy from "./components/WordFromMercy";
import OurInspiration from "./components/OurInspiration";
import NewsletterBanner from "./components/NewsletterBanner";
import LatestNews from "./components/LatestNews";
import UrbanCentersSection from "./components/UrbanCentersSection";
import FundraiseCard from "./components/FundraiseCard"
import Whatwedo from "./components/Whatwedo";
import GetInTouchSection from "./components/GetInTouchSection";
import MeetOurTeamSection from "./components/MeetOurTeamSection";
import AboutBjMehta from "./about-bj-mehta/page";

export default function Home() {
  return (
    <div className="">
     <DonationBanner />
     <AboutBjMehta />

     <MeetOurTeamSection />
     <NewsletterBanner />
     
    </div>
  );
}
