import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import ProductGallery from '@/components/landing/ProductGallery';
import PhilosophySection from '@/components/landing/PhilosophySection';
import SizingTable from '@/components/landing/SizingTable';
import PurchaseModule from '@/components/landing/PurchaseModule';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "BRKN Tactical Hoodie (OPS/01)",
    "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png",
    "description": "Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, black-ops tonal branding, police-cut silhouette.",
    "sku": "OPS01-HOODIE",
    "brand": {
      "@type": "Brand",
      "name": "BRKN"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD",
      "price": "XX.00",
      "availability": "https://schema.org/PreOrder",
      "url": "https://yourdomain.com/ops01"
    }
  };

  return (
    <>
      <Helmet>
        <title>BRKN Tactical Hoodie OPS/01 | B///C1 Limited Drop</title>
        <meta name="description" content="Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, black-ops tonal branding, police-cut silhouette. Limited drop OPS/01." />
        <meta name="keywords" content="BRKN, tactical hoodie, oversized hoodie, streetwear, black ops, B///C1, OPS/01" />
        <link rel="canonical" href="https://yourdomain.com/ops01" />
        
        {/* Open Graph */}
        <meta property="og:title" content="BRKN Tactical Hoodie OPS/01 | Limited Drop" />
        <meta property="og:description" content="Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, police-cut silhouette. Impossible is just something you do." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png" />
        <meta property="og:url" content="https://yourdomain.com/ops01" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="BRKN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BRKN Tactical Hoodie OPS/01" />
        <meta name="twitter:description" content="Oversized tactical hoodie by BRKN // B///C1. Limited drop." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png" />

        {/* JSON-LD Schema */}
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
        <SizingTable />
        <PurchaseModule />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}