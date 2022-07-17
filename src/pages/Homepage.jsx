import {ContactInfo }from "../components/contact/index";
import {Hero, Info} from "../components/home/index";
import {Knowledge, MyProjects, Timeline} from "../components/projects/index";
import {AppFooter} from "../components/shared/index"

function Homepage() {
  return (
    <>
      <Hero />
      <Info />
      <MyProjects />
      <Timeline />
      <Knowledge />
      <ContactInfo />
      <AppFooter />
    </>
  );
}

export default Homepage;
