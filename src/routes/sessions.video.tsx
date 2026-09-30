import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/service-layout";
import { serviceById } from "@/data/services";

export const Route = createFileRoute("/sessions/video")({
  component: Page,
  head: () => ({ meta: [{ title: "Video call — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("video")!;
  return <ServiceLayout service={s} image="/media/photos/sole-blessing.jpg" tag="soles" />;
}
