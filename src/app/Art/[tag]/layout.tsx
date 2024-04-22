import type { Metadata } from "next";
import Page from "./page";
import { Suspense } from "react";
import Skeleton from "@/app/ui/artPageComponents/artSkeleton/skeleton";

export const metadata: Metadata = {
	title: "Art",
};

export default function ArtLayout() {
	return (
		<Suspense fallback={<Skeleton />}>
			<Page />
		</Suspense>
	);
}
