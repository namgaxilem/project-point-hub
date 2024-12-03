'use client';

import { useLang } from '@/contexts';

export default () => {
  const { lang } = useLang();
  return (
    <p className="flex items-center justify-center h-[60vh]">{lang.videoPage.noVideoFound}</p>
  );
};
