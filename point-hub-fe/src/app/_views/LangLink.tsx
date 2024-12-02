'use client';

import { useLang } from '@/contexts';
import Link from 'next/link';

interface Props {
  href: string;
  className?: string;
  key?: React.Key;
  children?: React.ReactNode;
  onClick?: (e) => void;
}
export default ({ href, className, children, onClick }: Props) => {
  const { locale } = useLang();
  return (
    <Link href={`/${locale}${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};
