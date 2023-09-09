const NavBar = () => {
	return (
		<div className="flex items-center justify-between bg-primary text-white px-4 pt-8">
			<img src="../../../public/assets/images/logo-light.svg" alt="logo image" />
			<p className="border-b-4 border-secondary font-bold leading-8 tracking-navbarCustomSpacing text-base">
				Apply for access
			</p>
		</div>
	);
};

export default NavBar;
