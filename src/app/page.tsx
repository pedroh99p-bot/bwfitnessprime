import Preloader from "@/components/Preloader";
import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import MarqueeRoller from "@/components/MarqueeRoller";
import InteractiveWizard from "@/components/InteractiveWizard";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import SpecialistsShowcase from "@/components/SpecialistsShowcase";
import ModalitiesSection from "@/components/ModalitiesSection";
import MethodSection from "@/components/MethodSection";
import PlansSection from "@/components/PlansSection";
import GoogleSocialProof from "@/components/GoogleSocialProof";
import BMICalculator from "@/components/BMICalculator";
import LocationSection from "@/components/LocationSection";
import HoursSection from "@/components/HoursSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import FooterMontana from "@/components/FooterMontana";
import FloatingAdvisorTrigger from "@/components/FloatingAdvisorTrigger";
import PageShell from "@/components/layout/PageShell";
import { ContactProvider } from "@/components/ui/ContactAction";
import { ROLLERS } from "@/config/siteContent";
export default function HomePage() {
  return (
    <ContactProvider>
      <PageShell>
        <a className="skip-link" href="#main">
          Pular para o conteúdo
        </a>
        <Preloader />
        <FloatingNavbar />
        <main id="main">
          <HeroSection />
          <MarqueeRoller words={ROLLERS[0]} />
          <InteractiveWizard />
          <MarqueeRoller words={ROLLERS[1]} direction="right" />
          <ExperienceShowcase />
          <SpecialistsShowcase />
          <MarqueeRoller words={ROLLERS[2]} />
          <ModalitiesSection />
          <MethodSection />
          <MarqueeRoller words={ROLLERS[3]} direction="right" />
          <PlansSection />
          <GoogleSocialProof />
          <BMICalculator />
          <LocationSection />
          <HoursSection />
          <FAQSection />
          <MarqueeRoller words={ROLLERS[4]} />
          <FinalCTA />
        </main>
        <FooterMontana />
        <FloatingAdvisorTrigger />
      </PageShell>
    </ContactProvider>
  );
}
