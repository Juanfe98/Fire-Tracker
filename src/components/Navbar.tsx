import Link from 'next/link';
import { AiOutlineFire } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <AiOutlineFire className='w-8 h-8' />
            <span className="font-semibold text-xl tracking-tight ml-2">Fire Tracker</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">About</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
