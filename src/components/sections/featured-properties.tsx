"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProperties = [
  {
    id: 1,
    title: "Lüks Deniz Manzaralı Villa",
    location: "Bodrum, Muğla",
    price: 15000000,
    currency: "₺",
    type: "Villa",
    specs: {
      rooms: "5+2",
      bathrooms: 4,
      size: 450,
      age: 2
    },
    features: ["Deniz Manzarası", "Özel Havuz", "Bahçe", "Kapalı Garaj"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Öne Çıkan",
    badgeColor: "bg-primary-500"
  },
  {
    id: 2,
    title: "Modern Şehir Merkezi Daire",
    location: "Beşiktaş, İstanbul",
    price: 3500000,
    currency: "₺",
    type: "Daire",
    specs: {
      rooms: "3+1",
      bathrooms: 2,
      size: 140,
      age: 1
    },
    features: ["Şehir Manzarası", "Asansör", "Güvenlik", "Otopark"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Yeni",
    badgeColor: "bg-green-500"
  },
  {
    id: 3,
    title: "Yatırım Fırsatı Ofis",
    location: "Levent, İstanbul",
    price: 8500000,
    currency: "₺",
    type: "Ofis",
    specs: {
      rooms: "Açık Plan",
      bathrooms: 2,
      size: 280,
      age: 5
    },
    features: ["Metro Yakını", "Klima", "Güvenlik", "Vale"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Yatırım",
    badgeColor: "bg-blue-500"
  }
];

export default function FeaturedProperties() {
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Öne Çıkan <span className="text-gradient">Emlaklar</span>
          </h2>
          <p className="section-subtitle">
            Uzman ekibimiz tarafından özenle seçilmiş, en popüler emlak ilanlarımızı keşfedin.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              <div className="card overflow-hidden hover-lift">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${property.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {property.badge}
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300 hover-scale">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredProperty === property.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link
                        href={`/property/${property.id}`}
                        className="btn btn-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      >
                        Detayları Gör
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {property.title}
                  </h3>

                  {/* Price */}
                  <div className="text-2xl font-bold text-primary-500 mb-4">
                    {formatPrice(property.price)} {property.currency}
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.specs.rooms}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {property.specs.bathrooms} Banyo
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {property.specs.size} m²
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{property.features.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Daha fazla emlak seçeneği için tüm ilanlarımızı inceleyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-sale" className="btn btn-primary hover-lift">
              Satılık İlanlar
            </Link>
            <Link href="/for-rent" className="btn btn-outline hover-lift">
              Kiralık İlanlar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
