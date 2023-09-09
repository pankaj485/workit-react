import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import NavBar from "./components/navbar/NavBar";
import Promotion from "./components/promotion/Promotion";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Info />
			<Promotion />
			<Footer />
		</>
	);
}

export default App;
