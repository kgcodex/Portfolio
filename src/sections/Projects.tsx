import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
	return (
		<section id="projects" className="mx-4 mt-20 md:mx-20">
			<h1 className="mb-8 text-4xl md:text-6xl">Projects</h1>
			<ProjectCard
				serialNo="01"
				title="Zync"
				subtitle="Realtime Collaboration Platform"
				desc="A peer-to-peer video conferencing platform built using native WebRTC APIs and custom Socket.IO signaling without third-party meeting SDKs."
				techStack={[
					"React",
					"TypeScript",
					"WebRTC",
					"Socket.io",
					"Express",
					"MongoDB",
					"Axios",
				]}
				githubRepoName="Zync"
				liveLink="https://zync-sk7g.onrender.com"
				highlights={[
					"Native WebRTC",
					"P2P Media Streaming",
					"Real-time Chat",
					"Screen Sharing",
				]}
			/>

			<ProjectCard
				serialNo="02"
				title="Candidly"
				subtitle="AI-POWERED INTERVIEW PREPARATION PLATFORM"
				desc="An AI-driven job portal that combines mock interviews,
resume-aware feedback, and personalized job suggestions
to help candidates prepare for real-world hiring processes."
				techStack={[
					"Python",
					"React",
					"FastAPI",
					"LangChain",
					"Gemini",
					"Pydantic",
				]}
				githubRepoName="Candidly"
				liveLink="https://candidly-chi.vercel.app"
				highlights={[
					"Resume-Based Evaluation",
					"Voice Activity Detection",
					"Structured AI Evaluation",
					"Real-time Voice Interaction",
				]}
			/>
			<ProjectCard
				serialNo="03"
				title="Connect."
				subtitle="MODERN SOCIAL NETWORKING PLATFORM"
				desc="A full-stack social media platform featuring user profiles,
content sharing, social interactions, and real-time user
engagement built with React, TypeScript, and Django REST Framework."
				techStack={[
					"React",
					"TypeScript",
					"shadcn/ui",
					"Django",
					"PostgreSQL",
					"JWT",
					"React Query",
				]}
				githubRepoName="Connect"
				liveLink={null}
				highlights={[
					"Django REST APIs",
					"JWT Authentication",
					"PostgreSQL Architecture",
					"Celery Background Tasks",
				]}
			/>
		</section>
	);
};

export default Projects;
