import CallActionSection from "./_components/CallActionSection";
import FAQSection from "./_components/FAQSection";
import FeatureSection from "./_components/FeatureSection";
import HeroSection from "./_components/HeroSection";
import HowItWorkSection from "./_components/HowItWorkSection";
import MembershipSection from "./_components/MembershipSection";



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