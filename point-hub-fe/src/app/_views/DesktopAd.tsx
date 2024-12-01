import Link from 'next/link';

export default function DesktopAd() {
  return (
    <div className="md:flex flex-col hidden">
      <p className="mt-5 mb-5">Quang cao desktop</p>
      <Link href={`/ad`} className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight">
        <img
          src="asd"
          alt="face cream"
          className="w-full max-w-[270px] mx-1 aspect-square rounded object-cover"
        />
        <div className="mt-1">
          <h6 className="font-semibold text-lg leading-8 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
            Face cream
          </h6>
          <p className="font-normal text-xs text-gray-500">Orange & Aloe Vera</p>
        </div>
      </Link>
      <Link href={`/ad`} className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight">
        <img
          src="asd"
          alt="face cream"
          className="w-full max-w-[270px] mx-1 aspect-square rounded object-cover"
        />
        <div className="mt-1">
          <h6 className="font-semibold text-lg leading-8 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
            Face cream
          </h6>
          <p className="font-normal text-xs text-gray-500">Orange & Aloe Vera</p>
        </div>
      </Link>
    </div>
  );
}
