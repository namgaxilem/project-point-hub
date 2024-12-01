import MainFooter from '@/app/_views/MainFooter';
import MainHeader from '@/app/_views/MainHeader';
import ListClip from './_views/ListClip';
import { getVideos } from '@/query-server/video';

interface Props {
  params: Promise<{
    page?: number;
    pageSize?: number;
  }>;
}
export default async function Page({ params }: Props) {
  const param = await params;
  const res = await getVideos(param.page, param.pageSize);

  return (
    <>
      <MainHeader />
      <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
        <div className="md:container md:mx-auto px-[20px]">
          <ListClip videos={res?.data} />
        </div>
      </section>
      <MainFooter />
    </>
  );
}
