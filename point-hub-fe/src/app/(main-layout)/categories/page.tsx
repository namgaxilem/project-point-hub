import CategoryItem from "@/app/_views/CategoryItem";
import { getCategories } from "@/query-server/category";

export default async function Page() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto mb-20 pt-5 md:pt-10 px-[20px] md:px-0">
      <h1 className="text-2xl font-bold mb-5">All categories</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-xl:gap-4 gap-6 py-[20px]">
        {categories?.map((cate) => (
          <li key={cate.documentId}>
            <CategoryItem category={cate} />
          </li>
        ))}
      </ul>

      <br />
    </div>
  );
}
