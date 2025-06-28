"use client";

import Link from "next/link";

interface PropertyErrorProps {
  error: string | null;
  type: 'sale' | 'rent';
}

export default function PropertyError({ error, type }: PropertyErrorProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          {error || 'İlan Bulunamadı'}
        </h1>
        <p className="text-gray-600 mb-8">
          Aradığınız emlak ilanı bulunamadı veya kaldırılmış olabilir.
        </p>
        <div className="space-y-3">
          <Link 
            href={type === 'sale' ? '/for-sale' : '/for-rent'}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            ← {type === 'sale' ? 'Satılık' : 'Kiralık'} İlanlara Dön
          </Link>
          <div>
            <Link 
              href="/"
              className="text-gray-500 hover:text-primary"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
