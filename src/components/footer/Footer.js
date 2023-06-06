/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="content-wrapper">
				{/* First row for footer */}
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
							<a href="#" className={styles["green-link"]}>
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
				{/* Second row for footer */}
				<div className={styles["footer-second-container"]}>
					<h3>Supported Payment Methods</h3>
					<div className={styles["supported-payments-list"]}>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_deal.png?v=57189021671588529871679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_amazon.png?v=54906662476848016371679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_paypal.png?v=14275536502169800201679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_mastercard.png?v=88842919818796221951679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_klarna.png?v=143107275516104351411679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_visa_image.png?v=54488292528603714521679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_shoppay.png?v=164706647414704945191679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_gpay.png?v=116435065956880442461679307177"
							alt="logo"
						/>
						<img
							src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_amx.png?v=74243363861210880051679307177"
							alt="logo"
						/>
					</div>
				</div>
				{/* Third row */}
				<div className={styles["t-and-c-copyright"]}>
					<ul>
						<li>
							<a href="#" className={styles["green-link"]}>
								Privacy Policy
							</a>
						</li>
						<li>|</li>
						<li>
							<a href="#" className={styles["green-link"]}>
								Terms & Conditions
							</a>
						</li>
					</ul>
					<p>
						<strong>Copyright © 2022 BOAS Marketplace</strong>
					</p>
				</div>
				{/* Final row */}
				<div className={styles["logo-row"]}>
					<a href="#">
						<img
							src="https://tree-nation.com/images/tracking/label-co2-website-black-en.png"
							alt="logo"
						/>
					</a>
					<a href="#">
						<img
							id={styles["bigger-logo"]}
							src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/White_logo_transparent_background.png"
							alt="logo"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
