import AboutSection from '@/components/AboutSection';
import ContactUsSection from '@/components/ContactUsSection';
import HeroSection from '@/components/HeroSection';
import PhilosolphySection from '@/components/PhilosolphySection';
import TechnologySection from '@/components/TechnologySection';
import TrustedBySection from '@/components/TrustedBySection';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<PhilosolphySection />
			<TechnologySection />
			<TrustedBySection />
			<ContactUsSection />
		</main>
	);
}
