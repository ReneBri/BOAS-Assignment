import styles from "./CallToActionCard.module.css";

import React from "react";

import Card from "../ui/card/Card";

const CallToActionCard = () => {
	return (
		<section>
			<div className="content-wrapper">
				<Card>
					<div className={styles["call-to-action-main-content-container"]}>
						<div className={styles["img-wrapper"]}>
							<img
								src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/torso-of-a-person-sitting-on-a-rainbow-painted-bench_1512x.jpg?v=1681812229"
								alt="Torso of a person sitting on a rainbow painted bench"
							/>
						</div>
						<div className={styles["call-to-action-text-content-container"]}>
							<h3>Second-hand jeans at the perfect price</h3>
							<p>All our jeans prices drop every few hours - here's how it works:</p>
							<ol>
								<li>- Find your perfect pair(s)</li>
								<li>- Check the price and countdown timer</li>
								<li>- But -or- wait for the price drop</li>
							</ol>
							<p>Wait too long and someone else will snatch your jeans...</p>
							<button className={styles.btn}>Get your discounted jeans</button>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default CallToActionCard;
