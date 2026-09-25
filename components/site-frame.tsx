"use client";
import { usePathname } from "next/navigation";
import { Header, Footer, AssistantButton } from "./shell";
export function SiteFrame({ children }: { children: React.ReactNode }) {
  const showcase = usePathname().startsWith("/showcase/");
  if (showcase)
    return (
      <main id="main" className="showcase-route">
        {children}
      </main>
    );
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <AssistantButton />
    </>
  );
}
