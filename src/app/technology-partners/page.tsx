"use client";

import PageHero from "@/components/sections/page-hero";
import PartnerCard from "@/components/sections/partner-card";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Green Bilgisayar",
    logo: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "Üstün deneyimle ofis ve oyun bilgisayarları, ekipmanları üretimi. PC kasası, güç kaynağı, soğutucu, monitör, klavye ve aksesuarlar gibi geniş ürün yelpazesiyle sektörde öncü.",
    services: ["Bilgisayar Teknolojisi", "Modern Ofis Bilgisayarları", "Oyun Bilgisayarları", "Bilgisayar Ekipmanları"],
    website: "https://greenbilgisayar.com"
  },
  {
    name: "Medel Elektronik",
    logo: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "Endüstriyel otomasyon alanında 30 yıllık tecrübe. Motor hız kontrolü, demiryolu ve tersane uygulamaları, ölçüm/kontrol kartları üretimi ve otomasyon çözümleri.",
    services: ["Otomasyon Çözümleri", "Endüstriyel Otomasyon", "Motor Hız Kontrolü", "Kontrol Kartları"],
    website: "https://medelelektronik.com"
  },
  {
    name: "Pasha Teknoloji",
    logo: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "Cam teknolojisinde devrim yaratan yenilikçi çözümler. Düz cam, züccaciye, cam endüstrisi ekipmanları ve soda külü üretimi. Yenilik, kalite ve müşteri odaklılık temel değerlerimiz.",
    services: ["Cam Çözümleri", "Düz Cam", "Züccaciye", "Cam Teknolojisi"],
    website: "https://pashateknoloji.com"
  },
  {
    name: "BPA",
    logo: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "Yenilenebilir enerji, endüstriyel ekipman, teknoloji ve makine sektörlerinde çok markalı tedarikçi. Demiryolu sistemleri, cam ürünleri ve hammadde tedariki konularında uzman.",
    services: ["Yenilenebilir Enerji", "Endüstriyel Ekipman", "Demiryolu Sistemleri", "Hammadde Tedariki"],
    website: "https://bpa.com.tr"
  }
];

const advantages = [
  {
    title: "Teknoloji Liderliği",
    description: "En son teknolojik çözümler ve yenilikçi ürünlerle sektöre öncülük.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Güçlü İş Birliği",
    description: "Sektörün önde gelen teknoloji firmalarıyla stratejik ortaklıklar.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Sürdürülebilirlik",
    description: "Çevre dostu ve sürdürülebilir teknolojik çözümler.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Kalite Güvencesi",
    description: "Uluslararası standartlarda kalite ve güvenilirlik.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function TechnologyPartnersPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Teknoloji Partnerlerimiz"
        subtitle="İŞ ORTAKLARIMIZ"
        description="Gayrimenkul sektörüne özel çözümler sunan teknoloji liderleri"
        imagePath="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        gradient="from-primary-900/60 via-primary-800/40 to-transparent"
      />

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                name={partner.name}
                logo={partner.logo}
                description={partner.description}
                services={partner.services}
                website={partner.website}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Particle Effect */}
      <section id="contact-section" className="relative py-24 bg-gradient-to-br from-primary-900/90 to-primary-800/90 overflow-hidden">
        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Teknoloji İş Ortaklığının Avantajları
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 max-w-3xl mx-auto"
            >
              IREMWORLD teknoloji iş ortaklığı ile kazanacağınız rekabet avantajları
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-6 text-primary-200 group-hover:scale-110 transition-transform">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-primary-100">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-900 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Teknoloji Partneri Olun
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
