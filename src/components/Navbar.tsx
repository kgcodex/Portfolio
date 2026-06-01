import { FolderKanban, Menu, PackageOpen, User, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
	{ href: "#aboutme", label: "About Me", icon: User },
	{ href: "#projects", label: "Projects", icon: FolderKanban },
	{ href: "#opensource", label: "Open Source", icon: PackageOpen },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="relative flex items-center justify-between">
			{/* Logo */}
			<a
				href="https://github.com/kgcodex"
				className="font-archivo text-2xl md:text-3xl"
			>
				kg_codex
			</a>

			{/* Desktop Menu */}
			<div className="hidden md:flex items-center justify-center gap-2 md:gap-8 bg-neutral-800/60 rounded-full p-2">
				{navLinks.map((link) => {
					const Icon = link.icon;

					return (
						<a
							key={link.href}
							href={link.href}
							className="flex items-center gap-2 py-2 px-4 group hover:bg-black rounded-full whitespace-nowrap transition-all duration-300"
						>
							<Icon className="opacity-0 w-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4 transition-all duration-500 ease-out" />

							<span>{link.label}</span>
						</a>
					);
				})}
			</div>

			{/* Mobile Toggle Button */}
			<button
				type="button"
				onClick={toggleMenu}
				aria-label="Toggle Menu"
				className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900/60 rounded-full transition-all duration-200 focus:outline-none"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Mobile Dropdown */}
			<div
				className={`absolute top-full left-0 z-50 mt-4 w-full md:hidden transition-all duration-300 ease-in-out ${
					isOpen
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<div className="flex flex-col gap-3 rounded-2xl border border-neutral-900 bg-black p-4 shadow-2xl">
					{navLinks.map((link) => {
						const Icon = link.icon;

						return (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="flex items-center gap-4 rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-3 transition-all duration-200 hover:bg-neutral-900"
							>
								<Icon size={20} className="text-neutral-400" />

								<span className="font-mono text-base font-medium">
									{link.label}
								</span>
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
