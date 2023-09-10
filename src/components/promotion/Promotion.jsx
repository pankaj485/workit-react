const Promotion = () => {
	return (
		<div className="promotionBlock mx-4 mt-24">
			<img
				className="px-8"
				src="../../../public/assets/images/image-founder.webp"
				alt="founder image"
			/>
			<div className="relative bg-Dark-Purple text-white p-8 text-center -mt-10 ">
				<h2 className="font-Fraunces text-3xl font-semibold mb-4">Be the first to test</h2>
				<p className="text-base leading-7 ">
					Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
					beta tester for our app and kickstart your company. Apply for access below and I'll be in
					touch to schedule a call.
				</p>
				<button className="bg-Eucaplyptus px-6 py-3 mt-6 mb-8  font-bold text-Dark-Purple leading-buttonFontLineHeight tracking-navbarCustomSpacing">
					Apply for access
				</button>
			</div>
		</div>
	);
};

export default Promotion;
