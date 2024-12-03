import CommonError from '@/app/_views/CommonError';
import ListClip from '@/app/_views/ListClip';
import { getActor } from '@/query-server/actor';
import { getVideosByActor } from '@/query-server/video';

interface Props {
  params: Promise<{ actorId: string, lang: string }>;
  searchParams: Promise<{ page: string }>;
}
export default async function Page({ params, searchParams }: Readonly<Props>) {
  const { actorId, lang } = await params;
  const { page } = await searchParams;
  const [actorPromise, videosPromise] = await Promise.allSettled([
    getActor(actorId, lang),
    getVideosByActor(actorId, page || 1, 10, lang),
  ]);
  const actor = actorPromise.status === 'fulfilled' ? actorPromise.value : null;
  const videos = videosPromise.status === 'fulfilled' ? videosPromise.value : null;

  if (!actor) {
    return <CommonError />;
  }

  return (
    <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
      <h1 className="md:container md:mx-auto px-[20px] text-center text-2xl font-bold mb-8">
        {actor.actor_name}
      </h1>
      <div className="md:container md:mx-auto px-[20px]">
        <ListClip videos={videos?.data} pagination={videos?.meta} />
      </div>
    </section>
  );
}
