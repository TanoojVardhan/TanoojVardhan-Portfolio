"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					<div className="flex items-center gap-4">
						<Link href="/" className="flex items-center">
							<Image
								src="/tanooj-logo.svg"
								alt="Tanooj Logo"
								width={75}
								height={75}
								className="hover:scale-110 transition-transform duration-200"
							/>
						</Link>
						<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100 ml-2"
						>
							<ArrowLeft className="w-6 h-6" />
						</Link>
					</div>
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/experience"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Experience
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
