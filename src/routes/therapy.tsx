import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/service-layout";
import { serviceById } from "@/data/services";

export const Route = createFileRoute("/therapy")({
  component: Page,
  head: () => ({ meta: [{ title: "Therapy / JOI — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("therapy")!;
  return <ServiceLayout service={s} image="/media/photos/happy-sunday.jpg" tag="soles" />;
}
