'use client';

import { useLang } from '@/contexts';

export default () => {
  const { lang } = useLang();
  return <p className="text-center">{lang.videoPage.noSuggestVideo}</p>;
};
