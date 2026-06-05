const VerticalTrack = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="absolute left-4 mx-6 flex h-60 min-h-[70vh] w-fit select-none flex-col items-center justify-between md:left-8 md:min-h-[70vh]">
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
