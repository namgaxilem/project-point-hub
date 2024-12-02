import CommonError from '@/app/_views/CommonError';
import ListClip from '@/app/_views/ListClip';
import { getDict } from '@/app/dictionaries';
import { getVideosTopwatch } from '@/query-server/video';

interface Props {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ page: string }>;
}
export default async function Page({ searchParams, params }: Props) {
  try {
    const { lang } = await params;
    const { page } = await searchParams;
    const [videosPromise] = await Promise.allSettled([getVideosTopwatch(Number(page) || 1, 50, lang)]);
    const dict = await getDict(lang);

    const videos = videosPromise.status === 'fulfilled' ? videosPromise.value : null;

    return (
      <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
        <h1 className="md:container md:mx-auto px-[20px] text-center text-2xl font-bold mb-8">
          {dict.topWatchPage.title}
        </h1>
        <div className="md:container md:mx-auto px-[20px]">
          <ListClip videos={videos?.data} pagination={videos?.meta} />
        </div>
      </section>
    );
  } catch (err) {
    console.error(err);
    return <CommonError />;
  }
}
