import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/service-layout";
import { serviceById } from "@/data/services";

export const Route = createFileRoute("/sessions/chat")({
  component: Page,
  head: () => ({ meta: [{ title: "Chat session — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("chat")!;
  return <ServiceLayout service={s} image="/media/photos/wednesday-owner.jpg" tag="night" />;
}
