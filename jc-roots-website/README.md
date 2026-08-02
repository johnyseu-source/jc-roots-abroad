# JC Roots Abroad - Website

A premium personalised gifts and home decor website built with Next.js, React, and Tailwind CSS.

## Features

✨ **Hero Section** - Eye-catching introduction with brand story
🎁 **Product Grid** - Beautiful product showcase
✏️ **Live Design Customizer** - Real-time preview of personalized gifts
📖 **About Section** - Brand story and mission
⭐ **Customer Reviews** - Social proof
💼 **B2B Services** - Custom solutions for businesses
📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Cormorant Garamond (serif) + Inter (sans-serif)
- **Deployment:** Vercel (free)

## Brand Colors

- Forest Green: `#234034`
- Warm Oak: `#B68A5A`
- Soft Ivory: `#F8F6F1`
- Slate Grey: `#2F3437`
- Warm Sand: `#DCC982`

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Make Changes

Edit component files in `/components` to update content. Changes auto-reload.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
jc-roots-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Values.tsx          # Core values
│   ├── Products.tsx        # Product grid
│   ├── DesignCustomizer.tsx # Live customizer (interactive)
│   ├── Story.tsx           # Brand story
│   ├── Reviews.tsx         # Customer testimonials
│   ├── Business.tsx        # B2B section
│   └── Footer.tsx          # Footer
└── package.json            # Dependencies

```

## Customization Guide

### Update Products

Edit `components/Products.tsx`:

```tsx
const products = [
  { id: 1, name: 'Your Product', price: '€XX.XX', icon: '🎁' },
  // Add more products
];
```

### Update Reviews

Edit `components/Reviews.tsx`:

```tsx
const reviews = [
  {
    stars: 5,
    text: "Customer testimonial...",
    author: 'Customer Name',
  },
  // Add more reviews
];
```

### Update Colors

Edit `tailwind.config.ts` colors or `app/globals.css`

## Deployment

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Deploy automatically

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Domain Setup

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., johnyscavalcante.com)
3. Update DNS records in your domain registrar
4. Wait 24 hours for DNS propagation

## Environment Variables

Create `.env.local` for sensitive data:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Performance Tips

- Images are optimized with Next.js Image component
- Fonts are self-hosted via Google Fonts
- CSS is minified automatically
- Static assets are cached

## Common Issues

**"Port 3000 already in use"**
```bash
npm run dev -- -p 3001
```

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Add real product images
2. Integrate Stripe for payments
3. Add blog section with SEO
4. Implement product search
5. Add customer accounts
6. Set up email automation

## Support

For questions or issues, check the [Next.js documentation](https://nextjs.org/docs).

---

**Created:** August 2024
**Brand:** JC Roots Abroad - Crafted with Meaning
