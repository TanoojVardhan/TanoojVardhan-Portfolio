"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		// Only report views in production environment
		if (process.env.NODE_ENV === "production") {
			try {
				fetch("/api/incr", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ slug }),
				}).catch(err => {
					// Silently handle errors during view tracking
					console.error("Failed to report view:", err);
				});
			} catch (error) {
				// Safety net for any other errors
				console.error("Error reporting view:", error);
			}
		}
	}, [slug]);

	return null;
};
