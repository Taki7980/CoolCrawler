"use client";

import Image from "next/image";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const heroImages = [
	{ imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
	{ imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
	{ imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
	{ imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
	{ imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

export function HeroCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full max-w-xs hero-carousel"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{heroImages.map((image, index) => (
					<CarouselItem key={index} className="h-full w-full">
						<div className="p-1 h-full w-full">
							<Card key={index}>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<Image
										src={image.imgUrl}
										alt={image.alt}
										width={784}
										height={784}
										className="object-contain h-full w-full"
										key={image.alt}
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<Image
				src="/assets/icons/hand-drawn-arrow.svg"
				alt="arrow"
				width={175}
				height={175}
				className="absolute -left-[15%] bottom-0 max-xl:hidden"
			/>
		</Carousel>
	);
}
