import "./App.css";
import CallToActionCard from "./components/call-to-action-card/CallToActionCard";
import FeaturedProductsCard from "./components/featured-products-card/FeaturedProductsCard";
import FeaturedProductsCardContainer from "./components/featured-products-card/FeaturedProductsCardContainer";
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
			<FeaturedProductsCardContainer>
				<FeaturedProductsCard
					title="SHOP WOMEN"
					tagline="Discounted vintage Levi's & more"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/sunset-swings-smiles_900x.jpg?v=1678787376"
				/>
				<FeaturedProductsCard
					title="SHOP MEN"
					tagline="Discounted vintage Levi's & more"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/man-in-retail-store-with-big-smile_900x.jpg?v=1678787485"
				/>
				<FeaturedProductsCard
					title="SHOP KIDS"
					tagline="3 - 16 years"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/girl-smiles-in-winter-coat_900x.jpg?v=1674577272"
				/>
				<FeaturedProductsCard
					title="SHOP BABY"
					tagline="0 - 3 years"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/toddler-plays-with-doll_900x.jpg?v=1674577368"
				/>
			</FeaturedProductsCardContainer>
			<FeaturedProductsCardContainer title="For the little ones">
				<FeaturedProductsCard
					title="SHOP WOMEN"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/sunset-swings-smiles_900x.jpg?v=1678787376"
				/>
				<FeaturedProductsCard
					title="SHOP MEN"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/man-in-retail-store-with-big-smile_900x.jpg?v=1678787485"
				/>
				<FeaturedProductsCard
					title="SHOP KIDS"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/girl-smiles-in-winter-coat_900x.jpg?v=1674577272"
				/>
				<FeaturedProductsCard
					title="SHOP BABY"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/toddler-plays-with-doll_900x.jpg?v=1674577368"
				/>
			</FeaturedProductsCardContainer>
			<div className="ben"></div>
		</div>
	);
}

export default App;
