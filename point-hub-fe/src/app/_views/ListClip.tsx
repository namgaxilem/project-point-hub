'use client';

import { useLang } from '@/contexts';
import { Pagination as PaginationType } from '@/types/Pagination';
import { Video } from '@/types/Video';
import { Pagination } from '@nextui-org/react';
import EmptyVideos from './EmptyVideos';
import LangLink from './LangLink';
import PaginationItem from './PaginationItem';
import { formatNumberThousandDeliminator } from '@/lib/format-utils';

interface Props {
  videos?: Video[];
  pagination?: PaginationType;
}
export default function ListClip({ videos, pagination }: Readonly<Props>) {
  const { lang } = useLang();

  if (!videos || videos.length <= 0) {
    return <EmptyVideos />;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-xl:gap-4 gap-6 py-[20px]">
        {videos?.map((video) => (
          <LangLink
            key={video.documentId}
            href={`/watches/${video.documentId}`}
            className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight overflow-hidden w-full"
          >
            <img
              src={video.thumbnail_url}
              alt={video.title}
              className="w-full aspect-square rounded object-cover"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = '/assets/images/main_logo.png';
              }}
            />
            <div className="mt-1">
              <h6 className="font-semibold text-base md:text-lg leading-4 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
                {video.title}
              </h6>
              <p className="font-normal text-xs text-gray-500 mt-1">
                {formatNumberThousandDeliminator(
                  Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
                )}{' '}
                {lang.videoPage.viewCount}
              </p>
            </div>
          </LangLink>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Pagination
          isCompact
          showControls={false}
          total={pagination?.pagination?.pageCount ?? 0}
          page={pagination?.pagination?.page ?? 1}
          initialPage={1}
          renderItem={PaginationItem}
        />
      </div>
    </>
  );
}
