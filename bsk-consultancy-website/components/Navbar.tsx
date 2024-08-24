import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="text-gray-800 text-xl font-bold">BSK Consultancy</p>
          </Link>
          <div className="flex space-x-4">
            <Link href="/about">
              <p className="text-gray-600">About</p>
            </Link>
            <Link href="/services">
              <p className="text-gray-600">Services</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-600">Contact</p>
            </Link>
            <Link href="/signin">
              <p className="text-gray-600">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
