import MainFooter from "@/app/_views/MainFooter";
import MainHeader from "@/app/_views/MainHeader";
import ListClip from "./_views/ListClip";

export default function Page() {
  return (
    <>
      <MainHeader />
      <section className="md:py-24 py-12 dark:bg-bgDark bg-bgLight">
        <div className="">
          <ListClip />
        </div>
      </section>
      <MainFooter />
    </>
  );
}
