import Link from "next/link";
import Image from "next/image";
import qLogo from "/public/qantas-logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black bg-white shadow-md">
      <Image src={qLogo} alt="Qantas Logo" height={40} />
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/hotels">Hotels</Link>
      </nav>
    </header>
  );
}
