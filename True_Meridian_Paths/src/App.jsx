import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Navigation_bar from "./components/Navigation_bar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import PopularDestinations from "./components/PopularDestinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Packages from "./components/Packages";
import ReviewForm from "./components/ReviewForm";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import ReadyToPlan from "./components/ReadyToPlan";
import Footer from "./components/Footer";

import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            <Navigation_bar />
            <Hero />
            <Introduction />
            <Services />
            <PopularDestinations />
            <WhyChooseUs />
            <Packages />
            <ReviewForm />
            <HowItWorks />
            <ReadyToPlan />
            <Faq />
            <Footer />
          </>
        }
      />

      {/* THANK YOU PAGE */}
      <Route path="/thank-you" element={<ThankYou />} />
      
    </Routes>
  );
}

export default App;
