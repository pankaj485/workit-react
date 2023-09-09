import "./Hero.css";

const Hero = () => {
	return (
		<div className=" bg-Dark-Purple text-White px-4 pt-16 overflow-hidden flex justify-center items-center flex-col gap-16">
			<div className="flex justify-center flex-col items-center gap-10">
				<h1 className="inline-block font-Fraunces text-heroFontSize font-heroFontWeight leading-heroFontLineHeight text-center ">
					Data{" "}
					<span className="font-Fraunces text-heroFontSize font-heroFontWeight leading-heroFontLineHeight border-b-4 border-b-Eucaplyptus">
						tailored
					</span>{" "}
					to your needs.
				</h1>
				<button className="bg-Eucaplyptus px-6 py-3 font-bold text-Dark-Purple leading-buttonFontLineHeight tracking-navbarCustomSpacing">
					Learn More
				</button>
			</div>
			<img src="../../../public/assets/images/image-hero.webp" alt="hero image" />
		</div>
	);
};

export default Hero;
