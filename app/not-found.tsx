"use client";
import { useSite } from "@/components/providers";
import { c } from "@/lib/content";
import { Button } from "@/components/ui";
export default function NotFound() {
  const { t } = useSite();
  return (
    <section className="page-intro container not-found">
      <div className="eyebrow">404 / ARTLY</div>
      <h1>
        {t(c("Kjo ide ende", "This idea doesn’t"))}
        <br />
        <span>{t(c("nuk ekziston.", "exist yet."))}</span>
      </h1>
      <p>
        {t(
          c(
            "Faqja që kërkon nuk u gjet.",
            "The page you’re looking for could not be found.",
          ),
        )}
      </p>
      <Button href="/">{t(c("Kthehu në ballinë", "Back to home"))}</Button>
    </section>
  );
}
