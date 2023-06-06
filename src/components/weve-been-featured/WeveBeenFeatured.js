import styles from "./WeveBeenFeatured.module.css";

import React from "react";

import Card from "../ui/card/Card";

const WeveBeenFeatured = () => {
	return (
		<section>
			<div className="content-wrapper">
				<h3>We've been featured</h3>
				<Card>
					<div className={styles["img-group-wrapper"]}>
						<div className={styles["img-wrapper"]}>
							<img
								src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/NRC_logo_svg_220x.png?v=1675719317"
								alt="NRC logo"
							/>
						</div>
						<div className={styles["img-wrapper"]}>
							<img
								src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/The-Life-You-Can-Save-Logo---Square---Standard_240x.png?v=1681814642"
								alt="The Life You Can Save logo"
							/>
						</div>
						<div className={styles["img-wrapper"]}>
							<img
								src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/Screenshot_2023-04-18_at_12.38.42_200x.png?v=1681814650"
								alt="Rutger Bregman. The Man. The Myth. The Legend"
							/>
						</div>
						<div className={styles["img-wrapper"]}>
							<img
								src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/nrc_future_affairs_logo_200x.jpg?v=1675117529"
								alt="Future Affairs logo"
							/>
						</div>
						<div className={styles["img-wrapper"]}>
							<img
								src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/ea-logo-square_240x.png?v=1675117511"
								alt="Effective Altruism logo"
							/>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default WeveBeenFeatured;
