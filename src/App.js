import "./App.css";

import Header from "./components/navbar/Header";
import HeroSection from "./components/hero/HeroSection";
import WeveBeenFeatured from "./components/weve-been-featured/WeveBeenFeatured";
import CallToActionCard from "./components/call-to-action-card/CallToActionCard";
import FeaturedProductsCardContainer from "./components/featured-products-card/FeaturedProductsCardContainer";
import FeaturedProductsCard from "./components/featured-products-card/FeaturedProductsCard";
import Footer from "./components/footer/Footer";

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
					title="BEST SELLERS"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/kids-power-posing_900x.jpg?v=1674595890"
				/>
				<FeaturedProductsCard
					title="NURSERY"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/nursery-interior-design_900x.jpg?v=1674596424"
				/>
				<FeaturedProductsCard
					title="NEWBORN"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/a-baby-lays-sleeping-next-to-a-basket-of-apples_900x.jpg?v=1674596521"
				/>
				<FeaturedProductsCard
					title="ALL SUSTAINABLE"
					overlayColor="green"
					backgroundImage="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/small-child-squats-and-plays-with-toy-trucks_900x.jpg?v=1674596965"
				/>
			</FeaturedProductsCardContainer>
			<Footer />
		</div>
	);
}

export default App;
