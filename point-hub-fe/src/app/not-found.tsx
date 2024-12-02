import { RootContext } from '@/contexts';
import GlobalNotfound from './_views/GlobalNotfound';
import { getDict } from './dictionaries';

export default async function Page() {
  const dict = await getDict('en');

  return (
    <RootContext dict={dict} locale={'en'}>
      <GlobalNotfound />
    </RootContext>
  );
}
