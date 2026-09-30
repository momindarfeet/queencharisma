import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/service-layout";
import { serviceById } from "@/data/services";

export const Route = createFileRoute("/customs")({
  component: Page,
  head: () => ({ meta: [{ title: "Customs — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("customs")!;
  return <ServiceLayout service={s} image="/media/photos/naughtiest-customs.jpg" tag="toes" />;
}
