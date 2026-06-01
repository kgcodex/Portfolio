import { ChevronRight } from "lucide-react";

import pic from "./assets/images/pic.png";
import AboutMe from "./components/AboutMe";
import DotMatrix from "./components/DotMatrix";
import Navbar from "./components/Navbar";
import VerticalTrack from "./components/VerticalTrack";
import { useIsMobile } from "./hooks/useIsMobile";

const App = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Navbar />
			<VerticalTrack />
			<main className="flex max-md:flex-col justify-start items-center mt-8 md:mt-12">
				<div className="ml-16 mt-20 md:ml-20 md:mt-40 md:mb-40">
					<p className="font-archivo text-6xl lg:text-9xl">
						Hello<span className="font-serif italic">, I am</span>
					</p>
					<p className="font-mono text-6xl md:text-9xl">Kunal Goel.</p>
					<p className=" text-xl md:text-2xl max-md:mt-8 md:tracking-widest">
						FULL-STACK DEVELOPER • PYTHON DEVELOPER
					</p>
				</div>
				<img
					src={pic}
					alt="Pic"
					className="md:absolute right-0 bottom-0 md:h-[85vh] w-auto"
				/>
			</main>
			{!isMobile && (
				<div className="flex items-center gap-4 text-4xl mx-20 mt-20 p-4 w-fit rounded-full group hover:bg-neutral-800/60 transition-colors duration-300">
					<DotMatrix />
					<p className="inline">Scroll Down</p>
					<ChevronRight className="size-10 transition-transform duration-300 group-hover:rotate-90" />
				</div>
			)}
			<AboutMe />
		</>
	);
};

export default App;
