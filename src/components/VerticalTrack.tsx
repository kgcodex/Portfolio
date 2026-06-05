const VerticalTrack = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="fixed bottom-12 left-8 mx-6 flex min-h-[80vh] select-none flex-col items-center justify-between max-md:hidden">
			<p className="rotate-180 text-neutral-400 text-xs uppercase tracking-widest [writing-mode:vertical-lr]">
				Software Engineer
			</p>

			<div className="my-4 w-px flex-1 bg-neutral-700" />

			<p className="rotate-180 text-neutral-400 text-xs tracking-widest [writing-mode:vertical-lr]">
				{currentYear}
			</p>
		</div>
	);
};

export default VerticalTrack;
