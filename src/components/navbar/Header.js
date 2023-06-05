import React, {useState} from "react";
import SecondaryBar from "./SecondaryBar/SecondaryBar";
import styles from "./Header.module.css";

import TopBar from "./TopBar/TopBar";
import StoreMessageBar from "./StoreMessageBar/StoreMessageBar";
const Header = () => {
	const [selectedDepartment, setSelectedDepartment] = useState("women");

	return (
		<>
			<header>
				<TopBar
					selectedDepartment={selectedDepartment}
					setSelectedDepartment={setSelectedDepartment}
				/>
			</header>
			<div className={styles.sticky}>
				<SecondaryBar selectedDepartment={selectedDepartment} />
				<StoreMessageBar />
			</div>
		</>
	);
};

export default Header;
