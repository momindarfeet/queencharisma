import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/service-layout";
import { serviceById } from "@/data/services";

export const Route = createFileRoute("/sessions/audio")({
  component: Page,
  head: () => ({ meta: [{ title: "Audio call — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("audio")!;
  return <ServiceLayout service={s} image="/media/photos/video-call.jpg" tag="night" />;
}
