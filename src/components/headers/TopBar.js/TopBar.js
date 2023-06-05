import styles from "./TopBar.module.css";

import React, {useState} from "react";

const TopBar = () => {
	const [selectedDepartment, setSelectedDepartment] = useState("women");

	const chosenDepartmentHandler = (userSelection) => {
		setSelectedDepartment(userSelection);
	};
	// console.log(selectedClothingDepartment);
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
