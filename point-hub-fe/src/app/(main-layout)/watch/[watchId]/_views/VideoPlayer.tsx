"use client";

import { Chip } from "@nextui-org/react";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import React from "react";

export default function VideoPlayer() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="grow">
      {/* <div className="flex items-center gap-1 flex-wrap"> */}
      <h1 className="text-2xl mt-5">
        Ưng Hoàng Phúc - Những Bản Hits 8X9X Được Khán Giả Yêu Thích Nhất{" "}
        <Chip className="rounded">6 min</Chip>
      </h1>
      {/* </div> */}
      <div className="flex items-center gap-2 mt-4">
        <Chip className="rounded" size="sm">
          latina
        </Chip>
        <Chip className="rounded" size="sm">
          blowjob
        </Chip>
        <Chip className="rounded" size="sm">
          hottit
        </Chip>
        <Chip className="rounded" size="sm">
          big boob
        </Chip>
      </div>

      <section>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </section>
    </div>
  );
}
