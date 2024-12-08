'use client';

import LangLink from '@/app/_views/LangLink';
import { useLang } from '@/contexts';
import { formatNumberThousandDeliminator } from '@/lib/format-utils';
import { useVideosSuggestion } from '@/query-client/video';
import { Pagination as PaginationType } from '@/types/Pagination';
import { Video } from '@/types/Video';
import { Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';

interface Props {
  video?: Video;
}
export default function VideoSuggestion({ video }: Readonly<Props>) {
  const { lang, locale } = useLang();
  const [suggestVideos, setSuggestVideos] = useState<Video[]>();
  const [pagination, setPagination] = useState<PaginationType | undefined>({
    pagination: {
      page: 1,
      pageSize: 15,
      total: 0,
    },
  });
  const { data, refetch } = useVideosSuggestion(
    pagination?.pagination?.page ?? 1,
    pagination?.pagination?.pageSize ?? 15,
    video?.documentId ?? '',
    locale,
    {
      categories: video?.categories,
      tags: video?.tags,
      actors: video?.actors,
    }
  );

  useEffect(() => {
    setSuggestVideos(data?.data);
    setPagination(data?.meta);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [pagination?.pagination?.page]);

  return (
    <div className="flex flex-wrap flex-col justify-between items-center mx-auto max-w-screen-xl px-[16px] md:p-0">
      <p className="text-2xl text-center mb-5 mt-10">{lang.videoPage.videoSuggestTitle}</p>

      {(!suggestVideos || suggestVideos.length <= 0) && (
        <p className="text-center">{lang.videoPage.noSuggestVideo}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-xl:gap-4 gap-6 py-[20px]">
        {suggestVideos?.map((video) => (
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
              <h6 className="font-semibold text-base md:text-lg leading-8 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
                {video.title}
              </h6>
              <p className="font-normal text-xs text-gray-500">
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
          onChange={(page) => {
            setPagination({
              ...pagination,
              pagination: { ...pagination?.pagination, page },
            });
          }}
          isCompact
          showControls
          total={pagination?.pagination?.pageCount ?? 0}
          page={pagination?.pagination?.page ?? 1}
          initialPage={1}
          color="warning"
        />
      </div>
    </div>
  );
}
