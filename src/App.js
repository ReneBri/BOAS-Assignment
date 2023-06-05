import "./App.css";
import HeroSection from "./components/hero/HeroSection";

import Header from "./components/navbar/Header";
import WeveBeenFeatured from "./components/weve-been-featured/WeveBeenFeatured";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<WeveBeenFeatured />
			<div className="ben"></div>
		</div>
	);
}

export default App;
