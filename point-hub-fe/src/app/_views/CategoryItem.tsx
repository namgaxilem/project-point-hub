import { Category } from "@/types/Category";
import Link from "next/link";

interface Props {
  category: Category;
}
export default function CategoryItem({ category }: Props) {
  return (
    <li className="bg-[#f5f5f5] dark:bg-black rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
      <Link
        href={`/categories/${category.documentId}`}
        key={category.documentId}
      >
        <div className="h-[100px] overflow-hidden mx-auto aspect-w-10 aspect-h-8 md:mb-2 mb-4">
          <img
            src="https://readymadeui.com/images/product9.webp"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="lg:text-lg md:text-base text-sm font-extrabold text-gray-800 dark:text-white">
            {category.category_name}
          </p>
        </div>
      </Link>
    </li>
  );
}
