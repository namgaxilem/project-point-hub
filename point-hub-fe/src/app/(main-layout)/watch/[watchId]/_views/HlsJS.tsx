"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

const PLAYER_ID = "HLSPLAYER";

interface Props {
  m3u8Url: string;
  thumbnailUrl: string;
}
export default ({ m3u8Url, thumbnailUrl }: Props) => {
  const hls = useRef<Hls | null>(null);

  const loadStream = () => {
    const video = document.querySelector(`#${PLAYER_ID}`) as HTMLVideoElement;

    try {
      if (hls.current) {
        hls.current.destroy();
        hls.current = null;
      }

      if (Hls.isSupported()) {
        hls.current = new Hls();
        hls.current.loadSource(m3u8Url);
        hls.current.attachMedia(video);
        hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
          console.info("Hls.Events.MANIFEST_PARSED");
          // video.play();
        });
        hls.current.on(Hls.Events.ERROR, (event, data) => {
          console.error("Hls.Events.ERROR", data);
          video.src = "";
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        console.info("Native HLS support detected");
        video.src = m3u8Url;
        video.addEventListener("loadedmetadata", () => {
          // video.play();
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
      id={PLAYER_ID}
      className="w-full"
      preload="none"
      controls
      autoPlay={false}
      crossOrigin="anonymous"
      poster={thumbnailUrl}
      muted
    />
  );
};
