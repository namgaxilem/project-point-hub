"use client";
import { useLang } from "@/contexts";
import { formatNumberThousandDeliminator } from "@/lib/format-utils";
import { Category } from "@/types/Category";
import Link from "next/link";

interface Props {
  category: Category;
}
export default function CategoryItem({ category }: Props) {
  const { lang } = useLang();
  return (
    <li className="bg-[#f5f5f5] dark:bg-black rounded cursor-pointer hover:-translate-y-2 transition-all relative">
      <Link
        href={`/categories/${category.documentId}`}
        key={category.documentId}
      >
        <div className="h-[150px] overflow-hidden mx-auto aspect-w-10 aspect-h-8 relative">
          <img
            src={`${category.thumbnail_url}`}
            alt={category.category_name || "category_name"}
            className="h-full w-full object-cover brightness-[60%]"
          />

          <div className="absolute w-full h-full top-0 left-0 flex justify-end flex-col pb-2">
            <p className="lg:text-lg md:text-base text-base font-extrabold text-white px-5">
              {category.category_name}
            </p>
            <p className="lg:text-base md:text-sm text-xs text-white px-5">
              ({formatNumberThousandDeliminator(category.videos.count)}{" "}
              {lang.categoryPage.videos})
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
