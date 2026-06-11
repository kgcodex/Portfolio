import { CircleArrowOutUpLeft } from "lucide-react";

const certificates = [
	{
		href: "https://coursera.org/share/4fb6ebdc25232d6cba74abe45ba9b974",
		label: "Machine Learning Specialization, Coursera",
	},
	{
		href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS78S43550042202600745",
		label: "Programming, DSA using Python, NPTEL",
	},
	{
		href: "https://www.udacity.com/certificate/e/ecd86c5e-b7bc-11ef-b2e6-f31052bf0764",
		label: "Foundation of Generative AI, Udacity",
	},
];

const AboutMe = () => {
	return (
		<section id="aboutme" className="mx-4 mt-20 rounded-2xl md:mx-20">
			<h1 className="text-4xl md:mb-8 md:text-6xl">About Me</h1>
			<div className="flex flex-col items-start justify-center gap-8 md:flex-row md:gap-20">
				<div className="md:w-1/2">
					<p className="p-4 text-neutral-300 hover:text-white">
						I am Kunal Goel, a Software Engineer based in Ghaziabad,India.
					</p>

					<p className="p-4 text-neutral-300 hover:text-white">
						I like building software close to the implementation layer —
						realtime systems, parser engines, backend infrastructure, and
						AI-integrated applications.
					</p>
					<p className="p-4 text-neutral-300 hover:text-white">
						My passion for continuous learning drives me to stay up-to-date with
						the latest technologies and frameworks in the industry.
					</p>
				</div>
				<div className="md:w-[1/2]">
					<div>
						<h2 className="text-2xl">Education</h2>
						<p className="p-4 text-neutral-300 hover:text-white">
							B.Tech CSE with specialization in AI/ML from AKTU, RKGIT.
						</p>
					</div>
					<div>
						<h2 className="text-2xl">Certification</h2>
						{certificates.map((el) => (
							<a
								key={el.href}
								href={el.href}
								className="group flex items-center gap-2 rounded-2xl p-4 hover:bg-neutral-800/60"
							>
								<CircleArrowOutUpLeft className="w-4 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:rotate-135 group-hover:opacity-100" />
								{el.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
