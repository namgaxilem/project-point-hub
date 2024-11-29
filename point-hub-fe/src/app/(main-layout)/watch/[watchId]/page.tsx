import { getVideoDetail } from "@/query-server/video";
import VideoPlayer from "./_views/VideoPlayer";
import VideoSuggestion from "./_views/VideoSuggestion";
import { Video } from "@/types/Video";

interface Props {
  params: Promise<{ watchId: string }>;
}
export default async function Page({ params }: Props) {
  const watchId = (await params).watchId;
  const video: Video | undefined = await getVideoDetail(watchId);

  return (
    <>
      {/* <div className="p-[20px] flex gap-3 container"> */}
      <VideoPlayer video={video} />
      {/* <DesktopAd /> */}
      {/* </div> */}
      {/* <MobileAd /> */}
      <br />
      <VideoSuggestion />
      <br />
      <br />
    </>
  );
}
