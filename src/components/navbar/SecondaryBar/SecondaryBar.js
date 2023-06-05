/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./SecondaryBar.module.css";

const departmentData = {
	women: ["Sustainable T-shirts", "Pre-owned Jeans", "Vintage Levi's Jeans"],
	men: ["Sustainable T-shirts", "Pre-owned Jeans", "Vintage Levi's Jeans"],
};

const SecondaryBar = ({selectedDepartment}) => {
	const displayData = departmentData[selectedDepartment];

	console.log(displayData);
	return (
		<nav className={styles["secondary-bar"]}>
			<ul>
				{displayData.map((data) => (
					<li>
						<a href="#">{data}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SecondaryBar;
