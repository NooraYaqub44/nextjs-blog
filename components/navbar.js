import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex bg-gray-100 p-6 ring-1 shadow-xl space-x-2 place-content-end font-semibold text-sm font-mono">
      <div>
        <nav>
    
          <ul className="flex space-x-3 ">
            <li>
              <Link  href="/">
                <a className="hover:bg-blue-300 rounded-full p-2 ">About</a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:bg-blue-300 rounded-full p-2 ">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="hover:bg-blue-300 rounded-full p-2 " >Resources</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="hover:bg-blue-300 rounded-full p-2 ">FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:bg-blue-300 rounded-full p-2 ">Work</a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:bg-blue-300 rounded-full p-2 ">More</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
