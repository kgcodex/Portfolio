const VerticalTrack = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="absolute left-4 md:left-8 bottom-12 flex flex-col items-center justify-between h-72 w-fit select-none mx-6  min-h-[70vh] md:min-h-[80vh]">
			<p className="text-xs uppercase tracking-widest text-neutral-400 [writing-mode:vertical-lr] rotate-180">
				Software Engineer
			</p>

			<div className="flex-1 w-px bg-neutral-700 my-4" />

			<p className="text-xs tracking-widest text-neutral-400 [writing-mode:vertical-lr] rotate-180">
				{currentYear}
			</p>
		</div>
	);
};

export default VerticalTrack;
