import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import HowItsWork from "../HowItsWork/HowItsWork";
import Services from "../Services/Services";
import BeMerchent from "./BeMerchent/BeMerchent";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <HowItsWork></HowItsWork>
          <Services></Services>
          <ClientLogosMarquee></ClientLogosMarquee>
          <Benefits></Benefits>
         <BeMerchent></BeMerchent>
        </div>
    );
};

export default Home;