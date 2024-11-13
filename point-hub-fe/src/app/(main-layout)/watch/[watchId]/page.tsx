import VideoPlayer from "./_views/VideoPlayer";
import VideoSuggestion from "./_views/VideoSuggestion";

interface Props {
  params: Promise<{ watchId: string }>;
}
export default async function Page({
  params,
}: {
  params: Promise<{ watchId: string }>;
}) {
  const slug = (await params).watchId;
  return (
    <>
      <VideoPlayer />
      <VideoSuggestion />
    </>
  );
}
