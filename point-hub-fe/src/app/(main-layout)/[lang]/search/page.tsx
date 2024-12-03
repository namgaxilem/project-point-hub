import ListClip from '@/app/_views/ListClip';
import { getDict } from '@/app/dictionaries';
import { getVideosByKeyword } from '@/query-server/video';
import SearchInput from './_views/SearchInput';

interface Props {
  params: Promise<{
    lang: string;
  }>;
  searchParams: Promise<{
    page?: number;
    pageSize?: number;
    keyword?: string;
  }>;
}
export default async ({ params, searchParams }: Readonly<Props>) => {
  const { keyword, page, pageSize } = await searchParams;
  const { lang } = await params;
  const [videosPromise] = await Promise.allSettled([
    getVideosByKeyword(keyword || '', page || 1, pageSize || 50, lang),
  ]);
  const videos = videosPromise.status === 'fulfilled' ? videosPromise.value : null;
  const dict = await getDict(lang);

  return (
    <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
      <h1 className="md:container md:mx-auto px-[20px] text-center text-2xl font-bold mb-8">
        {dict.searchPage.title}
      </h1>

      <div className="md:container md:mx-auto px-[20px] mb-10">
        <SearchInput keyword={keyword} />
      </div>

      <div className="md:container md:mx-auto px-[20px]">
        <ListClip videos={videos?.data} pagination={videos?.meta} />
      </div>
    </section>
  );
};
