import React, {useState} from "react";
import {createPortal} from "react-dom";
import SecondaryBar from "./secondary-bar/SecondaryBar";
import styles from "./Header.module.css";

import TopBar from "./top-bar/TopBar";
import StoreMessageBar from "./store-message-bar/StoreMessageBar";
import SearchModal from "../ui/modal/SearchModal";

const Header = () => {
	const [selectedDepartment, setSelectedDepartment] = useState("women");
	const [showSearchModal, setShowSearchModal] = useState(false);

	return (
		<>
			<header>
				{showSearchModal &&
					createPortal(
						<SearchModal setShowSearchModal={setShowSearchModal} />,
						document.getElementById("modal-root")
					)}
				<TopBar
					selectedDepartment={selectedDepartment}
					setSelectedDepartment={setSelectedDepartment}
					setShowSearchModal={setShowSearchModal}
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
