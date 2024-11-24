"use client";

import {
  getCurrentSearchParamByKey,
  updateSearchParams,
} from "@/lib/url-utils";
import { cn, PaginationItemType } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default ({
  ref,
  key,
  value,
  isActive,
  onNext,
  onPrevious,
  className,
}: any) => {
  const pathname = usePathname();

  const nextValue = useMemo(() => {
    const currentPage = getCurrentSearchParamByKey(window.location.origin + pathname, "page");
    const nextValue = currentPage ? `${Number(currentPage) + 1}` : "2";
    return updateSearchParams(window.location.origin + pathname, "page", nextValue);
  }, [pathname]);

  const prevValue = useMemo(() => {
    const currentPage = getCurrentSearchParamByKey(window.location.origin + pathname, "page");
    const prevValue =
      currentPage && Number(currentPage) > 1
        ? `${Number(currentPage) - 1}`
        : "1";
    return updateSearchParams(window.location.origin + pathname, "page", prevValue);
  }, [pathname]);

  const mainValue = useMemo(() => {
    return updateSearchParams(window.location.origin + pathname, "page", value);
  }, [pathname]);

  if (value === PaginationItemType.NEXT) {
    return (
      <Link
        href={nextValue}
        key={key}
        className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
        onClick={onNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    );
  }

  if (value === PaginationItemType.PREV) {
    return (
      <Link
        href={prevValue}
        key={key}
        className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
        onClick={onPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    );
  }

  if (value === PaginationItemType.DOTS) {
    return (
      <button key={key} className={className}>
        ...
      </button>
    );
  }

  // cursor is the default item
  return (
    <Link
      key={key}
      ref={ref}
      href={mainValue}
      className={cn(
        className,
        isActive && "text-white bg-gradient-to-br font-bold"
      )}
    >
      {value}
    </Link>
  );
};
