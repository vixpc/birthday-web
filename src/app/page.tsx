import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>🎉 Chúc Mừng Sinh Nhật! 🎂</h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>Chọn chế độ hiển thị bạn muốn xem</p>
      </header>

      <main style={{ padding: '40px 20px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <Link href="/slide" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: 24, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 48 }}>📸</div>
              <h2 style={{ margin: '10px 0 6px 0', color: 'white' }}>Xem Slideshow</h2>
              <p style={{ margin: 0, color: 'white', opacity: 0.85 }}>Trình chiếu ảnh tự động có điều hướng</p>
            </div>
          </Link>

          <Link href="/heart" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: 24, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 48 }}>💖</div>
              <h2 style={{ margin: '10px 0 6px 0', color: 'white' }}>Xem Heart Matrix</h2>
              <p style={{ margin: 0, color: 'white', opacity: 0.85 }}>Hiệu ứng trái tim động trên canvas</p>
            </div>
          </Link>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '30px 20px', background: 'rgba(0,0,0,0.2)', marginTop: 40 }}>
        <p style={{ margin: 0, opacity: 0.8 }}>Made with ❤️ for a special birthday celebration</p>
      </footer>
    </div>
  );
}
