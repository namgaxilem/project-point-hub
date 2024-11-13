import Link from "next/link";

export default function ListClip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 100 }, (_, index) => (
        <Link
          key={index}
          href="javascript:;"
          className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto dark:bg-bgDark bg-bgLight transition-all duration-500"
        >
          <div className="">
            <img
              src="https://pagedone.io/asset/uploads/1700726158.png"
              alt="face cream"
              className="w-full aspect-square rounded-2xl object-cover"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <h6 className="font-semibold text-xl leading-8 text-black dark:text-textDark transition-all duration-500 group-hover:text-indigo-600">
                Face cream
              </h6>
            </div>
            <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
              Orange & Aloe Vera
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
