import styles from "./FeaturedProductsCard.module.css";

import React from "react";

const FeaturedProductsCard = ({title, tagline, overlayColor, backgroundImage}) => {
	// Conditionally render the color of the overlay depending on the prop.
	let cssClasses =
		overlayColor === "green"
			? `${styles.container} ${styles["green-overlay"]}`
			: `${styles.container} ${styles["default-overlay"]}`;

	// Since our component is reusable we add this class to keep a more uniform size
	// between when our component renders the tagline prop and when it doesn't.
	if (!tagline) {
		cssClasses = `${cssClasses} ${styles["no-tagline"]}`;
	}

	return (
		<div className={cssClasses} style={{backgroundImage: `url(${backgroundImage})`}}>
			<h3>{title}</h3>
			{tagline && <p>{tagline}</p>}
		</div>
	);
};

export default FeaturedProductsCard;
