import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoveRight, SquareArrowOutUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import { technologies } from "@/constants";

type TechKey = keyof typeof technologies;

export type ProjectCardProps = {
	serialNo: string;
	title: string;
	subtitle: string;
	desc: string;
	techStack: TechKey[];
	githubRepoName: string;
	liveLink: string | null;
	highlights: string[];
};

const ProjectCard = ({
	serialNo,
	title,
	subtitle,
	desc,
	techStack,
	githubRepoName,
	liveLink,
	highlights,
}: ProjectCardProps) => {
	const duptechStack = [...techStack, ...techStack, ...techStack];

	return (
		<div className="mb-12 flex rounded-2xl border-2 border-neutral-800 bg-[#0a0a0a] px-4 max-md:flex-col md:gap-8 md:px-8">
			{/* Left  */}
			<div className="flex flex-col justify-between overflow-hidden max-md:mt-8 md:my-8 md:w-[55%]">
				<p className="text-neutral-400 underline underline-offset-16">
					{serialNo}
				</p>
				<h2 className="mt-8 font-archivo text-4xl md:text-6xl">{title}</h2>
				<p className="mt-4 text-neutral-400 uppercase tracking-wide">
					{subtitle}
				</p>
				<p className="mt-4 text-lg text-neutral-200 leading-relaxed md:mt-8 md:max-w-2xl">
					{desc}
				</p>
				<div className="mt-8 h-0.5 bg-neutral-800 md:mt-16"></div>
				<div className="mt-8 flex w-max animate-marquee flex-nowrap gap-4">
					{duptechStack.map((tech, index) => (
						<div
							key={`${tech}-${
								// biome-ignore lint/suspicious/noArrayIndexKey: ignore
								index
							}`}
							style={
								{
									"--hover-color": `#${technologies[tech].slice(-6)}`,
								} as CSSProperties
							}
							className="group flex items-center gap-2 rounded-xl border border-neutral-800 bg-(--hover-color)/5 px-4 py-2 text-md hover:border-(--hover-color)"
						>
							<img
								src={`https://cdn.simpleicons.org/${technologies[tech]}`}
								alt={tech}
								className="size-4 group-hover:scale-125"
							/>
							{tech}
						</div>
					))}
				</div>
				<div className="mt-8 h-0.5 bg-neutral-800"></div>
				<div className="mt-6 flex items-center justify-between max-md:mb-4">
					<a
						href={
							liveLink
								? liveLink
								: `https://github.com/kgcodex/${githubRepoName}`
						}
						className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2"
					>
						View Project
						<MoveRight className="w-0 -translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100" />
					</a>
					<a
						href={`https://github.com/kgcodex/${githubRepoName}`}
						className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2"
					>
						<FontAwesomeIcon icon={faGithub} className="w-4" />
						GitHub
					</a>
				</div>
			</div>
			<div className="w-0.5 self-stretch bg-neutral-800" />
			{/* Right  */}
			<div className="flex flex-col md:my-8 md:w-[45%]">
				<div className="group relative flex-1">
					{liveLink && (
						<iframe
							src={liveLink}
							title={title}
							className="h-full w-full rounded-2xl max-md:h-75"
						></iframe>
					)}
					{!liveLink && (
						<img
							src={`https://raw.githubusercontent.com/kgcodex/${githubRepoName}/main/Preview.gif`}
							alt={`${title} preview`}
							className="h-full w-full rounded-2xl"
						/>
					)}

					<a
						href={
							liveLink
								? liveLink
								: `https://github.com/kgcodex/${githubRepoName}`
						}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute right-4 bottom-4 z-30 flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/95 px-4 py-2 font-medium text-sm text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-neutral-800"
					>
						<span>Open Project</span>
						<SquareArrowOutUpRight className="w-0 -translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100" />
					</a>

					{liveLink && (
						<div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-neutral-800/50 bg-neutral-900/80 px-4 py-1.5 text-neutral-400 text-xs opacity-100 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
							Scroll inside to preview
						</div>
					)}
				</div>
				<div className="mt-8 h-0.5 bg-neutral-800"></div>
				<h3 className="mt-4 text-neutral-400 uppercase tracking-wide">
					Highlights
				</h3>
				<div className="mt-4 mb-4 space-y-4 text-neutral-200">
					{highlights.map((highlight) => (
						<div key={highlight}>{`• ${highlight}`}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
