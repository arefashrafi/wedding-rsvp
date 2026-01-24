'use client';

import Image from 'next/image';

export default function FlowerBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Image
        src="/flower.png"
        alt="Floral background"
        fill
        style={{ objectFit: 'cover', opacity: 0.6 }}
        priority
        quality={100}
      />
    </div>
  );
}
