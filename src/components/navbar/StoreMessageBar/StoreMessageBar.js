import styles from "./StoreMessageBar.module.css";

import React from "react";

const storeMessages = [
	"Free shipping on jeans",
	"Reverse auction vintage jeans as low as 1€",
	"All profits donated to save kids lives",
];

const StoreMessageBar = () => {
	return <div className={styles["message-bar"]}>{storeMessages[0].toUpperCase()}</div>;
};

export default StoreMessageBar;
