import { Category } from "@/types/Category";
import Link from "next/link";

interface Props {
  category: Category;
}
export default function CategoryItem({ category }: Props) {
  return (
    <li className="bg-[#f5f5f5] dark:bg-black rounded cursor-pointer hover:-translate-y-2 transition-all relative">
      <Link
        href={`/categories/${category.documentId}`}
        key={category.documentId}
      >
        <div className="h-[150px] overflow-hidden mx-auto aspect-w-10 aspect-h-8">
          <img
            src={`${category.thumbnail_url}`}
            alt={category.category_name || "category_name"}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="lg:text-lg md:text-base text-sm font-extrabold text-gray-800 dark:text-white px-5 py-3">
            {category.category_name}
          </p>
        </div>
      </Link>
    </li>
  );
}
