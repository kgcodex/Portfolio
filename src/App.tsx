import Navbar from "@/components/Navbar";
import VerticalTrack from "@/components/VerticalTrack";
import AboutMe from "@/sections/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import OpenSource from "@/sections/OpenSource";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

const App = () => {
	return (
		<>
			<Navbar />
			<VerticalTrack />
			<Hero />
			<Skills />
			<AboutMe />
			<Projects />
			<OpenSource />
			<ContactMe />
			<Footer />
		</>
	);
};

export default App;
