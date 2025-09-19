'use client';

import { useState } from 'react';
import Gallery from './components/Gallery';
import HeartMatrix from './components/HeartMatrix';

export default function Home() {
  const [galleryMode, setGalleryMode] = useState<'grid' | 'slideshow'>('grid');
  
  // Sample birthday images - you can replace these with actual images
  const birthdayImages = [
    '/images/birthday1.svg',
    '/images/birthday2.svg',
    '/images/birthday3.svg',
    '/images/birthday4.svg',
    '/images/birthday5.svg',
    '/images/birthday6.svg',
    '/images/birthday7.svg',
    '/images/birthday8.svg'
  ];

  return (
    <div className="birthday-container">
      <header className="header">
        <h1 className="title">🎉 Chúc Mừng Sinh Nhật! 🎂</h1>
        <p className="subtitle">Những kỷ niệm đẹp nhất trong ngày đặc biệt này</p>
      </header>

      <main className="main-content">
        <section className="gallery-section">
          <div className="gallery-controls">
            <h2>📸 Kho Ảnh Kỷ Niệm</h2>
            <div className="mode-buttons">
              <button
                className={`mode-btn ${galleryMode === 'grid' ? 'active' : ''}`}
                onClick={() => setGalleryMode('grid')}
              >
                Lưới
              </button>
              <button
                className={`mode-btn ${galleryMode === 'slideshow' ? 'active' : ''}`}
                onClick={() => setGalleryMode('slideshow')}
              >
                Trình Chiếu
              </button>
            </div>
          </div>
          <Gallery mode={galleryMode} images={birthdayImages} />
        </section>

        <section className="heart-section">
          <h2>💖 Trái Tim Yêu Thương</h2>
          <p style={{opacity: 0.9, marginTop: 8}}>Nhịp đập của yêu thương được vẽ nên từ hàng ngàn tia sáng.</p>
          <HeartMatrix width={560} height={380} />
        </section>
      </main>

      <footer className="footer">
        <p>Made with ❤️ for a special birthday celebration</p>
      </footer>

      <style jsx>{`
        .birthday-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-family: 'Arial', sans-serif;
        }
        
        .header {
          text-align: center;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .title {
          font-size: 3rem;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: bounce 2s infinite;
        }
        
        .subtitle {
          font-size: 1.2rem;
          margin: 0;
          opacity: 0.9;
        }
        
        .main-content {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .gallery-section {
          margin-bottom: 60px;
        }
        
        .gallery-controls {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .gallery-controls h2 {
          font-size: 2rem;
          margin: 0 0 20px 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .mode-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        
        .mode-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .mode-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .mode-btn.active {
          background: #ff6b6b;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        }
        
        .heart-section {
          text-align: center;
        }
        
        .heart-section h2 {
          font-size: 2rem;
          margin: 0 0 10px 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .footer {
          text-align: center;
          padding: 30px 20px;
          background: rgba(0, 0, 0, 0.2);
          margin-top: 40px;
        }
        
        .footer p {
          margin: 0;
          opacity: 0.8;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .gallery-controls h2,
          .heart-section h2 {
            font-size: 1.5rem;
          }
          
          .mode-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .mode-btn {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}
