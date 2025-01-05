import { getDict } from '@/app/dictionaries';
import { RootContext } from '@/contexts';
import MainFooter from '../../_views/MainFooter';
import MainHeader from '../../_views/MainHeader';
import { Metadata } from 'next';
import { SITE_DOMAIN, SITE_NAME } from '@/config';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDict(lang);
  const { SEO } = dict;

  const title = `${dict.SEO.title} | ${SITE_NAME}`;
  const description = dict.SEO.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: SEO.title,
      description: SEO.description,
      type: SEO.meta["og:type"] || 'website',
      url: SEO.meta.canonical || `https://www.example.com/${lang}/`, 
      siteName: SEO.meta["og:site_name"] || SITE_NAME,
      images: [
        {
          url: SEO.meta["og:image"] || '/assets/images/default_og_image.png',
          secureUrl: SEO.meta["og:image"] || '/assets/images/default_og_image.png',
        },
      ],
    },
     // Canonical URL (metadataBase)
     metadataBase: new URL(SEO.meta.canonical || `https://${SITE_DOMAIN}/${lang}/`),
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
