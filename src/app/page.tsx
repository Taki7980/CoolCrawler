import { Hero } from "@/components/hero/Hero";
import Trending from "@/components/Trending/Trending";
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";

const Home = () => {
	return (
		<div className="w-full h-full relative z-20 flex flex-col gap-4 items-center justify-center px-4">
			<Hero />
			<Trending />
		</div>
	);
};

export default Home;
