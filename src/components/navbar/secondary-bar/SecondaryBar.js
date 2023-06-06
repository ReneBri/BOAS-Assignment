/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./SecondaryBar.module.css";

import {departmentData} from "../../../data/devData";

const SecondaryBar = ({selectedDepartment}) => {
	const displayData = departmentData[selectedDepartment];

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
										className={styles["single-column-dropdown-item"]}
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
												className={
													styles["full-width-dropdown-column-item"]
												}
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
