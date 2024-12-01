import MainFooter from '../_views/MainFooter';
import MainHeader from '../_views/MainHeader';

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="dark:bg-bgDark bg-bgLight">{children}</main>
      <MainFooter />
    </>
  );
}
