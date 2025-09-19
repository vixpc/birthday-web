'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryProps {
  mode: 'grid' | 'slideshow';
  images: string[];
}

export default function Gallery({ mode, images }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (mode === 'slideshow') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [mode, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (mode === 'grid') {
    return (
      <div className="gallery-grid">
        <div className="grid-container">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <Image
                src={image}
                alt={`Birthday image ${index + 1}`}
                width={300}
                height={300}
                className="gallery-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          .gallery-grid {
            padding: 20px;
          }
          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }
          .grid-item:hover {
            transform: scale(1.05);
          }
          .gallery-image {
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        <Image
          src={images[currentImageIndex]}
          alt={`Birthday image ${currentImageIndex + 1}`}
          width={600}
          height={400}
          className="slideshow-image"
          style={{ objectFit: 'cover' }}
        />
        <button className="prev-btn" onClick={prevImage}>
          ❮
        </button>
        <button className="next-btn" onClick={nextImage}>
          ❯
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .slideshow-container {
          padding: 20px;
          display: flex;
          justify-content: center;
        }
        .slideshow-wrapper {
          position: relative;
          max-width: 600px;
          width: 100%;
        }
        .slideshow-image {
          width: 100%;
          height: 400px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .prev-btn, .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          border: none;
          padding: 15px 20px;
          font-size: 24px;
          cursor: pointer;
          border-radius: 50%;
          transition: background 0.3s ease;
        }
        .prev-btn:hover, .next-btn:hover {
          background: rgba(255, 255, 255, 1);
        }
        .prev-btn {
          left: 10px;
        }
        .next-btn {
          right: 10px;
        }
        .dots {
          display: flex;
          justify-content: center;
          margin-top: 15px;
          gap: 8px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .dot.active {
          background: #ff6b6b;
        }
        .dot:hover {
          background: #ff8e8e;
        }
      `}</style>
    </div>
  );
}
