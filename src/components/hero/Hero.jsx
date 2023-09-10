import "./hero.css";

const Hero = () => {
	return (
		<div className="bg-Ghost-White">
			<div className=" bg-Dark-Purple text-White px-4 pt-16 overflow-hidden flex justify-center items-center flex-col">
				<div className="flex justify-center flex-col items-center gap-10 ">
					<h1 className="inline-block font-Fraunces text-heroFontSize font-heroFontWeight leading-heroFontLineHeight text-center ">
						Data{" "}
						<span className="font-Fraunces text-heroFontSize font-heroFontWeight leading-heroFontLineHeight border-b-4 border-b-Eucaplyptus">
							tailored
						</span>{" "}
						to your needs.
					</h1>
					<button className="bg-Eucaplyptus px-7 py-4 mt-6 mb-8 text-xl font-bold text-Dark-Purple leading-buttonFontLineHeight tracking-navbarCustomSpacing hover:cursor-pointer border-2 border-transparent active:border-2 active:border-Eucaplyptus active:bg-transparent active:text-Eucaplyptus ">
						Learn More
					</button>
				</div>
			</div>
			<div className="shape after:bg-Dark-Purple"></div>
			<img
				className="relative heroContainerImage "
				src="/assets/images/image-hero.webp"
				alt="hero image"
			/>
		</div>
	);
};

export default Hero;
