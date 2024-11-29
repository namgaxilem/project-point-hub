"use client";

import ListClip from "@/app/_views/ListClip";
import { useLang } from "@/contexts";

export default function VideoSuggestion() {
  const { lang } = useLang();

  return (
    <>
      <p className="text-2xl text-center mb-5 mt-10">
        {lang.videoPage.videoSuggestTitle}
      </p>
      <ListClip />
    </>
  );
}
