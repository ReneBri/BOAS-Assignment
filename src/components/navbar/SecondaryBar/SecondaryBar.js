/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./SecondaryBar.module.css";

import {departmentData} from "../../../data/devData";

const departmentDataTest = {
	women: [
		{mainTitle: "Womens Shoes", subTitles: [["18+", "Classy", "Elegant", "Sandels"]]},
		{mainTitle: "Shoes", subTitles: null},
		{
			mainTitle: "Girls Shoes",
			subTitles: [
				["2 - 9 YO", "9 - 16 YO", "Boots", "Sandels"],
				["18+", "Classy", "Elegant", "Sandels"],
			],
		},
	],
	men: ["Sustainable T-shirts", "Pre-owned Jeans", "Vintage Levi's Jeans"],
};

const SecondaryBar = ({selectedDepartment}) => {
	const displayData = departmentData[selectedDepartment];

	console.log(departmentDataTest.women);
	return (
		<nav className={styles["secondary-bar"]}>
			<ul>
				{displayData.map((data, index) => (
					<li className={styles["dropdown-trigger"]} key={data.mainTitle}>
						<a className={styles["main-sub-type"]} href="#">
							{data.mainTitle}
						</a>
						{/* This is here for the conditional rendering for if the array of subTitles only has one element */}
						{data.subTitles && data.subTitles.length === 1 && (
							<div className={styles.dropdown}>
								{data.subTitles[0].map((item) => (
									<a
										className={styles["single-column-dropdown"]}
										href="#"
										key={item}>
										{item}
									</a>
								))}
							</div>
						)}
						{/* This is here for the conditional rendering for if the array of subTitles only has MORE than one element */}
						{data.subTitles && data.subTitles.length > 1 && (
							<div className={styles["full-width-dropdown"]}>
								{data.subTitles.map((array) => (
									<div
										className={styles["full-width-dropdown-column"]}
										key={array}>
										{array.map((item) => (
											<a
												className={styles["full-width-column-dropdown"]}
												href="#"
												key={item}>
												{item}
											</a>
										))}
									</div>
								))}
							</div>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SecondaryBar;
