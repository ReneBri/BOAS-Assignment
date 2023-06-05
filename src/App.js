import "./App.css";
import HeroSection from "./components/hero/HeroSection";

import Header from "./components/navbar/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<div className="ben"></div>
		</div>
	);
}

export default App;
