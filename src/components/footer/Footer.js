/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="content-wrapper">
				<div className={styles["footer-top-container"]}>
					<div className={styles["footer-column"]}>
						<img
							src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/boas-logo.png?v=174546100373105226421679307177"
							alt="BOAS logo"
						/>
						<p>You've made it to the end!</p>
						<p>
							Thanks for taking the time. If you're here because you're lost, feel
							free to{" "}
							<a href="#" id={styles["contact-us"]}>
								contact us
							</a>{" "}
							and we'll get you back on track.
						</p>
						<h3>Follow us on:</h3>
						<div className={styles["socials-container"]}>
							<a href="#">
								<div className={styles["socials-img-wrapper"]}>
									<img
										src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/facebook_logo.png?v=111768930219237438961679307177"
										alt="facebook logo"
									/>
								</div>
							</a>
							<a href="#">
								<div className={styles["socials-img-wrapper"]}>
									<img
										src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/instagram_logo.png?v=69111395402489423731679307177"
										alt="facebook logo"
									/>
								</div>
							</a>
							<a href="#">
								<div className={styles["socials-img-wrapper"]}>
									<img
										src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/tiktok_logo_new.png?v=28475546769171832871679307177"
										alt="facebook logo"
									/>
								</div>
							</a>
							<a href="#">
								<div className={styles["socials-img-wrapper"]}>
									<img
										src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/linkedin_logo.png?v=148665479824603558871679307177"
										alt="facebook logo"
									/>
								</div>
							</a>
							<a href="#">
								<div className={styles["socials-img-wrapper"]}>
									<img
										src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/spotify_logo_new.png?v=27010289175530569261679307177"
										alt="facebook logo"
									/>
								</div>
							</a>
						</div>
					</div>
					<div className={styles["footer-column"]}>
						<h3>ABOUT BOAS</h3>
						<ul>
							<li>
								<a href="#">Mission</a>
							</li>
							<li>
								<a href="#">Sustainability</a>
							</li>
							<li>
								<a href="#">FAQ</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Team</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Shipping & Return</a>
							</li>
						</ul>
					</div>
					<div className={styles["footer-column"]}>
						<h3>Brands and Press</h3>
						<ul>
							<li>
								<a href="#">Sell on Boas</a>
							</li>
							<li>
								<a href="#">All Brands</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Affiliate Program</a>
							</li>
						</ul>
						<div className={styles.subscribe}>
							<h3>NEW TO BOAS?</h3>
							<p>Subscribe to our newsletter to get updates on new offers.</p>
							<input type="text" placeholder="Enter your email address" />
							<button className={styles.btn}>SUBSCRIBE</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
