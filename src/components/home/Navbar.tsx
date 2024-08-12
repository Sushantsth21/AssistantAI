import Link from "next/link";
import { Button } from "../ui/button";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-10 mb-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300">
          NKU
        </Link>

        <ul className="flex space-x-6 items-center">
          {!user ? (
            <>
              <li>
                <Link href="/login" className="text-lg hover:text-gray-400 transition-colors duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-lg hover:text-gray-400 transition-colors duration-300">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
             <li className="relative group">
                <Link href="/private/dashboard" className="text-lg hover:text-gray-400 transition-colors duration-600">
               Dashboard
                </Link>

              </li>


              <li>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button type="submit" variant="outline" className="text-white border-white hover:bg-gray-700">
                    Logout
                  </Button>
                </form>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
