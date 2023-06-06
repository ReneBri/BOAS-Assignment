import styles from "./SearchModal.module.css";
import search from "../../../media/icons/search.svg";
import close from "../../../media/icons/close.svg";

import React from "react";
import {createPortal} from "react-dom";

const Overlay = ({closeModal}) => {
	return (
		<div className={styles.overlay}>
			<form>
				<label>
					<div className={styles["search-wrapper"]}>
						<img src={search} alt="search" height="32px" />
						<input type="text" placeholder="Search out store" autoFocus />
						<img
							className={styles.pointer}
							src={close}
							onClick={closeModal}
							alt="search"
							height="32px"
						/>
					</div>
				</label>
			</form>
		</div>
	);
};

const SearchModal = ({setShowSearchModal}) => {
	return (
		<>
			<div onClick={() => setShowSearchModal(false)} className={styles.backdrop}></div>
			{createPortal(
				<Overlay closeModal={() => setShowSearchModal(false)} />,
				document.getElementById("modal-overlay-root")
			)}
		</>
	);
};

export default SearchModal;
