import styles from "./Header.module.css";

import React, {useState} from "react";
import {createPortal} from "react-dom";

import SecondaryBar from "./secondary-bar/SecondaryBar";
import TopBar from "./top-bar/TopBar";
import StoreMessageBar from "./store-message-bar/StoreMessageBar";
import SearchModal from "../ui/modal/SearchModal";

const Header = () => {
	// State to conditionally render each sub department in SecondBar
	const [selectedDepartment, setSelectedDepartment] = useState("women");
	// State to conditionally render the SearchModal
	const [showSearchModal, setShowSearchModal] = useState(false);

	return (
		<>
			<header>
				{showSearchModal &&
					createPortal(
						<SearchModal setShowSearchModal={setShowSearchModal} />,
						document.getElementById("modal-backdrop-root")
					)}
				<TopBar
					selectedDepartment={selectedDepartment}
					setSelectedDepartment={setSelectedDepartment}
					setShowSearchModal={setShowSearchModal}
				/>
			</header>
			{/* This must be outside of the header tag in order for it to be sticky */}
			<div className={styles.sticky}>
				<SecondaryBar selectedDepartment={selectedDepartment} />
				<StoreMessageBar />
			</div>
		</>
	);
};

export default Header;
