const Promotion = () => {
	return (
		<div className="promotionBlock mx-4 mt-24">
			<img className="px-8" src="/assets/images/image-founder.webp" alt="founder image" />
			<div className="relative bg-Dark-Purple text-white p-8 text-center -mt-12 ">
				<h2 className="font-Fraunces text-3xl font-semibold mb-5">Be the first to test</h2>
				<p className="leading-8 text-lg px-4 text-center">
					Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
					beta tester for our app and kickstart your company. Apply for access below and I'll be in
					touch to schedule a call.
				</p>
				<button className="bg-Eucaplyptus px-7 py-4 mt-6 mb-8 text-xl font-bold text-Dark-Purple leading-buttonFontLineHeight tracking-navbarCustomSpacing hover:cursor-pointer border-2 border-transparent active:border-2 active:border-Eucaplyptus active:bg-transparent active:text-Eucaplyptus ">
					Apply for access
				</button>
			</div>
		</div>
	);
};

export default Promotion;
