# Rene Bridgman - BOAS Assignment

Here is my repo for the coding assignment sent to me by BOAS.

The assignment is to:

-   Implement the homepage design: Develop the user interface for the homepage, including the header, navigation, featured products section, and footer for https://boas.co/
-   Responsive design: Ensure that the website is responsive and provides an optimal user experience across different devices and screen sizes.

I am to deliver:

-   GitHub repository: Set up a GitHub repository to manage the codebase and version control. Commit your code regularly and maintain a clean and organized repository structure.

## Project Summary

Overall, I had a lot of fun with this project. I've spent about 14 hours working on this. The most challenging part was getting the different sized drop-downs on the sub-menus. The hard part about that was finding the right data structure that let me dynamically render each drop-down depending on how many sub menus it had.

### Some strong points

** Responsiveness **
I managed to make this quite responsive with only a small amount of media querys.

** Department Dropdowns **
This was the first thing I worked on and it definitely took the longest. But it's ultimatly building these sort of things that are what I enjoy the most about web development. The "womens" and "mens" departments dont have sub-sub menus that dropdown but the "kids" and "baby" departments do.

** Search Modal **
I saw that there was a search function on the site. I didn't add a search functionality but I did want to incorporate the a modal into this.

### Things I would like to improve

For this project I knew I had limited time and that I had to pick and choose which features to include. Some things got left out and other things, looking at now, I know I could improve on. These include:

** Folder Structure **
After I had visited the boas.co, sketched out some ideas and written some pseudo code, I kind of just dived in. I didn't think of this page as part of a bigger picture when it came to the folder structure. It would have been much tidier if I had used feature based architecture for this project, containing everything inside of a "Home" folder and perhaps renaming App.js to suit that.

** The App.js File **
This file got a little bloated, considering all of the FeaturedProductsCard components and their props. This is mainly because I wanted to show that I can build dynamic & reusable components in this type of setting. If I had extra time I could have created some sort of parent component to house these "FeaturedProductsCards" and therefore making the App.js file more lean. But I set myself a time limit and I was sticking to it. And all things considering, its still quite readable.

** Right Hand Side Navbar Dropdowns **
This includes the "About us", "Account", "Cart" and "Languages" dropdowns. I chose not to make these functional as I felt I had already demonstrated my drop-down abilities with the more complicated "department" dropdowns, since they involve passing state.

** Functionality of the Burger Menu Once it is Rendered **
The "department" dropdowns function really well until viewing on a phone. The burger menu which takes its place on smaller devices does nothing when clicked. The system which you have on boas.co doesn't seem too complicated but would probably take me another day to implement.

** Animations **
I added some of own subtle animations on the dropdowns and navbar. But some such as the infinite message bar I left out. I would have liked to do them though.

** Use of className={styles["this"]} **
While i've recently learnt and love using [] notation for accessing object enums in JS (see < SecondaryBar /> for an example of this), I've actually decided today that I think it's quite ugly when it comes to declaring styles in React. I think from now on I will use dot notation like this - className={styles.someStyle}
