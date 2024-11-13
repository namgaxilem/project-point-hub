import MainFooter from "@/app/_views/MainFooter";
import MainHeader from "@/app/_views/MainHeader";
import ListClip from "./_views/ListClip";

export default function Page() {
  return (
    <>
      <MainHeader />
      <section className="py-24  dark:bg-bgDark bg-bgLight">
        <div className="mx-auto px-4">
          <ListClip />
        </div>
      </section>
      <MainFooter />
    </>
  );
}
