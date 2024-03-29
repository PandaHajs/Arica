import Link from "next/link";

export default function DropDown() {
  return (
    <ul>
      <li>
        <Link href="/Art/2D">2D Art</Link>
      </li>
      <li>
        <Link href="/Art/3D">3D Art</Link>
      </li>
      <li>
        <Link href="/Art/Cosplay">Cosplay</Link>
      </li>
    </ul>
  );
}
