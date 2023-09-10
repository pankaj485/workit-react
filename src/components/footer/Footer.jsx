const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-12 my-14">
			<img src="/assets/images/logo-dark.svg" alt="logo image" />
			<div className="flex gap-7 ">
				<img className="w-5" src="/assets/images/icon-facebook.svg" alt="facebook logo" />
				<img className="w-5" src="/assets/images/icon-twitter.svg" alt="twitter logo" />
				<img className="w-5" src="/assets/images/icon-instagram.svg" alt="instagram" />
			</div>
		</div>
	);
};

export default Footer;
