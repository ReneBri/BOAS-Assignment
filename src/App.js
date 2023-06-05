import "./App.css";
import CallToActionCard from "./components/call-to-action-card/CallToActionCard";
import HeroSection from "./components/hero/HeroSection";

import Header from "./components/navbar/Header";
import WeveBeenFeatured from "./components/weve-been-featured/WeveBeenFeatured";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<WeveBeenFeatured />
			<CallToActionCard />
			<div className="ben"></div>
		</div>
	);
}

export default App;
