import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { AgeGate } from "@/components/site/age-gate";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { SiteCursor } from "@/components/site/site-cursor";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { WhatsAppDock } from "@/components/site/whatsapp-dock";
import { cn } from "@/lib/utils";

export function PageShell({
  theme = "night",
  children,
}: {
  theme?: "night" | "day";
  children: React.ReactNode;
}) {
  return (
    <div className={cn(theme === "night" ? "bg-ink text-bone" : "bg-paper text-ink")}>
      <SmoothScroll />
      <SiteCursor />
      <ScrollProgress />
      <AgeGate />
      <WhatsAppDock />
      <SiteNav />
      <main className="relative z-0">{children}</main>
      <SiteFooter />
    </div>
  );
}
