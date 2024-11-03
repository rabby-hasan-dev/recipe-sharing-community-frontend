import CallActionSection from "./_components/CallActionSection";
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
            <CallActionSection />
        </div>
    );
};

export default HomePage;