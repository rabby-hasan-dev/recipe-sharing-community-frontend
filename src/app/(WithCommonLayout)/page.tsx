import CallActionSection from "./_components/module/Home/CallActionSection";
import FAQSection from "./_components/module/Home/FAQSection";
import FeatureSection from "./_components/module/Home/FeatureSection";
import HeroSection from "./_components/module/Home/HeroSection";
import HowItWorkSection from "./_components/module/Home/HowItWorkSection";
import MembershipSection from "./_components/module/Home/MembershipSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorkSection />
      <FeatureSection />
      <MembershipSection />
      <FAQSection />
      <CallActionSection />
    </div>
  );
};

export default HomePage;
