import styles from "./TopBar.module.css";
import expand from "../../../media/icons/expand.svg";
import userIcon from "../../../media/icons/userIcon.svg";
import cart from "../../../media/icons/cart.svg";
import language from "../../../media/icons/language.svg";

import React, {useState} from "react";

const TopBar = () => {
	const [selectedDepartment, setSelectedDepartment] = useState("women");

	const chosenDepartmentHandler = (userSelection) => {
		setSelectedDepartment(userSelection);
	};

	return (
		<nav>
			<div className={styles["top-nav"]}>
				<ul className={styles["left-bar"]}>
					<li>
						<button
							className={`${selectedDepartment === "women" ? styles.active : ""}`}
							onClick={() => chosenDepartmentHandler("women")}>
							Women
						</button>
					</li>
					<li>
						<button
							className={`${selectedDepartment === "men" ? styles.active : ""}`}
							onClick={() => chosenDepartmentHandler("men")}>
							Men
						</button>
					</li>
					<li>
						<button
							className={`${selectedDepartment === "kids" ? styles.active : ""}`}
							onClick={() => chosenDepartmentHandler("kids")}>
							Kids
						</button>
					</li>
					<li>
						<button
							className={`${selectedDepartment === "baby" ? styles.active : ""}`}
							onClick={() => chosenDepartmentHandler("baby")}>
							Baby
						</button>
					</li>
					<li>
						<button>Search</button>
					</li>
				</ul>

				<img
					src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/BOAS_Logo_Transparent_320x.png?v=1646145898"
					alt="BOAS logo"
					height="81"
				/>

				<ul className={styles["right-bar"]}>
					<li>
						<div className={styles["right-bar-elements"]}>
							About Us
							<img src={expand} height="24" />
						</div>
					</li>
					<li>
						<div className={styles["right-bar-elements"]}>
							<img src={userIcon} height="24" />
							Account
						</div>
					</li>
					<li>
						<div className={styles["right-bar-elements"]}>
							<span>0</span>
							<img src={cart} height="24" />
							Cart
						</div>
					</li>
					<li>
						<div className={styles["right-bar-elements"]}>
							<img src={language} height="24" />
							Language
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default TopBar;
