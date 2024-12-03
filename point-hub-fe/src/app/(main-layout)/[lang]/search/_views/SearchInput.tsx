'use client';

import { useLang } from '@/contexts';
import { SearchIcon } from '@/icons/SearchIcon';
import { Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default ({ keyword }) => {
  const { lang, locale } = useLang();
  const [searchInput, setSearchInput] = useState(keyword);
  const router = useRouter();

  const onSearchSubmit = (e?: any) => {
    e?.preventDefault();
    if (searchInput) {
      router.push(`/${locale}/search?keyword=${searchInput}`);
    }
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <Input
        size={'sm'}
        type="text"
        placeholder={lang.header.searchHolder}
        startContent={
          <SearchIcon
            onClick={() => onSearchSubmit()}
            className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
          />
        }
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};
