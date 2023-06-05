import styles from "./Card.module.css";

import React from "react";

const Card = ({children}) => {
	return <div className={styles.card}>{children}</div>;
};

export default Card;
