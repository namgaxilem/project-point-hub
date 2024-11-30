"use client";

import { SearchIcon } from "@/icons/SearchIcon";
import {
  Accordion,
  AccordionItem,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import ChangeLangBtn from "./ChangeLangBtn";
import { Logo } from "./Logo";
import { useLang } from "@/contexts";
import { useCategories } from "@/query-client/category";
import CategoryItem from "./CategoryItem";
import dynamic from "next/dynamic";

const DarkmodeToggle = dynamic(() => import("./DarkmodeToggle"), {
  ssr: false,
});

const CategoriesMobile = () => {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 p-[5px]">
      {categories?.map((cate) => (
        <li key={cate.documentId}>
          <CategoryItem category={cate} />
        </li>
      ))}
    </ul>
  );
};

const CategoriesDesktop = () => {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 p-[20px]">
      {categories?.map((cate) => (
        <li key={cate.documentId}>
          <CategoryItem category={cate} />
        </li>
      ))}
    </ul>
  );
};

const MobileSideMenuContent = () => {
  const { lang } = useLang();

  return (
    <ModalBody className="p-0">
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-bgDark bg-bgLight">
        <ul className="space-y-2 font-medium mb-3">
          <li>
            <Link
              href="/"
              className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                {lang.header.homePage}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/top-watches"
              className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                {lang.header.topWatch}
              </span>
            </Link>
          </li>
          <Accordion isCompact defaultExpandedKeys={["1"]} className="p-0 m-0">
            <AccordionItem
              key={"1"}
              className="p-0 m-0"
              title={
                <li>
                  <Link
                    href="/categories"
                    className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {lang.header.categories}
                    </span>
                  </Link>
                </li>
              }
            >
              <CategoriesMobile />
            </AccordionItem>
          </Accordion>
        </ul>
      </div>
    </ModalBody>
  );
};

export default function MainHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { lang } = useLang();

  const onOpenMobileMenu = () => {
    onOpen();
  };

  return (
    <header>
      <nav className="bg-bgLight px-4 lg:px-6 py-2.5 dark:bg-bgDark dark:border-0 dark:border-dividerDark border-dividerLight md:pr-4 pr-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  {lang.header.homePage}
                </Link>
              </li>
              <li>
                <Input
                  isClearable
                  radius="lg"
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-transparent",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-default-200/50",
                      "dark:bg-default/60",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-default-200/70",
                      "dark:hover:bg-default/70",
                      "group-data-[focus=true]:bg-default-200/50",
                      "dark:group-data-[focus=true]:bg-default/60",
                      "!cursor-text",
                    ],
                  }}
                  placeholder={lang.header.searchHolder}
                  startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                  }
                />
              </li>
              <li>
                <Link
                  href="/top-watches"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {lang.header.topWatch}
                </Link>
              </li>
              <li>
                <Tooltip className="p-0" content={<CategoriesDesktop />}>
                  <Link href="/categories" className="flex items-center gap-1">
                    <span>{lang.header.categories}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </Tooltip>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <DarkmodeToggle />
            <ChangeLangBtn />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={onOpenMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <Modal
        closeButton={<></>}
        placement="top-center"
        isDismissable={true}
        isKeyboardDismissDisabled
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <ModalContent className="md:w-[80vw] w-[85vw] h-full absolute right-0 dark:bg-bgDark bg-bgLight">
          <ModalHeader className="p-2">
            <button onClick={() => onClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Logo />
            </Link>
          </ModalHeader>
          <MobileSideMenuContent />
          <ModalFooter className="flex-col px-2 py-5">
            <Input
              isClearable
              label={lang.header.searchTitle}
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder={lang.header.searchHolder}
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </header>
  );
}
