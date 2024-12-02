import { getCategories } from '@/query-server/category';
import Categories from './_views/Categories';

interface Props {
  params: Promise<{
    lang: string;
  }>;
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  const res = await getCategories(lang);
  return <Categories categories={res?.data} />;
}
