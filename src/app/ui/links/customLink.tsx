import Image from "next/image";
import Link from "next/link";

type CustomLinkProps = {
	icon: string;
	link: string;
	alt: string;
};

export default function CustomLink({ icon, link, alt }: CustomLinkProps) {
	return (
		<Link href={link} target="_blank">
			<Image src={icon} alt={alt} width="50" height="50" />
		</Link>
	);
}
