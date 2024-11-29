"use client";

import { Video } from "@/types/Video";
import { Chip } from "@nextui-org/react";
import React from "react";
import HlsJS from "./HlsJS";

interface Props {
  video?: Video;
}
export default function VideoPlayer({ video }: Props) {
  if (!video) {
    return <>deo xem duoc</>;
  }

  return (
    <div className="flex flex-wrap flex-col justify-between items-start mx-auto max-w-screen-xl px-[16px] md:p-0">
      <h1 className="text-2xl mt-5 flex items-center">
        {video.title}
        <Chip className="rounded ml-3" size="sm">
          6 min
        </Chip>
      </h1>
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

      <section className="w-full mt-3">
        <HlsJS m3u8Url={video.source_video_url} />
      </section>
    </div>
  );
}
