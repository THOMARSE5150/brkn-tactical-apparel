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

  // Set page title and meta tags
  useEffect(() => {
    document.title = 'BRKN Tactical Hoodie OPS/01 | B///C1 Limited Drop';
    
    // Create or update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', 'Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, black-ops tonal branding, police-cut silhouette. Limited drop OPS/01.');
    updateMetaTag('keywords', 'BRKN, tactical hoodie, oversized hoodie, streetwear, black ops, B///C1, OPS/01');
    
    // Open Graph
    updateMetaTag('og:title', 'BRKN Tactical Hoodie OPS/01 | Limited Drop', true);
    updateMetaTag('og:description', 'Oversized tactical hoodie by BRKN // B///C1. Heavyweight fleece, police-cut silhouette. Impossible is just something you do.', true);
    updateMetaTag('og:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png', true);
    updateMetaTag('og:type', 'product', true);
    updateMetaTag('og:site_name', 'BRKN', true);
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'BRKN Tactical Hoodie OPS/01');
    updateMetaTag('twitter:description', 'Oversized tactical hoodie by BRKN // B///C1. Limited drop.');
    updateMetaTag('twitter:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png');

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

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdSchema);
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