import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLinks = [
	{ src: "/assets/icons/search.svg", alt: "Search", url: "/hhh" },
	{ src: "/assets/icons/black-heart.svg", alt: "Heart", url: "/" },
	{ src: "/assets/icons/user.svg", alt: "User", url: "/" },
];

const Navbar = () => {
	return (
		<header className="w-full relative z-10">
			<div className="nav">
				<Link href={"/"} className="flex items-center gap-1">
					<Image
						src={"/assets/icons/logo.svg"}
						alt="logo"
						width={27}
						height={27}
					/>
					<p className="nav-logo">
						Cool{" "}
						<span className="bg-gradient-to-b from-slate-600 to-stone-500 bg-clip-text text-transparent">
							Crawler
						</span>
					</p>
				</Link>
				<div className="flex items-center gap-5">
					{NavLinks.map((item, index): any => (
						<Link href={item.url} key={index} className="cursor-pointer">
							<Image
								src={item.src}
								alt={item.alt}
								width={20}
								height={20}
								className="object-contain"
							/>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
