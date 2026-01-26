import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import HeroSection from '@/components/landing/HeroSection';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import ProductGallery from '@/components/landing/ProductGallery';
import PhilosophySection from '@/components/landing/PhilosophySection';
import SizingTable from '@/components/landing/SizingTable';
import PurchaseModule from '@/components/landing/PurchaseModule';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';
import AgentChat from '@/components/landing/AgentChat';
import { OPS01 } from "@/components/landing/ops01Config";

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const siteOrigin = typeof window !== "undefined" ? window.location.origin : "https://YOURDOMAIN.com";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "BRKN OPS/01 Oversize Hoodie",
    "brand": { "@type": "Brand", "name": "BRKN" },
    "description": "OPS/01 by BRKN. Oversize fleeced hoodie engineered for daily wear. Limited drop.",
    "image": ["https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/a9d6542d8_OversizeFleecedHoodie-gallery-1.png"],
    "offers": {
      "@type": "Offer",
      "url": siteOrigin + "/",
      "priceCurrency": "USD",
      "price": "75.00",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>BRKN — OPS/01 Oversize Hoodie</title>
        <meta name="description" content="OPS/01 by BRKN. Oversize fleeced hoodie engineered for daily wear. Limited drop. Move forward anyway." />
        <link rel="canonical" href={siteOrigin + "/"} />
        
        <meta property="og:type" content="product" />
        <meta property="og:title" content="BRKN — OPS/01 Oversize Hoodie" />
        <meta property="og:description" content="OPS/01 by BRKN. Oversize fleeced hoodie engineered for daily wear. Limited drop." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/a9d6542d8_OversizeFleecedHoodie-gallery-1.png" />
        <meta property="og:url" content={siteOrigin + "/"} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BRKN — OPS/01 Oversize Hoodie" />
        <meta name="twitter:description" content="OPS/01 by BRKN. Oversize fleeced hoodie engineered for daily wear. Limited drop." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/a9d6542d8_OversizeFleecedHoodie-gallery-1.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A]">
        <HeroSection 
          onViewDetails={() => scrollToSection('purchase')}
          onAddToCart={() => scrollToSection('purchase')}
        />
        <FeaturesGrid />
        <ProductGallery />
        <PhilosophySection />
        <div id="sizing">
          <SizingTable />
        </div>
        <PurchaseModule />
        <FAQSection />
        <Footer />
        <AgentChat />
      </div>
    </>
  );
}