import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CapabilitiesStrip } from "@/components/sections/HomeSections";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: siteConfig.url ? { canonical: "/" } : undefined,
};

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitiesStrip />
      <ProductExplorer />
      <ServicesPreview />
      <ProcessSection />
      <AboutTeaser />
      <ContactSection />
    </>
  );
}
