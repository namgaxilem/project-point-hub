import { SITE_NAME } from '@/config';
import LangLink from './LangLink';
import { Logo } from './Logo';

export default function MainFooter() {
  return (
    <footer className="bg-white shadow dark:bg-bgDark w-full">
      <div className="w-full max-w-screen-xl mx-auto md:px-10 px-5 pt-5 pb-4">
        <div className="sm:flex sm:items-center justify-center">
          <LangLink
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center"
          >
            <Logo />
          </LangLink>
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
            <li>
              <LangLink href="/" className="hover:underline me-4 md:me-6">
                About
              </LangLink>
            </li>
            <li>
              <LangLink href="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </LangLink>
            </li>
            <li>
              <LangLink href="/" className="hover:underline me-4 md:me-6">
                Licensing
              </LangLink>
            </li>
            <li>
              <LangLink href="/" className="hover:underline">
                Contact
              </LangLink>
            </li>
          </ul> */}
        </div>
        <hr className="my-4 border-dividerLight sm:mx-auto dark:border-dividerDark" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{' '}
          <LangLink href="/" className="hover:underline">
            {SITE_NAME}
          </LangLink>
        </span>
      </div>
    </footer>
  );
}
