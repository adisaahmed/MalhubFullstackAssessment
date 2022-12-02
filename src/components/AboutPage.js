import { AboutUs, Banner, Schedule, Team } from "./AboutPageContent";
import { Offers } from "./LandingPageContent";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Team />
      <Schedule />
      <Offers />
    </div>
  );
};

export default AboutPage;
