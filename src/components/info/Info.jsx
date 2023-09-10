import "./info.css";

const Info = () => {
	return (
		<div className="">
			<div className="bg-Ghost-White flex flex-col justify-center items-center gap-10 px-4 pt-16">
				<div className="infoCard flex flex-col items-center justify-center">
					<div className="flex items-center justify-center rounded-full border border-1 h-10 w-10 p-6 border-Davys-Gray">
						<h3 className="font-Fraunces text-xl text-Dark-Purple ">1</h3>
					</div>
					<h2 className="font-Fraunces font-semibold text-2xl my-6 text-Dark-Purple">
						Actionable insights
					</h2>
					<p className="leading-8 text-lg text-Davys-Gray px-4 text-center">
						Optimize your products, improve customer satisfaction and stay ahead of the competition
						with our product data analytics.
					</p>
				</div>

				<div className="infoCard flex flex-col items-center justify-center">
					<div className="flex items-center justify-center rounded-full border border-1 h-10 w-10 p-6 border-Davys-Gray">
						<h3 className="font-Fraunces text-xl text-Dark-Purple ">2</h3>
					</div>
					<h2 className="font-Fraunces font-semibold text-2xl my-6 text-Dark-Purple">
						Data-driven decisions
					</h2>
					<p className="leading-8 text-lg text-Davys-Gray px-4 text-center">
						Make data-driven decisions with our product data analytics. Our AI-generated reports
						help you unlock insights hidden in your product data.
					</p>
				</div>

				<div className="infoCard flex flex-col items-center justify-center">
					<div className="flex items-center justify-center rounded-full border border-1 h-10 w-10 p-6 border-Davys-Gray">
						<h3 className="font-Fraunces text-xl text-Dark-Purple ">3</h3>
					</div>
					<h2 className="font-Fraunces font-semibold text-2xl my-6 text-Dark-Purple">
						Always affordable
					</h2>
					<p className="leading-8 text-lg text-Davys-Gray px-4 text-center">
						Always affordable pricing that scales with your business. Get top-quality product data
						analytics services without hidden costs or unexpected fees.
					</p>
				</div>
			</div>

			<div className="infoShape after:bg-Ghost-White"></div>
		</div>
	);
};

export default Info;
