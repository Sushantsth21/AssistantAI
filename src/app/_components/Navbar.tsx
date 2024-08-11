import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#030303] h-16 flex items-center px-6 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center flex-shrink-0 ml-16">
        <Image
          src="/images/logo.png" // Replace with your logo path
          alt="Logo"
          width={60} // Adjust the size as needed
          height={50}
        />
      </div>
      {/* Navigation Links */}
      <ul className="ml-auto flex space-x-6 text-white">
        <li>
          <Link href="/" className="hover:text-gray-400 transition-colors mr-10">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 transition-colors mr-16">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
