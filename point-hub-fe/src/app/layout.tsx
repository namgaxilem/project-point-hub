import { RootContext } from '@/contexts';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { getLanguage, getLocale } from './dictionaries';
import { SITE_NAME } from '@/config';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Free adult videos for everyone`,
  description: 'Free adult/porn videos to watch for completely free! Just watch and enjoy!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getLanguage();
  const locale = await getLocale();

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:ndo-border-dark relative text-base text-gray-900 dark:bg-black dark:text-white`}
      >
        <RootContext dict={dict} locale={locale}>
          {children}
        </RootContext>
      </body>
    </html>
  );
}
