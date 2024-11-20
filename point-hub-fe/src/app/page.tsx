import MainFooter from "@/app/_views/MainFooter";
import MainHeader from "@/app/_views/MainHeader";
import ListClip from "./_views/ListClip";

export default function Page() {
  return (
    <>
      <MainHeader />
      <section className="md:py-20 py-10 dark:bg-bgDark bg-bgLight">
        <div className="md:container md:mx-auto px-[20px]">
          <ListClip />
        </div>
      </section>
      <MainFooter />
    </>
  );
}
