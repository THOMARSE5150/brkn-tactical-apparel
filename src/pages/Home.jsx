import React, { useEffect } from "react";
import { OPS01 } from "@/components/landing/ops01Config";
import { Helmet } from "react-helmet";

function Button({ href, children, variant = "primary" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-90 focus:ring-white"
      : variant === "secondary"
      ? "bg-[#1A1A1A] text-white border border-[#3A3A3A] hover:bg-[#2A2A2A] focus:ring-[#3A3A3A]"
      : "bg-transparent text-white underline underline-offset-4 hover:opacity-80 focus:ring-white";
  return (
    <a 
      className={`${base} ${styles}`} 
      href={href} 
      target={href?.startsWith("http") ? "_blank" : undefined} 
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function Card({ title, body }) {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111]/40 p-5 shadow-sm backdrop-blur">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-[#AAAAAA]">{body}</div>
    </div>
  );
}

export default function Home() {
  const buyUrl = OPS01.tapstitchUrl;
  const siteOrigin = typeof window !== "undefined" ? window.location.origin : "https://YOURDOMAIN.com";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "BRKN OPS/01 Oversize Hoodie",
    "brand": { "@type": "Brand", "name": "BRKN" },
    "description": "OPS/01 by BRKN. Oversize fleeced hoodie engineered for daily wear. Limited drop.",
    "image": [siteOrigin + "/images/ops01-hero.jpg"],
    "offers": {
      "@type": "Offer",
      "url": siteOrigin + "/",
      "priceCurrency": OPS01.currency,
      "price": OPS01.price || "88.00",
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
        <meta property="og:image" content={OPS01.images.og} />
        <meta property="og:url" content={siteOrigin + "/"} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BRKN — OPS/01 Oversize Hoodie" />
        <meta name="twitter:description" content="OPS/01 by BRKN. Oversize fleeced hoodie engineered for daily wear. Limited drop." />
        <meta name="twitter:image" content={OPS01.images.og} />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <header className="mx-auto max-w-6xl px-6 pt-10">
          <div className="flex items-center justify-between">
            <div className="text-sm tracking-[0.2em] uppercase text-[#6C7A6F]">{OPS01.brand}</div>
            <div className="text-xs text-[#6A6A6A]">{OPS01.code}</div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-20">
          {/* HERO */}
          <section className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
                {OPS01.code} <span className="text-[#6A6A6A]">—</span> {OPS01.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#AAAAAA]">{OPS01.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={buyUrl} variant="primary">Buy OPS/01</Button>
                <Button href="#sizing" variant="secondary">View Size Guide</Button>
              </div>

              <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#111]/20 p-5">
                <div className="text-sm font-semibold">{OPS01.doctrine}</div>
                <div className="mt-1 text-sm text-[#AAAAAA]">{OPS01.subDoctrine}</div>
              </div>

              {/* Price + Why it costs */}
              <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-6">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-white">${OPS01.price}</span>
                  <span className="text-[#6A6A6A] text-sm">{OPS01.currency}</span>
                </div>

                <h4 className="text-[#E6E6E6] text-sm font-mono tracking-wider uppercase mb-4">
                  Why it costs what it costs
                </h4>
                <ul className="space-y-2.5 text-[#BBBBBB] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Heavyweight fabric, built to last</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Small-batch production, not mass volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Intentional design, no excess branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Fair pricing — premium without exploitation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111]/20">
                <img src={OPS01.images.hero} alt={OPS01.images.alt} className="h-full w-full object-cover" loading="eager" />
              </div>
            </div>
          </section>

          {/* PROOF GRID */}
          <section className="mt-20">
            <div className="text-sm font-semibold text-[#6C7A6F] tracking-wider uppercase mb-2">Proof</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {OPS01.proof.map((p) => <Card key={p.title} title={p.title} body={p.body} />)}
            </div>
          </section>

          {/* VARIANTS */}
          <section className="mt-20">
            <div className="text-sm font-semibold text-[#6C7A6F] tracking-wider uppercase mb-2">Variants</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {OPS01.variants.map((v) => (
                <div key={v.code} className="rounded-2xl border border-[#2A2A2A] bg-[#111]/40 p-6 shadow-sm backdrop-blur">
                  <div className="text-xs text-[#6A6A6A] font-mono">{v.code}</div>
                  <div className="mt-1 text-base font-semibold">{v.name}</div>
                  <div className="mt-2 text-sm text-[#AAAAAA]">{v.tone}</div>
                  <div className="mt-5">
                    <Button href={v.tapstitchUrl} variant="primary">Buy {v.code}</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SIZING */}
          <section id="sizing" className="mt-20 scroll-mt-24">
            <div className="text-sm font-semibold text-[#6C7A6F] tracking-wider uppercase mb-2">{OPS01.sizing.title}</div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#AAAAAA]">{OPS01.sizing.body}</p>
          </section>

          {/* STORY */}
          <section className="mt-20">
            <div className="text-sm font-semibold text-[#6C7A6F] tracking-wider uppercase mb-2">BRKN</div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#AAAAAA]">
              Not a myth. Not a mask. Everyone breaks somewhere — and still shows up.
              OPS/01 is built for the days you don't feel "ready," but move anyway.
              Circle tight. Keep trust close. Execute.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-20">
            <div className="text-sm font-semibold text-[#6C7A6F] tracking-wider uppercase mb-2">FAQ</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {OPS01.faq.map((f) => (
                <div key={f.q} className="rounded-2xl border border-[#2A2A2A] bg-[#111]/40 p-5 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-[#AAAAAA]">{f.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-16 border-t border-[#2A2A2A] pt-8 text-xs text-[#6A6A6A]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>© {new Date().getFullYear()} BRKN</div>
              <div className="flex gap-4">
                <a className="hover:opacity-80" href="#privacy">Privacy</a>
                <a className="hover:opacity-80" href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}