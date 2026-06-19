import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRight } from "lucide-react";

import pic from "@/assets/images/pic.webp";
import DotMatrix from "@/components/DotMatrix";
import { socialLinks } from "@/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

const Hero = () => {
	const isMobile = useIsMobile();
	return (
		<main className="relative ml-8 flex h-dvh flex-col justify-start overflow-hidden max-md:pt-16 md:ml-20 md:justify-center">
			{!isMobile && (
				<img
					src={pic}
					alt="Pic"
					className="pointer-events-none absolute right-0 bottom-0 -mr-12 h-auto w-[55dvw]"
				/>
			)}
			{isMobile && (
				<img
					src={pic}
					alt="Pic"
					className="absolute bottom-14 left-1/2 -ml-6 h-auto w-dvw -translate-x-1/2"
				/>
			)}
			<p className="font-archivo text-6xl lg:text-9xl">
				Hello<span className="font-serif italic">, I am</span>
			</p>
			<p className="font-mono text-6xl md:text-9xl">Kunal Goel.</p>
			{!isMobile && (
				<p className="text-xl max-md:mt-8 md:text-2xl md:tracking-widest">
					FULL-STACK DEVELOPER • PYTHON DEVELOPER
				</p>
			)}
			{isMobile && (
				<>
					<p className="mt-8 text-xl">• FULL-STACK DEVELOPER</p>
					<p className="text-xl">• PYTHON DEVELOPER</p>
				</>
			)}
			<div className="mt-8 ml-4 flex items-center gap-4">
				{socialLinks.map((social) => {
					const Icon = social.icon;

					return (
						<a
							key={social.platform}
							href={social.link}
							title={social.platform}
							target="_blank"
							rel="noopener noreferrer"
							className="flex size-8 items-center rounded-full border border-white p-2 transition-all duration-200 ease-in-out hover:scale-125"
						>
							{social.platform === "Medium" ? (
								<FontAwesomeIcon icon={faMedium} />
							) : (
								<Icon className="size-4" />
							)}
						</a>
					);
				})}
				<a
					title="See My Resume"
					target="_blank"
					rel="noopener noreferrer"
					href="https://drive.google.com/file/d/1Ku3CNu9yTA8y9CR7sIPSKRN9NOXGMA_i/view?usp=drive_link"
					className="flex rounded-lg bg-blue-600 px-2 py-1 font-semibold text-black transition-all duration-200 ease-in-out hover:scale-110"
				>
					View Resume
				</a>
			</div>
			{!isMobile && (
				<div className="group mt-60 flex w-fit items-center gap-4 rounded-full p-4 text-4xl transition-colors duration-300 hover:bg-neutral-800/60">
					<DotMatrix />
					<p className="inline">Scroll Down</p>
					<ChevronRight className="size-10 transition-transform duration-300 group-hover:rotate-90" />
				</div>
			)}
		</main>
	);
};

export default Hero;
