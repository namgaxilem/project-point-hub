import { Pagination } from "@nextui-org/react";
import Link from "next/link";

export default function ListClip() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-xl:gap-4 gap-6 py-[20px]">
        {Array.from({ length: 30 }, (_, index) => (
          <Link
            key={index}
            href={`/watch/${index}`}
            className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight overflow-hidden"
          >
            <img
              src="https://www.w3schools.com/html/pic_trulli.jpg"
              alt="face cream"
              className="w-full max-w-[270px] aspect-square rounded object-cover"
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
