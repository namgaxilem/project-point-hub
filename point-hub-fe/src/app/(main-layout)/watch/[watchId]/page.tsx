import DesktopAd from "./_views/DesktopAd";
import MobileAd from "./_views/MobileAd";
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
      <div className="p-[20px] flex gap-3">
        <VideoPlayer />
        <DesktopAd />
      </div>
      <MobileAd />
      <br />
      <VideoSuggestion />
      <br />
      <br />
    </>
  );
}
