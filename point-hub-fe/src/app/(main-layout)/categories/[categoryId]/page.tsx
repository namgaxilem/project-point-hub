import CommonError from "@/app/_views/CommonError";
import ListClip from "@/app/_views/ListClip";
import { getCategory } from "@/query-server/category";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const category = await getCategory(categoryId);

  if (!category) {
    return <CommonError />;
  }

  console.log("category", category);

  return (
    <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
      <h1 className="md:container md:mx-auto px-[20px] text-center text-2xl font-bold mb-8">
        {category.category_name}
      </h1>
      <div className="md:container md:mx-auto px-[20px]">
        <ListClip />
      </div>
    </section>
  );
}
