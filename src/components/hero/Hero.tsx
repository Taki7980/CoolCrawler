"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";
import { HeroCarousel } from "./HeroCarousel";
import Searchbar from "./Searchbar";

export function Hero() {
	return (
		
			<section className="px-6 md:px-20">
				<div className="flex items-center justify-center max-xl:flex-col gap-16">
					<div className="flex flex-col justify-center h-full w-full">
						<p className="small-text bg-gradient-to-b from-slate-600 to-stone-500 bg-clip-text text-transparent">
							Smart Shopping Starts Here:
							<Image
								src="/assets/icons/arrow-right.svg"
								alt="arrow-right"
								width={17}
								height={17}
							/>
						</p>

						<h1 className="head-text">
							Unleash the Power of
							<span className="bg-gradient-to-b from-slate-600 to-stone-500 bg-clip-text text-transparent">
								{" "}
								CoolCrawler
							</span>
						</h1>

						<p className="mt-6">
							Powerful, self-serve product and growth analytics to
							help you convert, engage, and retain more.
						</p>

						<Searchbar />
					</div>

					<HeroCarousel />
				</div>
			</section>
		
	);
}
