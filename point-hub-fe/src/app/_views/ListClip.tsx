import { Pagination } from "@nextui-org/react";
import Link from "next/link";

export default function ListClip() {
  return (
    <>
      <div className="flex flex-wrap gap-y-7">
        {Array.from({ length: 30 }, (_, index) => (
          <Link
            key={index}
            href={`/watch/${index}`}
            className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight"
          >
            <img
              src="https://javmost.me/wp-content/uploads/2024/11/SONE-407-400x269.jpg"
              alt="face cream"
              className="w-full max-w-[270px] mx-1 aspect-square rounded object-cover"
            />
            <div className="mt-1">
              <h6 className="font-semibold text-lg leading-8 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
                Face cream
              </h6>
              <p className="font-normal text-xs text-gray-500">
                Orange & Aloe Vera
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </>
  );
}
