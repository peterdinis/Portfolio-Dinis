import ContactInfo from "../components/contact/ContactInfo";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import Knowledge from "../components/projects/Knowledge";
import MyProjects from "../components/projects/MyProjects";
import Timeline from "../components/projects/TimeLine";
import AppFooter from "../components/shared/AppFooter";

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
