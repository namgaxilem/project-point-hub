import { Locale } from "./Locale";

export interface Video {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;
}
