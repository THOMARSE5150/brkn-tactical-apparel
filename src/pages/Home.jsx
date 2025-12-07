import React, { useEffect } from 'react';
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

  // Set document title and inject SEO meta tags
  useEffect(() => {
    document.title = "BRKN Tactical Hoodie OPS/01 | B///C1 Limited Drop";
    
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

    // Inject JSON-LD
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLdSchema);
    document.head.appendChild(script);

    // Meta tags
    const metaTags = [
      { name: 'description', content: 'Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, black-ops tonal branding, police-cut silhouette. Limited drop OPS/01.' },
      { name: 'keywords', content: 'BRKN, tactical hoodie, oversized hoodie, streetwear, black ops, B///C1, OPS/01' },
      { property: 'og:title', content: 'BRKN Tactical Hoodie OPS/01 | Limited Drop' },
      { property: 'og:description', content: 'Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, police-cut silhouette. Impossible is just something you do.' },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png' },
      { property: 'og:url', content: 'https://yourdomain.com/ops01' },
      { property: 'og:type', content: 'product' },
      { property: 'og:site_name', content: 'BRKN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'BRKN Tactical Hoodie OPS/01' },
      { name: 'twitter:description', content: 'Oversized tactical hoodie by BRKN // B///C1. Limited drop.' },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png' },
    ];

    metaTags.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.name) meta.setAttribute('name', tag.name);
        if (tag.property) meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://yourdomain.com/ops01');

    return () => {
      const injectedScript = document.querySelector('script[type="application/ld+json"]');
      if (injectedScript) injectedScript.remove();
    };
  }, []);

  return (
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
  );
}