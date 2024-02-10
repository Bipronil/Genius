import { LandingNavbar } from "@/components/landing-navbar";

import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-her";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;