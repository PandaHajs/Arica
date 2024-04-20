import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@/app/ui/styles/variables.scss";
import Header from "@/app/ui/header/header";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Bukczynska",
		default: "Home | Bukczynska",
	},
	description: "Personal website of Paulina Bukczyńska",
	authors: [
		{
			name: "Kacper Skowronski",
			url: "https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/",
		},
		{
			name: "Paulina Bukczyńska",
		},
	],
	keywords: [
		"personal",
		"website",
		"portfolio",
		"Paulina",
		"Bukczyńska",
		"Bukczynska",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ProgressBarProvider>
					<Header />
					{children}
					<ProgressBar className={"progressBar"} />
				</ProgressBarProvider>
			</body>
		</html>
	);
}
