import Image from "next/image";
import Link from "next/link";

export default function CustomLink({
	icon,
	link,
	alt,
}: {
	icon: string;
	link: string;
	alt: string;
}) {
	return (
		<Link href={link} target="_blank">
			<Image src={icon} alt={alt} width="50" height="50" />
		</Link>
	);
}
