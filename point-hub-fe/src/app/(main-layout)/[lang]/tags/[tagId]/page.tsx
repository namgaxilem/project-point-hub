import CommonError from '@/app/_views/CommonError';
import ListClip from '@/app/_views/ListClip';
import { getTag } from '@/query-server/tag';
import { getVideosByTag } from '@/query-server/video';

interface Props {
  params: Promise<{ tagId: string; lang: string }>;
  searchParams: Promise<{ page: string }>;
}
export default async function Page({ params, searchParams }: Readonly<Props>) {
  const { tagId, lang } = await params;
  const { page } = await searchParams;
  const [tagPromise, videosPromise] = await Promise.allSettled([
    getTag(tagId, lang),
    getVideosByTag(tagId, page || 1, 10, lang),
  ]);
  const tag = tagPromise.status === 'fulfilled' ? tagPromise.value : null;
  const videos = videosPromise.status === 'fulfilled' ? videosPromise.value : null;

  if (!tag) {
    return <CommonError />;
  }

  return (
    <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
      <h1 className="md:container md:mx-auto px-[20px] text-center text-2xl font-bold mb-8">
        {tag.tag_name}
      </h1>
      <div className="md:container md:mx-auto px-[20px]">
        <ListClip videos={videos?.data} pagination={videos?.meta} />
      </div>
    </section>
  );
}
