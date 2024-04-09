import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractDescription, extractPrice } from "../utils";

export async function scrapeAmazonProducts(url: string) {
	if (!url) return;

	// Bright data proxy configurations
	const username = String(process.env.BRIGHT_DATA_USERNAME);
	const password = String(process.env.BRIGHT_DATA_PASSWORD);
	const port = 22225;
	const session_id = (10000000 * Math.random()) | 0;

	const options = {
		auth: {
			username: `${username}-session-${session_id}`,
			password,
		},
		host: "brd.superproxy.io",
		port,
		rejectUnauthorized: false,
	};

	try {
		// fetch data form the product page
		const response = await axios.get(url, options);
		const $ = cheerio.load(response.data);
		// Extract product info
		const productName = $("#productTitle").text().trim();
		const currentPrice = extractPrice(
			$(".priceToPay span.a-price-whole"),
			$("a.size.base .a-color-price"),
			$("a.button-selected .a-color-base")
		);
		const originalPrice = extractPrice(
			$("#priceblock_outprice"),
			$(".a-price.a-text-price span.a-offscreen"),
			$("listPrice"),
			$(".priceblock_dealprice"),
			$(".a-size-base .a-color-price"),
			$(".a-size-small .aok-offscreen")
		);

		const customerReviews =
			$("#acrCustomerReviewLink").text().trim() ||
			$("#acrCustomerReviewText").text().trim();

		const cunstomerRevieved = customerReviews
			.slice(0, customerReviews.length / 2)
			.trim();
		const starRating = $("span.a-size-base span.a-color-base")
			.text()
			.trim();

		const outOfStock =
			$("#availability span").text().trim().toLowerCase() ===
			"Out of stock";
		const images =
			$("#imgBlkFront").attr("data-a-dynamic-image") ||
			$("#landingImage").attr("data-a-dynamic-image") ||
			"{}";

		const imageUrls = Object.keys(JSON.parse(images));

		const currency = extractCurrency($(".a-price-symbol"));

		const discountRate = $(".savingsPercentage")
			.text()
			.replace(/[-%]/g, "");

		
		const description = extractDescription($)
		// construct data object
		const data = {
			url,
			title: productName,
			currentPrice: Number(currentPrice) || Number(originalPrice),
			originalPrice: Number(currentPrice) || Number(originalPrice),
			currency: currency || "$",
			image: imageUrls[0],
			priceHistory: [],
			isOutOfStock: outOfStock,
			discountRate: Number(discountRate),
			customerReviews: cunstomerRevieved,
			starRating: starRating,
			description: description,
		};
		console.log(data);
	} catch (error: any) {
		throw new Error(`fail to scrape product : ${error.message}`);
	}
}
