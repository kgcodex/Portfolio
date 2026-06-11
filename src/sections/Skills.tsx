/** biome-ignore-all lint/suspicious/noArrayIndexKey: ignore */
import type { CSSProperties } from "react";

import { technologies } from "@/constants";

type TechKey = keyof typeof technologies;
const baseSkills: TechKey[] = [
	"Python",
	"JavaScript",
	"TypeScript",
	"HTML",
	"CSS",
];

const baseSkills2: TechKey[] = [
	"React",
	"Redux",
	"React Query",
	"React Router",
	"Axios",
	"Tailwind",
];

const baseSkills3: TechKey[] = [
	"Node.js",
	"Express",
	"FastAPI",
	"Django",
	"MongoDB",
	"PostgreSQL",
	"Zod",
	"Mongoose",
];
// const baseSkills4: TechKey[] = [
// 	"LangChain",
// 	"Gemini",
// 	"Git",
// 	"GitHub",
// 	"JWT",
// 	"PyPI",
// 	"Socket.io",
// 	"WebRTC",
// 	"Markdown",
// 	"Vite",
// 	"uv",
// ];

const skillsSet: TechKey[][] = [
	Array(6).fill(baseSkills).flat(),
	Array(6).fill(baseSkills2).flat(),
	Array(6).fill(baseSkills3).flat(),
	// Array(6).fill(baseSkills4).flat(),
];

const Skills = () => {
	return (
		<section className="mx-4 mt-20 min-h-[50dvh] overflow-hidden rounded-2xl pt-20 md:mx-20">
			<h1 className="text-4xl md:mb-8 md:text-6xl">Skills</h1>

			<div
				style={{
					maskImage:
						"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
				}}
			>
				{skillsSet.map((skills, index) => (
					<div
						key={`@-${index}`}
						className={`mt-4 flex w-max flex-nowrap gap-4 ${index % 2 === 0 ? "animate-marquee-reverse" : "animate-marquee"}`}
						style={{ animationDuration: `${70}s` }}
					>
						{skills.map((tech, index) => (
							<div
								key={`${tech}-${index}`}
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
				))}
			</div>
		</section>
	);
};

export default Skills;
