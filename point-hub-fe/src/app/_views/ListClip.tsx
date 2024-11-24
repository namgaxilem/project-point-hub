"use client";

import { useLang } from "@/contexts";
import { Pagination as PaginationType } from "@/types/Pagination";
import { Video } from "@/types/Video";
import { Pagination } from "@nextui-org/react";
import Link from "next/link";
import PaginationItem from "./PaginationItem";
import EmptyVideos from "./EmptyVideos";

interface Props {
  videos?: Video[];
  pagination?: PaginationType;
}
export default function ListClip({ videos, pagination }: Props) {
  const { lang } = useLang();

  if (!videos || videos.length <= 0) {
    return <EmptyVideos />;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-xl:gap-4 gap-6 py-[20px]">
        {videos?.map((video) => (
          <Link
            key={video.documentId}
            href={`/watch/${video.documentId}`}
            className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight overflow-hidden"
          >
            <img
              src={video.thumbnail_url}
              alt={video.title}
              className="w-full aspect-square rounded object-cover"
            />
            <div className="mt-1">
              <h6 className="font-semibold text-lg leading-8 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
                {video.title}
              </h6>
              <p className="font-normal text-xs text-gray-500">
                {video.view_count || 0} {lang.videoPage.viewCount}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Pagination
          isCompact
          showControls={false}
          total={pagination?.pagination?.total || 0}
          page={pagination?.pagination?.page}
          initialPage={1}
          renderItem={PaginationItem}
        />
      </div>
    </>
  );
}
