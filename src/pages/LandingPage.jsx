import Header from "../layout/Header";
import Banner from "../layout/Banner";
import Welcome from "../layout/Welcome";
import Adventure from "../layout/Adventure";
import Story from "../layout/Story";
import Feedback from "../layout/Feedback";
import Language from "../layout/Languages";
import Footer from "../layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Welcome />
      <Adventure />
      <Story />
      <Feedback />
      <Language />
      <Footer />
    </div>
  )
}

export default LandingPage;