import { type ChangeEvent, type SubmitEvent, useState } from "react";

// @ts-expect-error
import DotRocket from "@/assets/svg/DotRocket.svg?react";

const ContactMe = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [buttonText, setButtonText] = useState("Let's Connect.");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
				}),
			});

			if (!response.ok) {
				const data = await response.json();
				console.log(`Unable to send Message. ${data}`);
				return;
			}

			const data = await response.json();
			if (data.success) {
				setButtonText("Thanks for contacting...");
				setTimeout(() => {
					setButtonText("Let's Connect.");
				}, 3000);
			}
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="mx-4 mt-20 md:mx-20">
			<h1 className="text-4xl md:mb-8 md:text-6xl">Get in Touch</h1>
			<div className="flex w-full items-center justify-start">
				<form
					onSubmit={handleSubmit}
					className="flex w-1/2 flex-col gap-4 max-md:w-full md:mx-40"
				>
					<fieldset className="w-full">
						<legend className="bg-white px-2 text-black">Name</legend>
						<input
							type="text"
							name="name"
							id="name"
							required
							className="w-full border-2 border-white bg-transparent p-2 text-white outline-none"
							placeholder="John Snow"
							onChange={handleChange}
							value={formData.name}
						/>
					</fieldset>
					<fieldset className="w-full">
						<legend className="bg-white px-2 text-black">Email</legend>
						<input
							type="email"
							name="email"
							id="email"
							required
							className="w-full border-2 border-white bg-transparent p-2 text-white outline-none"
							placeholder="johnsnow@gmail.com"
							onChange={handleChange}
							value={formData.email}
						/>
					</fieldset>
					<fieldset className="w-full">
						<legend className="bg-white px-2 text-black">Message</legend>
						<textarea
							name="message"
							id="message"
							required
							className="min-h-30 w-full resize-y border-2 border-white bg-transparent p-2 text-white outline-none"
							placeholder="Lets talk about..."
							onChange={handleChange}
							value={formData.message}
						></textarea>
					</fieldset>
					<button
						type="submit"
						className="w-full bg-white py-3 font-semibold text-black transition-hover duration-200 hover:bg-neutral-200 md:w-1/2"
					>
						{buttonText}
					</button>
				</form>
				<DotRocket className="size-80 max-md:hidden" />
			</div>
		</section>
	);
};

export default ContactMe;
