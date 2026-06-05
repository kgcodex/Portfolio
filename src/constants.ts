import { FileUser } from "lucide-react";

import { Gmail, LinkedIn, XformerlyTwitter } from "@/components/Icons";

export const technologies = {
	// Languages
	Python: "python/3776AB",
	JavaScript: "javascript/F7DF1E",
	TypeScript: "typescript/3178C6",
	GO: "go/00ADD8",

	//Frontend
	HTML: "html5/E34F26",
	React: "react/61DAFB",
	Redux: "redux/764ABC",
	"React Query": "reactquery/FF4154",
	"React Router": "reactrouter/CA4245",
	Axios: "axios/5A29E4",

	// UI
	CSS: "css/663399",
	Tailwind: "tailwindcss/06B6D4",
	"shadcn/ui": "shadcnui/FFFFFF",
	daisyUI: "daisyui/FFC63A",

	// JS Backend
	"Node.js": "nodedotjs/339933",
	Express: "express/ffffff",
	Zod: "zod/408AFF",

	// Python Backend
	FastAPI: "fastapi/009688",
	Django: "django/092E20",
	Pytest: "pytest/0A9EDC",
	Pydantic: "pydantic/E92063",

	// Databases
	MongoDB: "mongodb/47A248",
	Mongoose: "mongoose/880000",
	PostgreSQL: "postgresql/4169E1",

	// Realtime
	WebRTC: "webrtc/333333",
	"Socket.io": "socketdotio/ffffff",

	// AI
	LangChain: "langchain/7FC8FF",
	Gemini: "googlegemini/8E75B2",

	// Markdown
	Markdown: "markdown/FFFFFF",

	// Open Source
	"Open Source": "opensourceinitiative/0099B0",
	PyPI: "pypi/3775A9",

	// Tools
	Git: "git/F03C2E",
	GitHub: "github/181717",
	Vite: "vite/9135FF",
	uv: "uv/DE5FE9",

	// Auth
	JWT: "jsonwebtokens/FFFFFF",
};

export const socialLinks = [
	{
		platform: "LinkedIn",
		link: "https://linkedin.com/in/kunalgoel101",
		icon: LinkedIn,
	},
	{ platform: "X", link: "", icon: XformerlyTwitter },
	{
		platform: "Gmail",
		link: "https://mail.google.com/mail/?view=cm&fs=1&to=1325kunalgoel@gmail.com",
		icon: Gmail,
	},
	{ platform: "Medium", link: "", icon: "" },
	{
		platform: "Resume",
		link: "https://drive.google.com/file/d/1Ku3CNu9yTA8y9CR7sIPSKRN9NOXGMA_i/view?usp=drive_link",
		icon: FileUser,
	},
];
