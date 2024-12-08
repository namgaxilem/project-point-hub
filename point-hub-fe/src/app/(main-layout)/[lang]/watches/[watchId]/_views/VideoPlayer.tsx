'use client';

import LangLink from '@/app/_views/LangLink';
import { useLang } from '@/contexts';
import { Video } from '@/types/Video';
import { Chip } from '@nextui-org/react';
import HlsJS from './HlsJS';

interface Props {
  video: Video;
}
export default function VideoPlayer({ video }: Props) {
  const { lang } = useLang();

  return (
    <div className="flex flex-wrap flex-col justify-between items-start mx-auto max-w-screen-xl px-[16px]">
      <div className="flex items-center gap-2 mt-4">
        {video.categories.map((cate) => (
          <Chip color="danger" key={cate.category_name} className="rounded" size="sm">
            <LangLink href={`/categories/${cate.documentId}`}>{cate.category_name}</LangLink>
          </Chip>
        ))}
      </div>
      <h1 className="text-2xl mt-5 flex items-center">
        {video.title}
        {/* <Chip className="rounded ml-3" size="sm">
          {formatNumberThousandDeliminator(video.view_count)} {lang.videoPage.viewCount}
        </Chip> */}
      </h1>
      <div className="flex items-center gap-2 mt-4 flex-wrap w-full overflow-hidden">
        {video.tags.map((tag) => (
          <Chip key={tag.tag_name} className="rounded" size="sm">
            <LangLink href={`/tags/${tag.documentId}`} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-3"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clipRule="evenodd"
                />
              </svg>

              <span> {tag.tag_name}</span>
            </LangLink>
          </Chip>
        ))}
      </div>
      <div>
        <p className="text-base text-[#9e9e9e] mt-3">{video.description}</p>
      </div>

      <section className="w-full mt-3">
        <HlsJS m3u8Url={video.source_video_url} thumbnailUrl={video.thumbnail_url} />
      </section>

      {video.actors?.length > 0 && (
        <div className="flex items-center gap-2 mt-4 flex-wrap w-full overflow-hidden">
          <span className="text-sm md:text-base">{lang.videoPage.actors}:</span>{' '}
          {video.actors.map((e) => (
            <Chip
              key={e.actor_name}
              className="rounded text-sm md:text-base"
              color="warning"
              size="sm"
            >
              <LangLink href={`/actors/${e.documentId}`}>{e.actor_name}</LangLink>
            </Chip>
          ))}
        </div>
      )}
    </div>
  );
}
