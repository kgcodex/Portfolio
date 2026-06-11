import ProjectCard from "@/components/ProjectCard";

const OpenSource = () => {
	return (
		<section id="opensource" className="mx-4 mt-20 md:mx-20">
			<h1 className="mb-8 text-4xl md:text-6xl">Open Source</h1>
			<ProjectCard
				serialNo="01"
				title="Doxite"
				subtitle="PYTHON STATIC SITE GENERATOR"
				desc="A lightweight static site generator published on PyPI, featuring a custom markdown parser built from scratch. Designed with a state-machine parsing architecture, modular HTML rendering, syntax recovery, and extensible document processing."
				techStack={["Python", "Pytest", "PyPI", "HTML", "Markdown", "uv"]}
				githubRepoName="doxite"
				liveLink=""
				highlights={[
					"Markdown Parsing Engine",
					"State-Machine Parser Design",
					"PyPI Package Publishing",
					"Edge-Case Driven Testing",
				]}
			/>
		</section>
	);
};

export default OpenSource;
