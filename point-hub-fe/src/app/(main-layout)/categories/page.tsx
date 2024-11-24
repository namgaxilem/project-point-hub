import { getCategories } from "@/query-server/category";
import Categories from "./_views/Categories";

export default async function Page() {
  const res = await getCategories();
  return <Categories categories={res?.data} />;
}
