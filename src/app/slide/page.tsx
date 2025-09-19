'use client';

import Link from 'next/link';
import Gallery from '../components/Gallery';
import { birthdayImages } from '../images';

export default function SlidePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>📸 Slideshow Ảnh</h1>
      <p style={{ textAlign: 'center', color: 'white', opacity: 0.9 }}>Tự động chuyển ảnh, có điều hướng.</p>
      <div style={{ marginTop: 20 }}>
        <Gallery mode="slideshow" images={birthdayImages} />
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Link href="/" style={{ color: '#ffdfdf', textDecoration: 'underline' }}>← Quay lại Trang chủ</Link>
      </div>
    </div>
  );
}


