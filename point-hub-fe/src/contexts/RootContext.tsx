"use client";

import { NextUIProvider } from "@nextui-org/react";
import LangProvider from "./LangContext";

export function RootContext({ children, dict, locale }) {
  return (
    <NextUIProvider>
      <LangProvider dict={dict} locale={locale}>
        {children}
      </LangProvider>
    </NextUIProvider>
  );
}
