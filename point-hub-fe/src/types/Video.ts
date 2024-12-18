import { Actor } from './Actor';
import { Category } from './Category';
import { Locale } from './Locale';
import { Tag } from './Tag';

export interface Video {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;

  view_count: number;
  view_visit: number;
  dislike_count: number;
  like_count: number;
  source_video_url: string;
  thumbnail_url: string;

  tags: Tag[];
  categories: Category[];
  actors: Actor[];
}
