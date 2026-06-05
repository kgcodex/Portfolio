import { ChevronRight } from "lucide-react";

import pic from "@/assets/images/pic.png";
import DotMatrix from "@/components/DotMatrix";
import Navbar from "@/components/Navbar";
import VerticalTrack from "@/components/VerticalTrack";
import { useIsMobile } from "@/hooks/useIsMobile";
import AboutMe from "@/sections/AboutMe";
import Projects from "@/sections/Projects";
import OpenSource from "./sections/OpenSource";

const App = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Navbar />
			<main className="relative mt-8 flex items-start justify-between max-md:flex-col max-md:gap-12">
				<VerticalTrack />
				<div className="ml-16 self-center md:mb-40 md:ml-30">
					<p className="font-archivo text-6xl lg:text-9xl">
						Hello<span className="font-serif italic">, I am</span>
					</p>
					<p className="font-mono text-6xl md:text-9xl">Kunal Goel.</p>
					<p className="text-xl max-md:mt-8 md:text-2xl md:tracking-widest">
						FULL-STACK DEVELOPER • PYTHON DEVELOPER
					</p>
				</div>
				<img
					src={pic}
					alt="Pic"
					className="h-auto w-[70vw] self-center md:w-[40vw]"
				/>
			</main>
			{!isMobile && (
				<div className="group mx-20 flex w-fit items-center gap-4 rounded-full p-4 text-4xl transition-colors duration-300 hover:bg-neutral-800/60">
					<DotMatrix />
					<p className="inline">Scroll Down</p>
					<ChevronRight className="size-10 transition-transform duration-300 group-hover:rotate-90" />
				</div>
			)}
			<AboutMe />
			<Projects />
			<OpenSource />
		</>
	);
};

export default App;
