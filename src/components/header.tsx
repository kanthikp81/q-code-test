import Link from "next/link";
import Image from "next/image";
import qLogo from "/public/qantas-logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black bg-white shadow-md">
      <Link href="/">
        <Image src={qLogo} alt="Qantas Logo" height={40} priority={false} />
      </Link>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link
            href="/hotels"
            className="text-center block border  border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          >
            Hotels
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            href="/holidays"
            className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          >
            Holidays
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            href="/rewards"
            className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          >
            Rewards
          </Link>
        </li>
      </ul>
    </header>
  );
}
