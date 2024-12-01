import { SITE_NAME } from '@/config';
import Image from 'next/image';

const Logo = () => {
  return (
    <span
      className={`inline-flex items-center text-slate-950 dark:text-slate-300 font-semibold xl:text-xl md:text-xl text-base gap-1 max-h-full`}
    >
      <Image
        src={'/assets/images/main_logo.png'}
        width={90}
        height={90}
        alt="Logo"
        className="max-h-full md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
      />
      {SITE_NAME}
    </span>
  );
};

export { Logo };
