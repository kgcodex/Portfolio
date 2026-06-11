import { Resend } from "resend";

export const config = {
	runtime: "edge",
};

// @ts-expect-error
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
	if (req.method !== "POST") {
		return new Response(JSON.stringify({ error: "Method not allowed" }), {
			status: 405,
		});
	}
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ error: "Missing required fields" }),
				{ status: 400 },
			);
		}

		const { error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "hexcodex101@gmail.com",
			subject: `New Portfolio Message from ${name}`,
			replyTo: email,
			text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
		});

		if (error) {
			return new Response(JSON.stringify({ error }), { status: 400 });
		}
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: `Internal Server Error ${error}` }),
			{
				status: 500,
			},
		);
	}
}
