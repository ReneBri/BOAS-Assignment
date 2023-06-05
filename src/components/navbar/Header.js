import React, {useState} from "react";
import SecondaryBar from "./SecondaryBar/SecondaryBar";

import TopBar from "./TopBar.js/TopBar";

const Header = () => {
	const [selectedDepartment, setSelectedDepartment] = useState("women");

	return (
		<header>
			<TopBar
				selectedDepartment={selectedDepartment}
				setSelectedDepartment={setSelectedDepartment}
			/>
			<SecondaryBar selectedDepartment={selectedDepartment} />
		</header>
	);
};

export default Header;
