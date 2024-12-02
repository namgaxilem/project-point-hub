import MainFooter from '@/app/_views/MainFooter';
import MainHeader from '@/app/_views/MainHeader';
import { RootContext } from '@/contexts';
import { getVideos } from '@/query-server/video';
import ListClip from './_views/ListClip';
import { getDict } from './dictionaries';

interface Props {
  searchParams: Promise<{
    page?: number;
    pageSize?: number;
  }>;
}
export default async function Page({ searchParams }: Readonly<Props>) {
  const dict = await getDict('en');
  const { page, pageSize } = await searchParams;
  const res = await getVideos(page || 1, pageSize || 50, 'en');

  return (
    <RootContext dict={dict} locale={'en'}>
      <MainHeader />
      <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
        <div className="md:container md:mx-auto px-[20px]">
          <ListClip videos={res?.data} />
        </div>
      </section>
      <MainFooter />
    </RootContext>
  );
}
