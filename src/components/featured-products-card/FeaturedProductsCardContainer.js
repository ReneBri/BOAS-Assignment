import styles from "./FeaturedProductsCardContainer.module.css";

import React from "react";

const FeaturedProductsCardContainer = ({title, children}) => {
	return (
		<section>
			{title && <h3 className={styles["section-title"]}>{title}</h3>}
			<div className={styles.container}>{children}</div>
		</section>
	);
};

export default FeaturedProductsCardContainer;
