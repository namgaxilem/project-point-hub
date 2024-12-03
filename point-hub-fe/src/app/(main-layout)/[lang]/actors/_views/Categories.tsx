'use client';

import CategoryItem from '@/app/_views/CategoryItem';
import { useLang } from '@/contexts';
import { SearchIcon } from '@/icons/SearchIcon';
import { Category } from '@/types/Category';
import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';

interface Props {
  categories?: Category[];
}
export default ({ categories }: Props) => {
  const { lang } = useLang();
  const [localCategories, setLocalCategories] = useState<Category[]>();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (searchInput) {
      setLocalCategories(
        categories?.filter((e) => e.category_name.toLocaleLowerCase().includes(searchInput))
      );
    } else {
      setLocalCategories(categories);
    }
  }, [categories, searchInput]);

  const onSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="container mx-auto mb-20 pt-5 md:pt-10 px-[20px] md:px-0">
      <h1 className="text-2xl font-bold mb-5">All categories</h1>

      <div>
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl',
              'bg-default-200/50',
              'dark:bg-default/60',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-default-200/70',
              'dark:hover:bg-default/70',
              'group-data-[focus=true]:bg-default-200/50',
              'dark:group-data-[focus=true]:bg-default/60',
              '!cursor-text',
            ],
          }}
          placeholder={lang.categoryPage.searchCategoryHolder}
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          onChange={onSearch}
        />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-xl:gap-4 gap-6 py-[20px]">
        {localCategories?.map((cate) => (
          <li key={cate.documentId}>
            <CategoryItem category={cate} />
          </li>
        ))}
      </ul>

      <br />
    </div>
  );
};
