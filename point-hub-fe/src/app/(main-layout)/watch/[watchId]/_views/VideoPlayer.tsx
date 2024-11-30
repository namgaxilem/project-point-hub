"use client";

import { Video } from "@/types/Video";
import { Chip } from "@nextui-org/react";
import React from "react";
import HlsJS from "./HlsJS";
import { formatNumberThousandDeliminator } from "@/lib/format-utils";
import { useLang } from "@/contexts";
import Link from "next/link";

interface Props {
  video?: Video;
}
export default function VideoPlayer({ video }: Props) {
  const { lang } = useLang();

  if (!video) {
    return <>Cant play right now</>;
  }

  return (
    <div className="flex flex-wrap flex-col justify-between items-start mx-auto max-w-screen-xl px-[16px] md:p-0">
      <div className="flex items-center gap-2 mt-4">
        {video.categories.map((cate) => (
          <Chip
            color="danger"
            key={cate.category_name}
            className="rounded"
            size="sm"
          >
            <Link href={`/categories/${cate.documentId}`}>
              {cate.category_name}
            </Link>
          </Chip>
        ))}
      </div>
      <h1 className="text-2xl mt-5 flex items-center">
        {video.title}
        <Chip className="rounded ml-3" size="sm">
          {formatNumberThousandDeliminator(video.view_count)}{" "}
          {lang.videoPage.viewCount}
        </Chip>
      </h1>
      <div className="flex items-center gap-2 mt-4">
        {video.tags.map((tag) => (
          <Chip key={tag.tag_name} className="rounded" size="sm">
            {tag.tag_name}
          </Chip>
        ))}
      </div>
      <div>
        <p className="text-base text-[#9e9e9e] mt-3">{video.description}</p>
      </div>

      <section className="w-full mt-3">
        <HlsJS m3u8Url={video.source_video_url} />
      </section>

      {video.actors?.length > 0 && (
        <div className="flex items-center gap-2 mt-4">
          {lang.videoPage.actors}:{" "}
          {video.actors.map((e) => (
            <Chip key={e.actor_name} className="rounded" size="sm">
              {e.actor_name}
            </Chip>
          ))}
        </div>
      )}
    </div>
  );
}
