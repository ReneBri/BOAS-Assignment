import styles from "./TopBar.module.css";

import React from "react";

const TopBar = () => {
	return (
		<nav>
			<div className={styles["top-nav"]}>
				<ul className={styles["left-bar"]}>
					<li>Women</li>
					<li>Men</li>
					<li>Kids</li>
					<li>Baby</li>
					<li>Search</li>
				</ul>

				<img
					src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/BOAS_Logo_Transparent_48x.png?v=1646145898"
					alt="BOAS logo"
					height="60"
				/>

				<ul>
					<li>About Us</li>
					<li>Account</li>
					<li>Cart</li>
					<li>Language</li>
				</ul>
			</div>
		</nav>
	);
};

export default TopBar;
