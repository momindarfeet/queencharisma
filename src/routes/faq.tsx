import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { FAQS } from "@/data/court";

export const Route = createFileRoute("/faq")({
  component: Page,
  head: () => ({ meta: [{ title: "FAQ — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Before you waste a message"
        title="FAQ"
        dek="If your question isn’t here, the answer is tribute first."
      />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
        <div className="space-y-10">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-line pb-10">
              <h2 className="font-display text-3xl">{f.q}</h2>
              <p className="mt-4 text-base leading-relaxed text-bone/75">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
