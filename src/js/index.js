/** @format */

console.log("yes")

const openBtn = document.querySelector(".menu__open")
const closeBtn = document.querySelector(".menu__close")
const nav = document.querySelector(".navigation__links")

openBtn.addEventListener("click", () => {
	nav.classList.add("active")
})

closeBtn.addEventListener("click", () => {
	nav.classList.remove("active")
})

let count = 0
const images = [
	{
		image: require("../images/desktop-image-hero-1.jpg"),
		mobile: require("../images/mobile-image-hero-1.jpg"),
		title: "Discover innovative ways to decorate",
		description:
			"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
	},
	{
		image: require("../images/desktop-image-hero-2.jpg"),
		mobile: require("../images/mobile-image-hero-2.jpg"),
		title: "We are available all across the globe",
		description:
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
	},
	{
		image: require("../images/desktop-image-hero-3.jpg"),
		mobile: require("../images/mobile-image-hero-3.jpg"),
		title: "Manufactured with the best materials",
		description:
			"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
	},
]

const furnitureImage = document.querySelector(
	".furniture-image__media--image--big"
)
const furnitureImageSmall = document.querySelector(
	".furniture-image__media--image--small"
)
const furnitureTitle = document.querySelector(".furniture-info__title")
const furnitureDescription = document.querySelector(
	".furniture-info__description"
)
const btnLeft = document.querySelector(".button__change--left")
const btnRight = document.querySelector(".button__change--right")

btnLeft.addEventListener("click", () => {
	if (count === 0) {
		count = images.length - 1
	} else {
		count -= 1
	}
	furnitureImage.src = images[count].image
	furnitureImageSmall.srcset = images[count].mobile
	furnitureTitle.textContent = images[count].title
	furnitureDescription.textContent = images[count].description
})

btnRight.addEventListener("click", () => {
	if (count === images.length - 1) {
		count = 0
	} else {
		count += 1
	}
	furnitureImage.src = images[count].image
	furnitureImageSmall.srcset = images[count].mobile
	furnitureTitle.textContent = images[count].title
	furnitureDescription.textContent = images[count].description
})

// We are available all across the globe

// With stores all over the world, it's easy for you to find furniture for your home or place of business.
// Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
// store locator. Any questions? Don't hesitate to contact us today.

// Shop now

// Manufactured with the best materials

// Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
// to ensure that every product is made as perfect and as consistent as possible. With three decades of
// experience in this industry, we understand what customers want for their home and office.

// Shop now

// About our furniture
