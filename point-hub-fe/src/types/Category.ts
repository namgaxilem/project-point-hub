import { Locale } from './Locale';

export interface Category {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;
  category_name: string;
  thumbnail_url: string | null;
  videos: {
    count: number;
  };
}
