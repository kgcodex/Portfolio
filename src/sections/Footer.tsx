import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialLinks } from "@/constants";

const Footer = () => {
	return (
		<footer className="pt-24 pb-12">
			<div className="container mx-auto flex flex-col items-center justify-between gap-8 border-zinc-900 border-t px-6 pt-12 md:flex-row">
				<p>Kunal Goel</p>

				<div className="flex items-center gap-4">
					{socialLinks.map((social) => {
						const Icon = social.icon;

						return (
							<a
								key={social.platform}
								href={social.link}
								title={social.platform}
								target="_blank"
								rel="noopener noreferrer"
								className="flex size-8 items-center transition-all duration-200 ease-in-out hover:scale-125"
							>
								{social.platform === "Medium" ? (
									<FontAwesomeIcon icon={faMedium} />
								) : (
									<Icon className="size-4" />
								)}
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
