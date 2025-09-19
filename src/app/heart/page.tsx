'use client';

import Link from 'next/link';
import HeartMatrix from '../components/HeartMatrix';

export default function HeartPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>💖 Heart Matrix</h1>
      <p style={{ textAlign: 'center', color: 'white', opacity: 0.9 }}>Hiệu ứng trái tim động trên canvas.</p>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <HeartMatrix width={560} height={380} />
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Link href="/" style={{ color: '#ffdfdf', textDecoration: 'underline' }}>← Quay lại Trang chủ</Link>
      </div>
    </div>
  );
}


