import type { Metadata } from "next";
import Page from "./page";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "3D Models",
};

export default function ModelsLayout() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Page />
		</Suspense>
	);
}
