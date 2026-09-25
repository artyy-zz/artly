"use client";
import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { MotionConfig } from "framer-motion";
import type { Copy, Locale } from "@/lib/content";
type Context = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: string;
  toggleTheme: () => void;
  t: (copy: Copy) => string;
};
const SiteContext = createContext<Context | null>(null);
const fallback: Record<string, string> = {};
function read(key: string, defaultValue: string) {
  try {
    return localStorage.getItem(key) ?? fallback[key] ?? defaultValue;
  } catch {
    return fallback[key] ?? defaultValue;
  }
}
function write(key: string, value: string) {
  fallback[key] = value;
  try {
    localStorage.setItem(key, value);
  } catch {}
  window.dispatchEvent(new Event("artly-preferences"));
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("artly-preferences", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("artly-preferences", callback);
  };
}
const localeSnapshot = (): Locale =>
  read("artly-locale", "sq") === "en" ? "en" : "sq";
const themeSnapshot = () =>
  read("artly-theme", "dark") === "light" ? "light" : "dark";
export function Providers({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    localeSnapshot,
    () => "sq" as Locale,
  );
  const theme = useSyncExternalStore(subscribe, themeSnapshot, () => "dark");
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
  }, [locale, theme]);
  return (
    <SiteContext.Provider
      value={{
        locale,
        setLocale: (value) => write("artly-locale", value),
        theme,
        toggleTheme: () =>
          write("artly-theme", theme === "dark" ? "light" : "dark"),
        t: (copy) => copy[locale],
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </SiteContext.Provider>
  );
}
export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("Site provider required");
  return context;
}
