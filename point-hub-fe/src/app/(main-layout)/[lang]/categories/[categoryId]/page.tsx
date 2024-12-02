import CommonError from '@/app/_views/CommonError';
import ListClip from '@/app/_views/ListClip';
import { getCategory } from '@/query-server/category';
import { getVideoByCategory } from '@/query-server/video';

interface Props {
  params: Promise<{ categoryId: string, lang: string }>;
  searchParams: Promise<{ page: string }>;
}
export default async function Page({ params, searchParams }: Props) {
  const { categoryId, lang } = await params;
  const { page } = await searchParams;
  const [categoryPromise, videosPromise] = await Promise.allSettled([
    getCategory(categoryId, lang),
    getVideoByCategory(categoryId, page || 1, 10, lang),
  ]);
  const category = categoryPromise.status === 'fulfilled' ? categoryPromise.value : null;
  const videos = videosPromise.status === 'fulfilled' ? videosPromise.value : null;

  if (!category) {
    return <CommonError />;
  }

  return (
    <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
      <h1 className="md:container md:mx-auto px-[20px] text-center text-2xl font-bold mb-8">
        {category.category_name}
      </h1>
      <div className="md:container md:mx-auto px-[20px]">
        <ListClip videos={videos?.data} pagination={videos?.meta} />
      </div>
    </section>
  );
}
