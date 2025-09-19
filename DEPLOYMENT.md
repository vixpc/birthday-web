# 🚀 Deployment Guide

This guide will help you deploy your birthday web project to Vercel for free.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Your project code pushed to GitHub

## 🔗 Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Add the remote origin to your local repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 🌐 Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" (no configuration needed)
6. Wait for deployment to complete
7. Your site will be available at `https://your-project-name.vercel.app`

## ⚙️ Configuration (Optional)

### Environment Variables
If you need environment variables:
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Environment Variables"
3. Add your variables

### Custom Domain
1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to your main branch:
- Every push triggers a new deployment
- Preview deployments for pull requests
- Automatic HTTPS certificates

## 📊 Monitoring

- View deployment logs in the Vercel dashboard
- Monitor performance and analytics
- Set up notifications for failed deployments

## 🎉 Success!

Your birthday web is now live and accessible worldwide! Share the link with friends and family to celebrate special moments.

## 🔧 Troubleshooting

### Build Errors
- Check the deployment logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript configuration

### Image Issues
- Make sure images are in the `public` folder
- Use relative paths starting with `/`
- Optimize image sizes for better performance

### Performance
- Use Next.js Image component for optimization
- Enable compression in Vercel settings
- Monitor Core Web Vitals in the dashboard
