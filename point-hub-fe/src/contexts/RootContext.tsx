'use client';

import { NextUIProvider } from '@nextui-org/react';
import LangProvider from './LangContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export function RootContext({ children, dict, locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <LangProvider dict={dict} locale={locale}>
          {children}
        </LangProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
