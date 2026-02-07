# Morrix Labs Website - Deployment Guide

## Quick Start Deployment to Vercel

Vercel is the recommended deployment platform for this Next.js application. It provides zero-configuration deployments, serverless functions, and automatic scaling.

### Prerequisites
- GitHub, GitLab, or Bitbucket account
- Vercel account (free at vercel.com)

### Steps

#### 1. Push to Git (if not already done)

```bash
git remote add origin <your-git-repo-url>
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option B: Using Vercel Web Interface**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your git repository
4. Click "Import"
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

### Configuration

#### Domain Setup
After deployment, you can add a custom domain:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., morrixlabs.com)
4. Follow DNS instructions

#### Environment Variables
If you set up email functionality:
1. Go to Project Settings → Environment Variables
2. Add your email service credentials:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=morrixlabs@gmail.com
   ```

## Other Deployment Options

### Docker Deployment

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t morrix-labs .
docker run -p 3000:3000 morrix-labs
```

### Traditional Server Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Upload the `.next` folder and `public` folder** to your server

3. **Install dependencies on the server:**
   ```bash
   npm install --production
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Configure a reverse proxy** (Nginx/Apache) to forward requests to port 3000

### Netlify Deployment

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Performance Monitoring

### Vercel Analytics
- Automatically enabled on Vercel
- View real user metrics in Vercel dashboard
- Monitor page performance and errors

### Web Vitals
The site is optimized for:
- ✓ Largest Contentful Paint (LCP)
- ✓ First Input Delay (FID)
- ✓ Cumulative Layout Shift (CLS)

## Post-Deployment Checklist

- [ ] Domain is pointing to the live site
- [ ] SSL certificate is active (green padlock)
- [ ] All pages load correctly
- [ ] Mobile responsiveness works
- [ ] Contact form submits (check email)
- [ ] Navigation links work
- [ ] External links (LC Labs, Telegram) open correctly
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Google Search Console is set up
- [ ] Analytics (if configured) is tracking

## Continuous Deployment

With Vercel:
- Every push to `main` automatically deploys to production
- Preview deployments for pull requests
- Automatic rollbacks available
- Git history is your deployment history

## Troubleshooting

### Build Failures
- Check console output for specific errors
- Verify all environment variables are set
- Ensure Node version compatibility (18+)

### Page Not Loading
- Check network tab in browser dev tools
- Verify your domain DNS settings
- Check Vercel deployment logs

### Form Not Sending
- Verify email configuration in environment variables
- Check API route logs in Vercel dashboard
- Test with curl: `curl -X POST https://yoursite.com/api/contact`

## Support

For deployment issues or questions:
- Contact: morrixlabs@gmail.com
- Telegram: @jaskaranbariya
- Vercel Support: support@vercel.com

## Next Steps After Deployment

1. Update SEO metadata with your actual domain
2. Set up Google Analytics (optional)
3. Configure email notifications for form submissions
4. Add more projects to the portfolio
5. Monitor performance metrics
6. Regular content updates

---

Happy launching! 🚀
