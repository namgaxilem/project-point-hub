import { getDict } from '@/app/dictionaries';
import { RootContext } from '@/contexts';
import MainFooter from '../../_views/MainFooter';
import MainHeader from '../../_views/MainHeader';

interface Props {
  children: React.ReactNode;
  params: Promise<{
    lang?: string;
  }>;
}
export default async function Layout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDict(lang);

  return (
    <RootContext dict={dict} locale={lang}>
      <MainHeader />
      <main className="dark:bg-bgDark bg-bgLight">{children}</main>
      <MainFooter />
    </RootContext>
  );
}
