/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./SecondaryBar.module.css";

const departmentData = {
	women: [
		{mainTitle: "Womens Shoes", subTitles: []},
		{mainTitle: "Pre-owned Jeans", subTitles: []},
		{mainTitle: "Vintage Levi's Jeans", subTitles: []},
	],
	men: [
		{mainTitle: "Mens Shoes", subTitles: []},
		{mainTitle: "Pre-owned Jeans", subTitles: []},
		{mainTitle: "Vintage Levi's Jeans", subTitles: []},
	],
	kids: [
		{
			mainTitle: "Shoes",
			subTitles: [
				["All Shoes", "Sneakers", "Boots", "Sandels"],
				[
					"Girls Shoes",
					"Shoes: Girls (2-9 years)",
					"Shoes: Girls (9-16 years)",
					"Girls Sneakers",
					"Girls Boots",
					"Girls Sandels",
				],
				[
					"Boys Shoes",
					"Shoes: Boys (2-9 years)",
					"Shoes: Boys (9-16 years)",
					"Boys Sneakers",
					"Boys Boots",
					"Boys Sandels",
				],
				["Brands", "BabyZus", "Hektik", "Baby Fanti", "BANGARANG", "ANDARTA"],
			],
		},
		{
			mainTitle: "Toys",
			subTitles: [
				[
					"All Toys",
					"Games & Puzzles",
					"Educational Toys",
					"Cuddly Toys",
					"Books",
					"Building Toys",
					"Drawing and Crafting",
					"Toy Cehicles",
					"Outdoor Toys",
					"Music",
				],
				["All Ages", "8 to 12 years", "12 years and older", "5 to 8 years", "3 to 5 years"],
				[
					"All Brands",
					"Luna-Leena",
					"Hektik",
					"Franck & Fischer",
					"BabyZus",
					"BabyFanti",
					"Bangarand Toys",
				],
			],
		},
		{
			mainTitle: "Clothing",
			subTitles: [
				[
					"All Clothing",
					"Coats & Jackets",
					"Tops",
					"Jumper & Knitwear",
					"Cardigans",
					"Dresses & Skirts",
					"Swimwear",
				],
				[
					"Girls Clothing",
					"Girls Coats & Jackets",
					"Girls Jumpers & Knitwear",
					"Girls T-shirts",
					"Girls Shirts",
					"Skirts",
					"Girls Trousers & Jeans",
				],
				[
					"Boys Clothing",
					"Coats & Jackets",
					"Tops",
					"Boys Shirts",
					"Jumpers & Knitwear",
					"Cardigans",
					"Dresses & Skirts",
					"Swimwear",
				],
				[
					"Brands",
					"BabyZus",
					"Franck & Fischer",
					"Hektik",
					"Hot Pink",
					"Micu Micu",
					"Baby Fanti",
					"BANGARANG",
					"ANDARTA",
				],
			],
		},
		{
			mainTitle: "Accessories",
			subTitles: [
				[
					"All Accessories",
					"Bags & Rucksacks",
					"Hats & Beanies",
					"Jewelry",
					"Sunglasses",
					"Gloves",
					"Scarves",
					"Belts",
				],
				[
					"Girls Accessories",
					"Girls Bags & Rucksacks",
					"Girls Hats & Beanies",
					"Girls Jewelry",
					"Girls Sunglasses",
					"Girls Gloves",
					"Girls Scarves",
					"Girls Belts",
				],
				[
					"Boys Accessories",
					"Boys Bags & Rucksacks",
					"Boys Hats & Beanies",
					"Boys Jewelry",
					"Boys Sunglasses",
					"Boys Gloves",
					"Boys Scarves",
					"Boys Belts",
				],
				[
					"Brands",
					"Franck & Fischer",
					"Hektik",
					"Hot Pink",
					"Micu Micu",
					"Baby Fanti",
					"BANGARANG",
					"ANDARTA",
				],
			],
		},
		{
			mainTitle: "Gifts",
			subTitles: [
				["Gifts by Age", "8 to 12 years", "12 years and older", "5 to 8 years"],
				[
					"Your Budget",
					"Gift cards",
					"Gifts under €30",
					"Gifts between €30 to €60",
					"Gifts over €60",
				],
				[
					"All Brands",
					"Luna-Leena",
					"Hektik",
					"Franck & Fischer",
					"BabyZus",
					"BabyFanti",
					"Bangarand Toys",
				],
				["All Gifts", "Toys", "Crafting & drawing", "Games & puzzles", "Playing outside"],
			],
		},
		{
			mainTitle: "Sports",
			subTitles: [
				[
					"All Girls Sports",
					"Girls Sports clothing",
					"Girls Sports tops",
					"Girls shorts & trousers",
					"Girls Sports accessories",
				],
				[
					"All Boys Sports",
					"Boys Sports clothing",
					"Boys Sports tops",
					"Boys shorts & trousers",
					"Boys Sports accessories",
				],
				[
					"Sport",
					"Football",
					"Running",
					"Dance",
					"Fitness",
					"Basketball",
					"Bangarang toys",
				],
				[
					"Brands",
					"BabyZus",
					"Franck & Fischer",
					"Hektik",
					"Hot Pink",
					"Micu Micu",
					"Baby Fanti",
					"BANGARANG",
					"ANDARTA",
				],
			],
		},
		{
			mainTitle: "Brands",
			subTitles: [
				[
					"Brands",
					"JOEY PARIS",
					"Franck & Fischer",
					"Hektik",
					"Hot Pink",
					"Micu Micu",
					"BabyFanti",
					"BANGARANG",
				],
			],
		},
	],
	baby: [
		{
			mainTitle: "Shoes",
			subTitles: [
				["All Shoes", "Sneakers", "Boots"],
				["Girls", "Girls sneakers", "Girls boots"],
				["Boys", "Boys sneakers", "Boys boots"],
				["Brands", "Alwero", "Beyoona", "Orangenkinder"],
			],
		},
		{
			mainTitle: "Furniture",
			subTitles: [
				[
					"All Furniture",
					"Furniture sets",
					"Bassinets & Cradles",
					"Changing Tables",
					"Cribs & Toddler Beds",
					"High Chair & Bootser Seats",
				],
			],
		},
		{
			mainTitle: "Transport",
			subTitles: [["All Transport", "Car seats", "Carriers", "Strollers"]],
		},
		{
			mainTitle: "Toys",
			subTitles: [
				[
					"All Toys",
					"Games",
					"Educational",
					"Cuddly Toys",
					"Books",
					"Building Toys",
					"Drawing & Crafting",
					"Toy Vehicles",
				],
				["All Ages", "0 - 1 years", "1 - 3 years"],
				[
					"All Brands",
					"Luna-Leena",
					"Hektik",
					"Franck & Fischer",
					"BabyZus",
					"BabyFanti",
					"Bangarang Toys",
				],
			],
		},
		{
			mainTitle: "Food",
			subTitles: [
				[
					"All Food",
					"Formula",
					"Drinks",
					"Snacks",
					"Bottles",
					"Bibs",
					"Burp Clothes",
					"Nursing Covers",
					"Nursing Pillows",
				],
			],
		},
		{
			mainTitle: "Diapers",
			subTitles: [
				[
					"All Diapers",
					"Changing mats & trays",
					"Diaper Liners",
					"Diaper Kits",
					"Baby wipes",
					"Diaper Organisers",
					"Diaper Pails & Wet Bags",
				],
			],
		},
	],
};

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
