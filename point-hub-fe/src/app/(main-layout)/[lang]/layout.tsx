import { getDict } from '@/app/dictionaries';
import { RootContext } from '@/contexts';
import MainFooter from '../../_views/MainFooter';
import MainHeader from '../../_views/MainHeader';
import { Metadata } from 'next';
import { SITE_DOMAIN, SITE_NAME } from '@/config';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDict(lang);

  const title = `${dict.SEO.title} | ${SITE_NAME}`;
  const description = dict.SEO.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `https://${SITE_DOMAIN}/${lang}/`,
      images: [
        {
          url: '/assets/images/main_logo.png',
          secureUrl: '/assets/images/main_logo.png',
        },
      ],
    },
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{
    lang?: string;
  }>;
}
export default async function Layout({ children, params }: Readonly<Props>) {
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
