import styles from "./TopBar.module.css";
import expand from "../../../media/icons/expand.svg";
import userIcon from "../../../media/icons/userIcon.svg";
import cart from "../../../media/icons/cart.svg";
import language from "../../../media/icons/language.svg";
import search from "../../../media/icons/search.svg";
import menu from "../../../media/icons/menu.svg";

import React from "react";

const TopBar = ({selectedDepartment, setSelectedDepartment}) => {
	return (
		<nav className={styles["main-nav"]}>
			<div className={styles["top-nav-wrapper"]}>
				<img className={styles["burger-menu"]} src={menu} alt="expand menu" height="24px" />
				<ul className={styles["left-bar"]}>
					<li>
						<button
							className={`${selectedDepartment === "women" ? styles.active : ""}`}
							onClick={() => setSelectedDepartment("women")}>
							Women
						</button>
					</li>
					<li>
						<button
							className={`${selectedDepartment === "men" ? styles.active : ""}`}
							onClick={() => setSelectedDepartment("men")}>
							Men
						</button>
					</li>
					<li>
						<button
							className={`${selectedDepartment === "kids" ? styles.active : ""}`}
							onClick={() => setSelectedDepartment("kids")}>
							Kids
						</button>
					</li>
					<li>
						<button
							className={`${selectedDepartment === "baby" ? styles.active : ""}`}
							onClick={() => setSelectedDepartment("baby")}>
							Baby
						</button>
					</li>
					<li>
						<button>
							<img src={search} height="24" alt="search function icon" />
						</button>
					</li>
				</ul>

				<img
					src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/BOAS_Logo_Transparent_320x.png?v=1646145898"
					alt="BOAS logo"
					height="81"
					className={styles.logo}
				/>

				<ul className={styles["right-bar"]}>
					<li className={styles["hide-at-500px"]}>
						<div className={styles["right-bar-elements"]}>
							<p>About Us</p>
							<img
								src={expand}
								height="24"
								alt="expand icon"
								className={styles["hide-at-500px"]}
							/>
						</div>
					</li>
					<li>
						<div className={styles["right-bar-elements"]}>
							<img src={userIcon} height="24" alt="User icon for login" />
							<p className={styles["hide-on-response"]}>Account</p>
						</div>
					</li>
					<li>
						<div className={styles["right-bar-elements"]}>
							<span>0</span>
							<img src={cart} height="24" alt="Cart icon for checking your cart" />
							<p className={styles["hide-on-response"]}>Cart</p>
						</div>
					</li>
					<li className={styles["hide-at-500px"]}>
						<div className={styles["right-bar-elements"]}>
							<img src={language} height="24" alt="Icon to choose language" />
							<p className={styles["hide-on-response"]}>Language</p>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default TopBar;
