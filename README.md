# 🎉 Birthday Celebration Web

A beautiful birthday celebration website built with Next.js, featuring a photo gallery with multiple display modes and an animated heart matrix.

## ✨ Features

- **Photo Gallery**: Two display modes
  - Grid view: Responsive grid layout
  - Slideshow: Auto-playing slideshow with navigation controls
- **Heart Matrix Animation**: Beautiful animated heart shape using canvas
- **Responsive Design**: Works on all devices
- **Modern UI**: Gradient backgrounds and smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd birthday-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
birthday-web/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Gallery.tsx          # Photo gallery component
│       │   └── HeartMatrix.tsx      # Heart animation component
│       ├── globals.css              # Global styles
│       ├── layout.tsx               # Root layout
│       └── page.tsx                 # Main page
├── public/
│   └── images/                      # Sample birthday images
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Adding Your Own Images

1. Replace the sample images in `public/images/` with your own birthday photos
2. Update the `birthdayImages` array in `src/app/page.tsx` with your image paths

### Modifying the Heart Animation

The heart matrix uses a parametric equation to create the heart shape. You can modify:
- Animation speed in `HeartMatrix.tsx`
- Heart size and colors
- Particle effects

### Styling

The main styles are in `src/app/page.tsx` using styled-jsx. You can customize:
- Colors and gradients
- Fonts and typography
- Layout and spacing

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be available at `https://your-project.vercel.app`

### Other Deployment Options

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional hosting**: Build with `npm run build` and upload the `out` folder

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎂 Happy Birthday!

Enjoy celebrating special moments with this beautiful birthday website! 🎉
