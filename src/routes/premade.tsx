import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/service-layout";
import { serviceById } from "@/data/services";
import { GalleryGrid } from "@/components/site/gallery";

export const Route = createFileRoute("/premade")({
  component: Page,
  head: () => ({ meta: [{ title: "Premades — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("premade")!;
  return (
    <ServiceLayout
      service={s}
      image="/media/photos/buttery-soft.jpg"
      extra={
        <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-6">
          <h2 className="mb-6 font-display text-4xl">Vault teasers</h2>
          <GalleryGrid limit={9} />
        </section>
      }
    />
  );
}
