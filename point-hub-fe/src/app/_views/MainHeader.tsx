"use client";

import { SearchIcon } from "@/icons/SearchIcon";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import ChangeLangBtn from "./ChangeLangBtn";
import DesktopDarkmode from "./DarkmodeToggle";
import { useState } from "react";

const Categories = () => {
  return (
    <div className="z-10 grid w-auto grid-cols-2 text-sm bg-bgLight dark:bg-bgDark border border-dividerLight dark:border-dividerDark rounded-lg shadow-md">
      <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
        <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Library
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Pro Version
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Playground
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              License
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <ul className="space-y-4">
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Support Center
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Terms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MobileSideMenuContent = () => {
  return (
    <ModalBody className="p-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="ms-3">Trang chu</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Xem nhieu</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">The loai</span>
            </a>
          </li>
        </ul>
        <Categories />
      </div>
    </ModalBody>
  );
};

export default function MainHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onOpenMobileMenu = () => {
    onOpen();
  };

  return (
    <header>
      <nav className="bg-bgLight px-4 lg:px-6 py-2.5 dark:bg-bgDark border-b-1 dark:border-dividerDark border-dividerLight">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              JAV
            </span>
          </a>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Trang chủ
                </a>
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
                  placeholder="Type to search..."
                  startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                  }
                />
              </li>
              <li>
                <a
                  href="/top-watch"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Xem nhiều
                </a>
              </li>
              <li>
                <Tooltip className="p-0" content={<Categories />}>
                  <Link href="/categories" className="flex items-center gap-1">
                    <span>The loai</span>
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
            <DesktopDarkmode />
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
        <ModalContent className="md:w-[80vw] w-[85vw] h-full absolute right-0">
          <ModalHeader>
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
          </ModalHeader>
          <MobileSideMenuContent />
          <ModalFooter className="flex-col px-2 py-5">
            <Input
              isClearable
              label={`Tim kiem`}
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
              placeholder="Type to search..."
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
