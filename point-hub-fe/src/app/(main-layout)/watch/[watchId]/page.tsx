import { SITE_DOMAIN, SITE_NAME } from '@/config';
import { getVideoDetail } from '@/query-server/video';
import { Video } from '@/types/Video';
import { Metadata } from 'next';
import VideoNotFound from './_views/VideoNotFound';
import VideoPlayer from './_views/VideoPlayer';
import VideoSuggestion from './_views/VideoSuggestion';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const watchId = (await params).watchId;
  const video: Video | undefined = await getVideoDetail(watchId);

  return {
    title: `${video?.title} | ${SITE_NAME}`,
    description: video?.description,
    openGraph: {
      title: `${video?.title} | ${SITE_NAME}`,
      description: video?.description,
      type: 'website',
      url: `https:/${SITE_DOMAIN}/watch/${watchId}`,
      images: [
        {
          url: video?.thumbnail_url || '',
          secureUrl: video?.thumbnail_url || '',
        },
      ],
    },
  };
}

interface Props {
  params: Promise<{ watchId: string }>;
}
export default async function Page({ params }: Props) {
  const watchId = (await params).watchId;
  const video: Video | undefined = await getVideoDetail(watchId);

  if (!video) {
    return <VideoNotFound />;
  }

  return (
    <>
      <VideoPlayer video={video} />
      <br />
      <VideoSuggestion video={video} />
      <br />
      <br />
    </>
  );
}
