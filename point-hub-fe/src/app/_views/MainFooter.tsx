import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="bg-white shadow dark:bg-bgDark w-full">
      <hr className="border-gray-200 sm:mx-auto dark:border-dividerDark border-dividerLight md:mb-1" />
      <div className="w-full max-w-screen-xl mx-auto md:px-10 px-5 pt-8 pb-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JAV
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-bgDark sm:mx-auto dark:border-gray-700 divide-dotted" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            JAV
          </Link>
        </span>
      </div>
    </footer>
  );
}
