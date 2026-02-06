# Morrix Labs Website

A professional, minimal, dark-theme website for a digital engineering studio built with Next.js, React, and Tailwind CSS.

## Features

- ⚡ **Fast & Performant** - Next.js 14 with optimized builds
- 🎨 **Professional Dark Theme** - Custom Tailwind configuration for a calm, credible aesthetic
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliance with proper contrast and semantic HTML
- 🔍 **SEO Ready** - Sitemap, robots.txt, and metadata optimization
- 📧 **Contact Form** - Built-in contact form with email integration ready
- 🚀 **Production Ready** - Can be deployed to Vercel with zero configuration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Home page with all sections
│   ├── not-found.tsx        # 404 error page
│   ├── sitemap.ts           # Dynamic sitemap for SEO
│   ├── globals.css          # Global styles
│   └── api/
│       └── contact/route.ts # Contact form API endpoint
├── components/
│   ├── sections/            # Page sections (Hero, Services, etc.)
│   ├── common/              # Header, Footer
│   └── ui/                  # Reusable UI components
├── lib/
│   └── constants.ts         # Content and configuration constants
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration with custom colors
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build optimized production version
npm run build

# Start production server
npm start
```

## Configuration

### Email Setup (Optional)

The contact form is ready for email integration. To enable email notifications:

1. Copy `.env.example` to `.env.local`
2. Configure your email service credentials:
   - **Gmail**: Use Gmail App Passwords
   - **SendGrid**: Use SendGrid API key
   - **Custom SMTP**: Configure any SMTP server

Example with Gmail:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=morrixlabs@gmail.com
```

3. Update `app/api/contact/route.ts` with your email service configuration

### Customization

- **Colors**: Edit `tailwind.config.ts` to modify the dark theme palette
- **Content**: Edit `lib/constants.ts` to update services, projects, pricing, etc.
- **Typography**: Adjust font sizes and styles in `app/globals.css`
- **Spacing**: Modify section spacing constants in `tailwind.config.ts`

## Sections

The homepage includes:

1. **Hero** - Main headline and CTAs
2. **Services** - 4-card grid of offered services
3. **Projects** - Portfolio section showcasing work (LC Labs)
4. **Process** - 3-step workflow explanation
5. **Pricing** - 3 pricing tiers with highlighted plan
6. **Contact** - Contact form with email/Telegram links
7. **Footer** - Navigation and contact information

## Deployment

### Vercel (Recommended)

```bash
# Deploy with one command
npm i -g vercel
vercel
```

### Manual Deployment

The project includes:
- `next.config.ts` - Optimized Next.js configuration
- `.gitignore` - Prevents committing sensitive files
- `package.json` - All dependencies specified

## Performance

- **Page Speed**: Optimized for Core Web Vitals
- **Build Size**: ~108 KB First Load JS
- **No Heavy Animations**: Clean transitions only
- **Optimized Images**: Ready for Next.js Image component

## SEO

- ✅ Dynamic sitemap generation
- ✅ robots.txt configuration
- ✅ Meta tags and Open Graph tags
- ✅ Structured data ready
- ✅ Mobile-friendly design
- ✅ Fast page load times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

- **Email**: morrixlabs@gmail.com
- **Telegram**: @jaskaranbariya

## License

All rights reserved © 2024 Morrix Labs

## Next Steps

1. Update the domain from `morrixlabs.com` to your actual domain
2. Add your logo to the Header component
3. Configure email service for contact form
4. Add more projects to showcase
5. Deploy to Vercel or your preferred hosting

For questions or support, contact us at morrixlabs@gmail.com
