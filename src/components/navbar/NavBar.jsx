const NavBar = () => {
	return (
		<div className="flex items-center justify-between bg-Dark-Purple text-White px-4 pt-8">
			<img src="/assets/images/logo-light.svg" alt="logo image" />
			<p className="border-b-4 pb-1 border-b-Eucaplyptus font-headerFontWeight leading-8 tracking-navbarCustomSpacing text-base">
				Apply for access
			</p>
		</div>
	);
};

export default NavBar;
