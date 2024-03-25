import { NextResponse } from "next/server";

const photos = [
  {
    id: "1",
    src: "/1.jpeg",
    alt: "test",
    width: "1440",
    height: "1800",
  },
  {
    id: "2",
    src: "/2.jpeg",
    alt: "test",
    width: "1080",
    height: "1350",
  },
  {
    id: "3",
    src: "/3.jpeg",
    alt: "test",
    width: "1440",
    height: "1800",
  },
  {
    id: "4",
    src: "/4.jpeg",
    alt: "test",
    width: "1647",
    height: "1440",
  },
  {
    id: "5",
    src: "/5.jpeg",
    alt: "test",
    width: "1440",
    height: "1440",
  },
  {
    id: "6",
    src: "/6.jpeg",
    alt: "test",
    width: "1080",
    height: "1350",
  },
  {
    id: "7",
    src: "/1.jpeg",
    alt: "test",
    width: "1440",
    height: "1800",
  },
  {
    id: "8",
    src: "/2.jpeg",
    alt: "test",
    width: "1080",
    height: "1350",
  },
  {
    id: "9",
    src: "/3.jpeg",
    alt: "test",
    width: "1440",
    height: "1800",
  },
];

export async function GET() {
  return NextResponse.json({
    image: photos,
  });
}
