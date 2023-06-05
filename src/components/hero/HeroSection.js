import styles from "./HeroSection.module.css";
import playCircle from "../../media/icons/playCircle.svg";

import React from "react";

const HeroSection = () => {
	return (
		<section>
			<div className={styles["hero-container"]}>
				<h1>Meet the new shopping experience for vintage jeans</h1>
				<h5>
					BOAS is the best place for sustainable and pre-owned fashion, where all profits
					are donated to charity
				</h5>
				<div className={styles["hero-button-container"]}>
					<button>SHOP NOW</button>
					<button id={styles["play-now"]}>
						<img src={playCircle} alt="play icon" height="24px" />
						ABOUT OUR MISSION
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
