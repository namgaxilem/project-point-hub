import VideoPlayer from "./_views/VideoPlayer";
import VideoSuggestion from "./_views/VideoSuggestion";

// {
//     params,
//   }: {
//     params: Promise<{ watchId: string }>;
//   }
export default async function Page() {
  //   const slug = (await params).watchId;
  return (
    <>
      <VideoPlayer />
      <VideoSuggestion />
    </>
  );
}
