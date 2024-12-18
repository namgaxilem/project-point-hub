import ListClip from '@/app/_views/ListClip';
import { getVideos } from '@/query-server/video';

interface Props {
  params: Promise<{
    lang: string;
  }>;
  searchParams: Promise<{
    page?: number;
    pageSize?: number;
  }>;
}
export default async function Page({ params, searchParams }: Readonly<Props>) {
  const { lang } = await params;
  const { page, pageSize } = await searchParams;
  const res = await getVideos(page ?? 1, pageSize ?? 50, lang);

  return (
    <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
      <div className="md:container md:mx-auto px-[20px]">
        <ListClip videos={res?.data} pagination={res?.meta} />
      </div>
    </section>
  );
}
