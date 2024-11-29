"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

interface Props {
  m3u8Url: string;
}
export default ({ m3u8Url }: Props) => {
  const hls = useRef<Hls | null>(null);

  const loadStream = () => {
    const video = document.querySelector("#player") as HTMLMediaElement;

    try {
      // Dispose previous HLS instance if exists
      if (hls.current) {
        hls.current.destroy();
        hls.current = null;
      }

      if (Hls.isSupported()) {
        hls.current = new Hls();
        hls.current.loadSource(m3u8Url);
        hls.current.attachMedia(video);
        hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
        hls.current.on(Hls.Events.ERROR, (event, data) => {
          console.error("HLS.js error:", data);
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        console.info("Native HLS support detected");
        video.src = m3u8Url;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      } else {
        console.warn("HLS is not supported in your browser.");
      }
    } catch (err) {
      console.error("HlsJS something went wrong!!!", err);
    }
  };

  useEffect(() => {
    loadStream();
  }, []);

  return (
    <video
      className="w-full"
      id="player"
      preload="none"
      controls
      autoPlay
      crossOrigin=""
    ></video>
  );
};
